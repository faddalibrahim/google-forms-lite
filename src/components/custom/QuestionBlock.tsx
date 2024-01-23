import { Input } from "@/components/ui/input";

export default function QuestionBlock({
  question,
  required,
  type,
  placeholder,
}: any) {
  return (
    <div className="flex flex-col gap-2 grow">
      <h1>
        {question}
        {question.required && <span className="text-red-400 ml-1">*</span>}
      </h1>
      {question.type === "text" ? (
        <Input type={type} placeholder={placeholder} />
      ) : (
        <></>
      )}
    </div>
  );
}
