"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { z } from "zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", { ...data });
          router.push("/issues");
        } catch (error) {
          setError("An unexpected error occured.");
        }
      })}
      className="max-w-xl space-y-3"
    >
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      {errors.title && (
        <Text as="p" color="red">
          {errors.title.message}
        </Text>
      )}
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMdeReact {...field} />}
      />
      {errors.description && (
        <Text as="p" color="red">
          {errors.description.message}
        </Text>
      )}

      <Button>Submit New Issue</Button>
      {/* <ThemePanel /> */}
    </form>
  );
};

export default NewIssuePage;
