import { notFound } from "next/navigation";
import { Box, Flex, Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import EditIssueButton from "../EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "../DeleteIssueButton";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="2">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex gap="2" direction="column">
          <AssigneeSelect />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default page;
