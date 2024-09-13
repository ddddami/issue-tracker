import { Flex, Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";
import IssuesChart from "./IssuesChart";
import { Metadata } from "next";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const issuesSummary = { open, inProgress, closed };
  return (
    <Grid gap={"5"} columns={{ initial: "1", md: "2" }}>
      <Flex gap={"5"} direction="column">
        <IssuesSummary issuesSummary={issuesSummary} />
        <IssuesChart issuesSummary={issuesSummary} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const dynamic = 'force-dynamic'; 

export const metadata: Metadata = {
title: 'Issue Tracker - Dashboard',
description: 'View a summary of project issues',
openGraph: {
  type: "website",
  url: "https://example.com",
  title: "Issue Tracker",
  description: "Create, view an manage project issues",
  siteName: "Issue Tracker",
 
}
}