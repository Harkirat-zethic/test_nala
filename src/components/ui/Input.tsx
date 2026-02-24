"use client";

import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-dark-secondary"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "border-b border-border bg-transparent px-1 py-3 text-dark outline-none transition-colors",
          "placeholder:text-body-light focus:border-primary",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function TextArea({ label, className, id, ...props }: TextAreaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-dark-secondary"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "min-h-[120px] resize-none border-b border-border bg-transparent px-1 py-3 text-dark outline-none transition-colors",
          "placeholder:text-body-light focus:border-primary",
          className
        )}
        {...props}
      />
    </div>
  );
}
