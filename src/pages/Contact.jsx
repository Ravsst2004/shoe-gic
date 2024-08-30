import React from "react";
import Layouts from "../components/layouts/Layouts";
import Button from "../components/ui/Button";
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <Layouts>
      <div className="mx-4 my-20 sm:max-w-lg lg:max-w-7xl sm:mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="w-full shadow-lg p-14 rounded-lg border-2 border-slate-200/25">
            <h1 className="text-xl lg:text-4xl font-medium pb-6">
              We Are Here! <br /> Please Send A Message
            </h1>

            <form className="flex flex-col gap-y-6">
              <div className="flex flex-col lg:flex-row gap-x-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
              <textarea
                placeholder="Message"
                className="appearance-none block w-full px-3 py-2 h-36 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              ></textarea>
              <Button className="bg-red-600 border-red-600 text-white font-medium rounded-md">
                Send Message
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col justify-center items-center gap-y-2 text-center shadow-lg p-6 rounded-lg border-2 border-slate-200/25 border-slate-100">
              <IoHomeOutline size={50} className="text-red-600" />
              <h1 className="font-medium text-xl">Address</h1>
              <p>PT. Jro Datuk Nusantara Jl. LoL No. 27, Blok B5 IShowSpeed</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2 text-center shadow-lg p-6 rounded-lg border-2 border-slate-200/25 border-slate-100">
              <FiPhoneCall size={50} className="text-red-600" />
              <h1 className="font-medium text-xl">Phone No</h1>
              <p>+84 123 456 789</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2 text-center shadow-lg p-6 rounded-lg border-2 border-slate-200/25 border-slate-100">
              <AiOutlineMail size={50} className="text-red-600" />
              <h1 className="font-medium text-xl">Email</h1>
              <p>shoegic@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
