import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"] as const;

const createIssueSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(2048),
  status: z.enum(STATUSES).optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
    },
  });

  return NextResponse.json(newIssue);
}
