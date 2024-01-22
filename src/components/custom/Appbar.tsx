import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Appbar() {
  return (
    <div className="grid grid-cols-3 gap-2 justify-between w-screen py-3 px-3 md:px-5 bg-white">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-self-start">
        <Icons.logo className="" />
        <h1 className="hidden lg:block">Untitled Form</h1>
      </div>
      <div className="flex gap-7 items-center justify-self-center">
        <div className="flex gap-5">
          <Icons.undo className="" />
          <Icons.redo />
          <Icons.preview />
        </div>
      </div>
      <div className="justify-self-end">
        <Avatar>
          <AvatarImage src={`/img/hello.png`} alt="@shadcn" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="lg:hidden sm:block col-span-3 text-center">
        Untitled Form
      </h1>
    </div>
  );
}
