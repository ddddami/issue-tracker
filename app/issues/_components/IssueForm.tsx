"use client";

import { ErrorCallout, ErrorMessage, Spinner } from "@/app/components";
import { issueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError("An unexpected error occured.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-3">
      {error && <ErrorCallout>{error}</ErrorCallout>}
      <TextField.Root
        defaultValue={issue?.title}
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>

      <Controller
        name="description"
        defaultValue={issue?.description}
        control={control}
        render={({ field }) => <SimpleMdeReact {...field} />}
      />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>

      <Button mt={"1"} disabled={isSubmitting}>
        {issue ? "Edit Issue" : "Submit New Issue"}
        {isSubmitting && <Spinner />}
      </Button>
      {/* <ThemePanel /> */}
    </form>
  );
};

export default IssueForm;
