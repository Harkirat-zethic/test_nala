"use client";

import { useState, useCallback, useRef, useEffect, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "@/types";

const INITIAL_STATE: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const STORAGE_KEY = "contact-idempotency-key";

function regenerateKey(): string {
  const key = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  try { sessionStorage.setItem(STORAGE_KEY, key); } catch { /* SSR / private browsing */ }
  return key;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
  serverError: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  reset: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const idempotencyKeyRef = useRef("");

  // Hydrate key from sessionStorage on mount, or create a fresh one
  useEffect(() => {
    let stored: string | null = null;
    try { stored = sessionStorage.getItem(STORAGE_KEY); } catch { /* SSR / private browsing */ }
    idempotencyKeyRef.current = stored ?? regenerateKey();
  }, []);

  const validate = useCallback((data: ContactFormData) => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
      setServerError(null);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (isSubmitting) return;

      setServerError(null);

      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Idempotency-Key": idempotencyKeyRef.current,
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          idempotencyKeyRef.current = regenerateKey();
          setIsSubmitted(true);
          setFormData(INITIAL_STATE);
          return;
        }

        // Map 422 field errors back to form
        if (response.status === 422 && data.fieldErrors) {
          setErrors(data.fieldErrors);
          return;
        }

        // All other errors
        setServerError(data.error || "Something went wrong. Please try again.");
      } catch {
        setServerError("Unable to send message. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, validate]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setIsSubmitted(false);
    setServerError(null);
    idempotencyKeyRef.current = regenerateKey();
  }, []);

  return {
    formData,
    isSubmitting,
    isSubmitted,
    errors,
    serverError,
    handleChange,
    handleSubmit,
    reset,
  };
}
