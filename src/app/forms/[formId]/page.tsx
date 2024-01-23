"use client";

// ui componentns
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// custom components
import Questions from "./components/questions/Questions";
import Responses from "./components/responses/Responses";
import Settings from "./components/settings/Settings";
import Appbar from "@/components/custom/Appbar";
import { useState } from "react";

export default function Form() {
  const [sections, setSections] = useState<any>([
    [
      {
        id: "question-1",
        question: "What is your name",
        type: "text",
        options: [],
        required: true,
        placeholder: "Enter your name",
        description: "Enter your name",
        name: "name",
        value: "",
        errors: [],
        validation: "required",
        disabled: false,
      },
      {
        id: "question-2",
        question: "Bio",
        type: "text",
        options: [],
        required: true,
        placeholder: "Enter your name",
        description: "Enter your name",
        name: "name",
        value: "",
        errors: [],
        validation: "required",
        disabled: false,
      },
      {
        id: "question-1",
        question: "What is your name",
        type: "text",
        options: [],
        required: true,
        placeholder: "Enter your name",
        description: "Enter your name",
        name: "name",
        value: "",
        errors: [],
        validation: "required",
        disabled: false,
      },
      {
        id: "question-2",
        question: "Bio",
        type: "text",
        options: [],
        required: true,
        placeholder: "Enter your name",
        description: "Enter your name",
        name: "name",
        value: "",
        errors: [],
        validation: "required",
        disabled: false,
      },
      {
        id: "question-2",
        question: "Bio",
        type: "text",
        options: [],
        required: true,
        placeholder: "Enter your name",
        description: "Enter your name",
        name: "name",
        value: "",
        errors: [],
        validation: "required",
        disabled: false,
      },
    ],
  ]);

  const SUB_PAGES = [
    {
      id: "questions",
      name: "Questions",
      page: <Questions sections={sections} setSections={setSections} />,
    },
    {
      id: "responses",
      name: "Responses",
      page: <Responses />,
    },
    {
      id: "settings",
      name: "Settings",
      page: <Settings />,
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-gray-100 h-screen overflow-hidden">
      <Appbar />
      <Tabs
        defaultValue="questions"
        className="w-screen grow h-full flex flex-col justify-between items-center px-2 mt-2 rounded-lg relative z-10"
      >
        <TabsList className="grid w-full md:w-[50vw] grid-cols-3">
          {SUB_PAGES.map((PAGE) => (
            <TabsTrigger value={PAGE.id} key={PAGE.id}>
              {PAGE.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="grow h-full overflow-y-auto w-screen relative">
          {SUB_PAGES.map((PAGE) => (
            <TabsContent
              value={PAGE.id}
              key={PAGE.id}
              className="w-full md:w-[50vw] mx-auto"
            >
              {PAGE.page}
            </TabsContent>
          ))}
        </div>
        <div className="absolute top-[85%] md:top-[12%] md:right-[15%] flex flex-row gap-4 md:flex-col md:w-max bg-white shadow-lg  w-[90vw] rounded-md text-center bg-white text-[#32E9BD]">
          <div className="hover:bg-[#32E9BD] hover:text-white px-10 py-5 md:px-5 cursor-pointer">
            +
          </div>
          <div className="hover:bg-[#32E9BD] hover:text-white px-10 py-5 md:px-5 cursor-pointer">
            ==
          </div>
        </div>
      </Tabs>
    </div>
  );
}
