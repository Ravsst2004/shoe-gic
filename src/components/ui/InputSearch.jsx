import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function InputSearch() {
  return (
    <div className="w-full flex flex-col gap-y-2 justify-center bg-transparent">
      <Input
        type="text"
        className="border-2 border-slate-700 rounded-md p-2 mx-4"
      />
      <Button
        customClassName={
          "text-slate-200 hover:text-slate-800 bg-slate-800 hover:bg-transparent transition ease-in-out duration-300 font-semibold mx-4"
        }
      >
        Search
      </Button>
    </div>
  );
}
