import React from "react";
import { Skeleton } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </div>
  );
};

export default IssueFormSkeleton;
