import { Flex, Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";
import IssuesChart from "./IssuesChart";

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
