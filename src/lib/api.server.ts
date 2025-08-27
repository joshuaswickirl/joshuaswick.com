import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailInputSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  _botpoison: z.string().min(1, { message: "Missing botpoison token" }),
});

export const submitEmail = createServerFn({ method: "POST" })
  .validator(emailInputSchema)
  .handler(async ({ data }) => {
    try {
      const formId = process.env.FORMSPARK_FORM_ID;

      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, _botpoison: data._botpoison }),
      });

      if (response.ok) {
        return { success: true as const, alreadySubscribed: false as const };
      }

      const text = await response.text();
      console.error("Formspark submission failed", response.status, text);
      return {
        success: false as const,
        error: "Something went wrong. Please try again.",
      };
    } catch (error: unknown) {
      console.error("Failed to submit email subscription", error);
      return {
        success: false as const,
        error: "Something went wrong. Please try again.",
      };
    }
  });
