import { z } from "zod";

const STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"] as const;

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(255),
  description: z.string().min(3, "Description is required."),
  status: z.enum(STATUSES).optional(),
});
