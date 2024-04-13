import SignInForm from "@/components/SignInForm";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import SignUpForm from "@/components/SignupForm";

function Signup() {
  return (
      <div className="flex w-full justify-center flex-row-reverse">
        <div className=" h-[100vh]  hidden w-full lg:block lg:">
          <img
            src={"../../images/signupback.png"}
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* sign in form */}
        <div className="w-full md:w-6/12 lg:w-8/12 h-[100vh] items-center  flex flex-col space-y-6 overflow-scroll hide-scrollbar">
          {/* header */}
          <div className="w-full flex justify-end items-center p-4  space-x-2">
            <h1 className="font-light">Don&apos;t have an Account?</h1>
            {/* register btn */}
            <Link
              href={"/Auth/Signin"}
              className=" border-[0.2px] border-black w-36 rounded-full h-12 items-center justify-center flex"
            >
              Login
            </Link>
          </div>

          <div className="w-full h-full  justify-center  p-2 flex flex-col items-center  md:space-y-2">
            {/* Welcome */}
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold md:text-2xl ">Welcome to</h1>
              <img
             src="../../images/starrtix.png"
             className="h-20"
             />
            </div>
            {/* form fields */}
            <div className="flex flex-col space-y-4 md:space-y-4 w-8/12">
              <SignUpForm/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Signup;
