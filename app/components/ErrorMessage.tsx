import { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorAlert = ({ children }: PropsWithChildren) => {
  if (children === null) return null;
  return (
    <Text as="p" color="red">
      {children}
    </Text>
  );
};

export default ErrorAlert;
