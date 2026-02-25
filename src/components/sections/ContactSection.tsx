"use client";

import Image from "next/image";
import { useContactForm } from "@/hooks/useContactForm";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const {
    formData,
    isSubmitting,
    isSubmitted,
    errors,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-[clamp(1.5rem,7.8vw,9.375rem)] py-[clamp(10rem,12.25vw,7.5rem)]"
    >
      {/* Watercolor textured background — anchored left */}
      <div className="absolute inset-y-0 left-[-33rem] w-[130%] opacity-70">
        <Image
          src="/images/watercolor-bg.jpg"
          alt=""
          fill
          className="object-cover object-left scale-[1.1]"
          aria-hidden
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-1">
        {/* Left — heading + description */}
        <div
          className={cn(
            "max-w-[40.5rem] transition-all duration-500",
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
          )}
        >
          <h2 className="font-afacad text-[clamp(2.5rem,4.17vw,5rem)] font-medium leading-[1.075] text-[#252525]">
            Get In Touch With Us
          </h2>
          <p className="mt-[clamp(2.5rem,4.17vw,5rem)] font-outfit text-[clamp(1rem,1.46vw,1.75rem)] leading-[1.3] text-body">
            Looking to buy, sell, or invest in property? We&apos;re here to
            guide you every step of the way. Send us a message and let&apos;s
            start the conversation — no pressure, just real support from real
            people who care about your goals.
          </p>
        </div>

        {/* Right — form card */}
        <div
          className={cn(
            "transition-all duration-500 delay-200",
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
          )}
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center rounded border border-border bg-white py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/images/check-icon.svg"
                  alt="Success"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mt-4 font-afacad text-xl font-semibold text-dark">
                Message Sent!
              </h3>
              <p className="mt-2 text-body">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[clamp(1.5rem,2.3vw,2.375rem)] rounded border border-border bg-white p-[clamp(1.25rem,2.3vw,2.375rem)]"
            >
              {/* Row 1: Name + Email */}
              <div className="grid gap-[clamp(1.5rem,2.66vw,3.2rem)] sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  placeholder="john doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john.doe@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* Row 2: Phone + Subject */}
              <div className="grid gap-[clamp(1.5rem,2.66vw,3.2rem)] sm:grid-cols-2">
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FormField
                  label="Subject"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[0.8rem]">
                <label
                  htmlFor="message"
                  className="font-afacad text-[clamp(1rem,1.25vw,1.5rem)] text-dark-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[13rem] resize-none border-b border-[#c5c9d2] bg-transparent px-2 py-3 font-afacad text-[clamp(1.125rem,1.46vw,1.75rem)] text-dark outline-none transition-colors placeholder:text-[#c5c9d2] focus:border-primary"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative flex w-fit cursor-pointer items-center gap-5 rounded bg-light px-7 py-6 font-outfit text-[clamp(1rem,1.46vw,1.75rem)] text-[#252525] shadow-[0px_1px_0px_0px_#b9b6cd,inset_0px_1px_0px_0px_white] transition-colors hover:bg-light-gray disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Contact Us Now"}
                {!isSubmitting && (
                  <Image
                    src="/images/arrow-link.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="-scale-y-100"
                    aria-hidden
                  />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      <label
        htmlFor={name}
        className="font-afacad text-[clamp(1rem,1.25vw,1.5rem)] text-dark-secondary"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-b border-[#c5c9d2] bg-transparent px-2 py-3 font-afacad text-[clamp(1.125rem,1.46vw,1.75rem)] text-dark outline-none transition-colors placeholder:text-[#c5c9d2] focus:border-primary"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
