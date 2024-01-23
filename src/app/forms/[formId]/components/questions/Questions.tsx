import DropdownWrapper from "@/components/custom/DropdownWrapper";
import { Input } from "@/components/ui/input";

export default function Questions({ sections, setSections }: any) {
  return (
    <div>
      {sections.map((section: any, index: any) => {
        return (
          <div key={index}>
            {section.map((question: any, index: any) => (
              <div
                key={question.id}
                className="flex justify-between gap-10 mb-6 bg-white px-8 py-10 rounded-md"
              >
                <div key={question.id} className="flex flex-col gap-2 grow">
                  <h1>
                    {question.question}
                    {question.required && (
                      <span className="text-red-400 ml-1">*</span>
                    )}
                  </h1>
                  {question.type === "text" ? (
                    <Input
                      type={question.type}
                      placeholder={question.placeholder}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {
                    <DropdownWrapper
                      placeholder="short answer"
                      options={[
                        {
                          id: "short-answer",
                          label: "short answer",
                          value: "short answer",
                        },
                        {
                          id: "paragraph",
                          label: "paragraph",
                          value: "paragraph",
                        },
                        {
                          id: "multiple-choice",
                          label: "multiple choice",
                          value: "multiple choice",
                        },
                        {
                          id: "checkboxes",
                          label: "checkboxes",
                          value: "checkboxes",
                        },
                        {
                          id: "dropdown",
                          label: "dropdown",
                          value: "dropdown",
                        },
                        {
                          id: "date",
                          label: "date",
                          value: "date",
                        },
                        {
                          id: "time",
                          label: "time",
                          value: "time",
                        },
                        {
                          id: "linear-scale",
                          label: "linear scale",
                          value: "linear scale",
                        },
                        {
                          id: "file-upload",
                          label: "file upload",
                          value: "file upload",
                        },
                      ]}
                    />
                  }
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
