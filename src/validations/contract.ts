import { z } from "zod";
import { validationMessages } from "./utils";

export const contractValidation = z.object({
  fullname: z
    .string({
      required_error: validationMessages.required,
    })
    .min(3, "Precisa ter no mínimo 3 caracteres"),
  email: z
    .string({
      required_error: validationMessages.required,
    })
    .email(validationMessages.email),
  payment_method: z.string({
    required_error: validationMessages.required,
  }),
});

export type ContractFields = z.infer<typeof contractValidation>;
