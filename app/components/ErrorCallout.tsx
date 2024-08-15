import { PropsWithChildren } from "react";
import { Callout } from "@radix-ui/themes";

const ErrorCallout = ({ children }: PropsWithChildren) => {
  return (
    <Callout.Root color="red">
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorCallout;
