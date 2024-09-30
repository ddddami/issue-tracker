import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  issuesSummary: {
    open: number;
    inProgress: number;
    closed: number;
  };
}
const IssuesSummary = ({
  issuesSummary: { open, inProgress, closed },
}: Props) => {
  const containers: { label: string; status: Status; value: number }[] = [
    { label: "Open Issues", status: "OPEN", value: open },
    { label: "In-progress Issues", status: "IN_PROGRESS", value: inProgress },
    { label: "Closed Issues", status: "CLOSED", value: closed },
  ];
  return (
    <Flex gap={"4"}>
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-base font-normal md:font-medium text-zinc-700"
              href={`/issues?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssuesSummary;
