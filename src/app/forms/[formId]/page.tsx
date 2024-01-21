// ui componentns
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// custom components
import Questions from "./components/questions/Questions";
import Responses from "./components/responses/Responses";
import Settings from "./components/settings/Settings";
import Appbar from "@/components/custom/Appbar";

export default function Form() {
  const SUB_PAGES = [
    {
      id: "questions",
      name: "Questions",
      page: <Questions />,
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
    <div className="flex flex-col justify-between items-center bg-gray-50 h-screen gap-2">
      <Appbar />
      <div className="w-screen flex justify-center grow">
        <Tabs defaultValue="questions" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-3">
            {SUB_PAGES.map((PAGE) => (
              <TabsTrigger value={PAGE.id} key={PAGE.id}>
                {PAGE.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {SUB_PAGES.map((PAGE) => (
            <TabsContent
              value={PAGE.id}
              key={PAGE.id}
              className="bg-white grow p-4"
            >
              {PAGE.page}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
