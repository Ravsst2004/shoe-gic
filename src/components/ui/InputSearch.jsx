import Input from "./Input";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function InputSearch({ handleCloseSearch, closeButton }) {
  return (
    <div className="flex mx-auto bg-white py-14 lg:py-0">
      {closeButton && (
        <div
          onClick={handleCloseSearch}
          className="absolute top-0 right-0 p-4 cursor-pointer "
        >
          <IoMdClose className="text-xl hover:text-red-600" />
        </div>
      )}

      <div className="flex px-6 sm:px-0">
        <Input
          type="text"
          placeholder="Search..."
          className="border-y-2 border-l-2 rounded-l w-full lg:h-10 border-red-600 lg:border-stone-300 p-2 focus:border-red-600 focus:outline-none placeholder:text-sm"
        />

        <Button
          className={
            "flex items-center text-slate-200 border-red-600 hover:text-slate-800 px-4 10 bg-red-600 rounded-r hover:bg-transparent transition ease-in-out duration-300 font-semibold"
          }
          aria-label="Cari"
        >
          <CiSearch className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
