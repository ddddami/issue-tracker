import React from "react";
import { Skeleton } from "@radix-ui/themes";

const NewIssueLoadingPage = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default NewIssueLoadingPage;
