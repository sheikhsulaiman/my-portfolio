import NewProjectForm from "@/components/forms/new-project-form";
import React from "react";

const StartAProjectPage = () => {
  return (
    <main className="mt-28 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-extrabold text-7xl py-20">
          Tell me about <br /> your <span className="text-brand">project</span>
        </h1>
        <NewProjectForm />
      </div>
    </main>
  );
};

export default StartAProjectPage;
