import { z } from "zod";

export const forgotPasswordSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .email("Enter a valid email address"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;