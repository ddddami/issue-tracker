import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssuesTable, {
  columnNames,
  IssueQuery,
} from "./_components/IssuesTable";
import IssueActions from "./IssueActions";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

const IssuesPage = async ({ searchParams }: { searchParams: IssueQuery }) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const pageSize = 10;
  const currentPage = parseInt(searchParams.page) || 1;

  const where = { status };
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });
  const issuesCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap={"3"}>
      <IssueActions />
      <IssuesTable issues={issues} searchParams={searchParams} />

      <Pagination
        currentPage={currentPage}
        itemsCount={issuesCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issues",
  description: "View a all project issues",
};

export default IssuesPage;
