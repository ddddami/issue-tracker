"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Flex, Text } from "@radix-ui/themes";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface Props {
  currentPage: number;
  itemsCount: number;
  pageSize: number;
}
const Pagination = ({ currentPage, itemsCount, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  if (pagesCount === 1) return null;
  return (
    <Flex align="center" gap="2">
      <Text>
        Page {currentPage} of {pagesCount}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <ChevronsLeft size={18} />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeft size={18} />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pagesCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRight size={18} />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pagesCount}
        onClick={() => changePage(pagesCount)}
      >
        <ChevronsRight size={18} />
      </Button>
    </Flex>
  );
};

export default Pagination;
