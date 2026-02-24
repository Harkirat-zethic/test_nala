"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "@/types";

const INITIAL_STATE: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  reset: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

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
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call — replace with actual endpoint
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
        setFormData(INITIAL_STATE);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setIsSubmitted(false);
  }, []);

  return {
    formData,
    isSubmitting,
    isSubmitted,
    errors,
    handleChange,
    handleSubmit,
    reset,
  };
}
