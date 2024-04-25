import React from "react";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react";
import SuccessModal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function preventSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <main>
      <div className="flex flex-row border border-black rounded-lg justify-center w-full h-screen bg-white">
        <div className=" w-[50%] border border-white object-contain rounded ">
          <img src="favicon.ico" alt="Logo " className="w-[20px]" />

          <form
            onSubmit={(e) => preventSubmit(e)}
            className="flex flex-col justify-center items-center w-full h-full space-y-3 border border-gray-200 rounded-lg  bg-gray-100 ml-1"
          >
            <span className="flex flex-col justify-start  items-start">
              <text className="text-gray-800"> Sign In </text>
              <text className="text-gray-500  text-[10px] pt-1 pb-6">
                Enter your account details to enter our platform.
              </text>

              <button className=" flex flex-col w-[100%] border border-gray-400 rounded h-[30px]">
                <span className="flex flex-row justify-center items-center ml-4 mr-1 pr-1 text-gray-600">
                  <Icon icon="flat-color-icons:google" className="mr-2" /> Sign
                  In With Google
                </span>
              </button>

              <button className=" flex flex-col w-[100%] border border-gray-400 rounded h-[30px] mt-3 ">
                <span className="flex flex-row jusitify-center items-center ml-4 mr-2 text-gray-600">
                  <Icon icon="devicon:okta" className="pr-1 ml-2" />
                  Sign In With Okta
                </span>
              </button>

              <span className="w-full flex flex-row justify-center  h-8 mt-3 text-[15px] text-gray-400">
                <hr className="h-1 my-8 bg-gray-200 border-2 w-[40%] dark:bg-gray-200 mt-3 mr-1" />
                OR
                <hr className="h-1 my-8 bg-gray-200 border-2 w-[40%] dark:bg-gray-200 mt-3 ml-1" />
              </span>

              <div className="flex flex-col w-[100%] mt-8">
                <text className="text-black text-[12px]">Email</text>
                <input
                  type="email"
                  placeholder=""
                  className="border border-gray-400 rounded-md p-2 mb-4 h-[30%]"
                />
                <text className="text-black text-[12px]">Password</text>
                <input
                  type="Password"
                  placeholder=""
                  className="border border-gray-400 rounded-md p-2 mb-4 h-[30%]"
                />
                <a
                  href="#"
                  className="text-blue-500 flex justify-end mb-6 text-[12px]"
                >
                  Forgot Password?
                </a>

                <button
                  onClick={openModal}
                  className="bg-blue-500 flex justify-center items-center space-x-2  rounded-md h-[30px] text-white mb-5"
                >
                  Login
                </button>
                <p>
                  Don't Have An Account?{" "}
                  <a href="#" className="text-blue-600 text-[12px]">
                    Create an account
                  </a>
                </p>
              </div>
            </span>
          </form>
        </div>
        <div className=" w-[50%] relative border border-white rounded-2xl ">
          <img
            src="Doctor.jpg"
            alt="Doctor "
            className=" h-full border border-y-white  object-contain-[h-full ,w-full]"
          />
          <div className="bg-blue-500 text-white  p-4 border border-white rounded-md absolute w-[70%] right-0 bottom-0 border-2xl border-white  ">
            A foundation GPT model built from the ground up on medical events
            <span className="text-gray-400 text-wrap ">
              {" "}
              specifically for all the encoded data in healthcare.
            </span>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={isOpen} onClose={closeModal} />
    </main>
  );
};

export default App;
