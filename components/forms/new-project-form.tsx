"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { projectProposalFormSchema } from "@/lib/schemas";
import Link from "next/link";

const projectTypes = [
  {
    id: "web",
    label: "Web Development",
  },
  {
    id: "app",
    label: "App Development",
  },
  {
    id: "education",
    label: "Educational Technology",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

const formSchema = projectProposalFormSchema;

const NewProjectForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      projectType: [],
      timeplan: "",
      needToKnow: "",
    },
  });

  const postData = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const response = await fetch("/api/project-proposal", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoading(false);
    console.log(data);
    if (response.ok) {
      setIsDialogOpen(true);
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    postData(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16 my-12">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-yellow-50">
                What is your full name?
              </FormLabel>
              <FormControl>
                <Input placeholder="Add your name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-yellow-50">
                What is your email?
              </FormLabel>
              <FormControl>
                <Input placeholder="Add your email here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-xl text-yellow-50">
                  What can I help you with?
                </FormLabel>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-start w-full">
                {projectTypes.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="projectType"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <div
                            className={cn(
                              "border hover:cursor-pointer border-input bg-background shadow-sm hover:border-brand rounded-full px-8 py-4 text-xl",
                              field.value?.includes(item.id) &&
                                "bg-accent text-accent-foreground"
                            )}
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                className="hidden"
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-2xl text-nowrap hover:cursor-pointer">
                              {item.label}
                            </FormLabel>
                          </div>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormDescription>Select one atleast.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeplan"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-yellow-50">
                What is your deadline?
              </FormLabel>
              <FormControl>
                <Input placeholder="Add your timeplan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="needToKnow"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-yellow-50">
                What do I need to know?
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me more about your project"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          className="rounded-full p-8 text-xl w-1/2"
          type="submit"
        >
          {isLoading && <LuLoader2 className="h-4 w-4 animate-spin mr-2" />}
          Send inquiry
        </Button>
      </form>
      <Dialog
        open={isDialogOpen}
        onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
      >
        <DialogContent className="bg-primary">
          <DialogHeader>
            <DialogTitle>Now we are connected?</DialogTitle>
            <DialogDescription>
              Thank you for your cooperation. I will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Link href="/">
                <Button type="button" variant="secondary">
                  Go to home.
                </Button>
              </Link>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Form>
  );
};

export default NewProjectForm;
