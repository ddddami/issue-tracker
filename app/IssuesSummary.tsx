import Link from "next/link";
import { Card, Flex, Text } from "@radix-ui/themes";
import { Status } from "@prisma/client";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssuesSummary = ({ open, inProgress, closed }: Props) => {
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
              className="text-sm font-medium"
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
