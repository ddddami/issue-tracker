import { z } from "zod";

const STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"] as const;

export const issueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(255),
  description: z.string().min(3, "Description is required."),
  status: z.enum(STATUSES).optional(),
});

export const patchIssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(255).optional(),
  description: z.string().min(3, "Description is required.").optional(),
  status: z.enum(STATUSES).optional(),
  assignedUserId: z
    .string()
    .min(1, "Assignee is required.")
    .max(65535)
    .optional()
    .nullable(),
});
