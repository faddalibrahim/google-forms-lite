import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Appbar() {
  return (
    <div className="flex justify-between items-center w-screen p-5 bg-white gap-4">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <Icons.logo className="" />
        <h1>Untitled Form</h1>
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex gap-3">
          <Icons.undo />
          <Icons.redo />
          <Icons.preview />
        </div>
        <div>
          <Button variant="default">Save</Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src={`/img/hello.png`} alt="@shadcn" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
