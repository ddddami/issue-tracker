import React from "react";
import { Box, Card, Container, Flex, Skeleton, Text } from "@radix-ui/themes";

const LoadingIssuePage = () => {
  return (
    <Container className="max-w-xl">
      <Skeleton />
      <Flex className="h-8" height="20px" gap="3" my="3">
        <Skeleton height="16px" width="90px" />
        <Skeleton height="16px" width="120px" />
      </Flex>
      <Card className="mt-3 space-y-3 prose">
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </Card>
    </Container>
  );
};

export default LoadingIssuePage;
