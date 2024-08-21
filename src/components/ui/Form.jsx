import React from "react";
import Select from "./Select";
import Button from "./Button";

export default function Form() {
  const incrementDecrementButtonCard = (
    <div className="flex border-2 w-fit border-slate-200 px-1">
      <button>-</button>
      <input type="text" defaultValue={1} className="w-10 text-center" />
      <button>+</button>
    </div>
  );

  return (
    <form action="">
      <div className="flex flex-col gap-y-4">
        <Select
          label="Size: "
          className="w-full text-sm md:text-lg border-slate-200 border-2 text"
        >
          <option value="7">7</option>
          <option value="8">8</option>
        </Select>
        <Select
          label="Color: "
          className="w-full text-sm md:text-lg border-slate-200 border-2 text"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
        </Select>

        <div className="flex gap-x-6 text-sm ">
          {incrementDecrementButtonCard}
          <Button className="bg-slate-900  w-fit border-slate-900 text-slate-100">
            ADD TO CART
          </Button>
        </div>
      </div>
    </form>
  );
}
