import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { Issue } from "@prisma/client";
import { IssueStatusBadge } from "@/app/components";

interface Props {
  issue: Issue;
}
const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <Heading as="h1">{issue.title}</Heading>
      <Flex gap="3" my="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card variant="ghost" className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
