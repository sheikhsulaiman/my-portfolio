import NewProjectForm from "@/components/forms/new-project-form";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import React from "react";

const StartAProjectPage = () => {
  return (
    <main className="mt-28 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-extrabold text-7xl py-20">
          Tell me about <br /> your <span className="text-brand">project</span>
        </h1>
        <NewProjectForm />
        <div className="flex flex-col gap-2 my-8">
          <h3 className="font-bold text-4xl">
            Can I talk to you <span className="text-brand">directly?</span> Yes
            you can!
          </h3>
          <Link
            href="mailto:sheikhsulaimansony@outlook.com"
            className="flex items-center justify-start gap-2"
          >
            <LuMail size={24} />
            <p className="text-2xl hover:text-brand hover:underline">
              sheikhsulaimansony@outlook.com
            </p>
          </Link>
          <Link
            href="mailto:sonyedtech@gmail.com"
            className="flex items-center justify-start gap-2"
          >
            <LuMail size={24} />
            <p className="text-2xl hover:text-brand hover:underline">
              sonyedtech@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default StartAProjectPage;
