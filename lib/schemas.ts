import * as z from "zod";

export const projectProposalFormSchema = z.object({
  fullname: z.string({ required_error: "Please specify" }).min(2).max(50),
  email: z.string({ required_error: "Please specify" }).email(),
  projectType: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  timeplan: z.string({ required_error: "Please specify" }).min(1).max(100),
  needToKnow: z.string({ required_error: "Please specify" }).min(10).max(500),
});
