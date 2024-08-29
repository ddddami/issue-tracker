import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { Trash2 } from "lucide-react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <Trash2 size={20} strokeWidth={1.25} />
      <Link href={`/issues/${issueId}/delete`}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
