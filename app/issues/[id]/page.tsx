import { cache } from "react";
import { notFound } from "next/navigation";
import { Box, Flex, Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import { auth } from "@/auth";
import DeleteIssueButton from "../DeleteIssueButton";
import EditIssueButton from "../EditIssueButton";
import AssigneeSelect from "./AssigneeSelect";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: { id: issueId },
  })
);
const page = async ({ params }: Props) => {
  const session = await auth();
  const issue = await fetchUser(parseInt(params.id));
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="2">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex gap="2" direction="column">
          <AssigneeSelect issue={issue} />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton disabled={!session} issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: "Details of issue " + issue?.id,
  };
}

export default page;
