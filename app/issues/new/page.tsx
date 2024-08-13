"use client";

import { Button, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewIssuePage = () => {
  interface IssueForm {
    title: string;
    description: string;
  }
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", {...data, });
        router.push("/issues");
      })}
      className="max-w-xl space-y-3"
    >
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMdeReact {...field} />}
      />
      <Button>Submit New Issue</Button>
      {/* <ThemePanel /> */}
    </form>
  );
};

export default NewIssuePage;
