import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { PenLine } from "lucide-react";

interface Props {
  issueId: number;
}

const EditIssueButton = ({ issueId }: Props) => {
  return (
    <Button>
      <PenLine size={18} strokeWidth={1.25} />
      <Link href={`/issues${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
