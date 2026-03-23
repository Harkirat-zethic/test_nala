import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(254, "Email must be 254 characters or fewer"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone must be 30 characters or fewer")
    .optional()
    .default(""),
  subject: z
    .string()
    .trim()
    .max(200, "Subject must be 200 characters or fewer")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message must be 5000 characters or fewer"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
