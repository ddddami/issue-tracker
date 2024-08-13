import { Button, TextArea, TextField, ThemePanel } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
      {/* <ThemePanel /> */}
    </div>
  );
};

export default NewIssuePage;
