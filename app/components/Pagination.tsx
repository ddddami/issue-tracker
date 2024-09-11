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
  const pagesCount = Math.ceil(itemsCount / pageSize);
  return (
    <Flex align="center" gap="2">
      <Text>
        Page {currentPage} of {pagesCount}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <ChevronsLeft size={18} />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <ChevronLeft size={18} />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pagesCount}>
        <ChevronRight size={18} />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pagesCount}>
        <ChevronsRight size={18} />
      </Button>
    </Flex>
  );
};

export default Pagination;
