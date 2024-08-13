"use client";

import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMdeReact />
      <Button>Submit New Issue</Button>
      {/* <ThemePanel /> */}
    </div>
  );
};

export default NewIssuePage;
