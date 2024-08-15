import { notFound } from "next/navigation";
import { Flex, Heading, Text } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading as="h1">{issue.title}</Heading>
      <Flex gap="3" my="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <p>{issue.description}</p>
    </div>
  );
};

export default page;
