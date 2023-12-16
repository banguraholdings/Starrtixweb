import SignInForm from "@/components/SignInForm";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Signin() {
  return (
    <div className="flex w-full justify-center">
      <div className=" h-[100vh]  hidden w-full lg:block">
       <img src={"background/main2.jpg"} alt="" className="w-full h-full"/>
      </div>

      {/* sign in form */}
      <div className="w-full md:w-6/12 lg:w-8/12 h-[100vh] items-center  flex flex-col space-y-6">
        {/* header */}
        <div className="w-full flex justify-end items-center p-4  space-x-2">
          <h1 className="font-light">Don&apos;t have an Account?</h1>
          {/* register btn */}
          <Link
            href={"/Auth/Signup"}
            className=" border-[0.2px] border-black w-36 rounded-full h-12 items-center justify-center flex"
          >
            Register
          </Link>
        </div>

        <div className="w-full   h-full flex flex-col items-center justify-center md:space-y-4">
          {/* Welcome */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold md:text-2xl ">Welcome to</h1>
            <h1 className="text-4xl font-bold  text-blue-500">
              Sky<span className="text-xl text-white text-border">tix</span>
            </h1>
          </div>
          {/* form fields */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            <h1 className="text-sm font-light md:text-base">sign into your account </h1>
            <SignInForm />
            <div className="flex justify-center items-center">
              <div className="w-full h-[0.5px] bg-black"></div>
              <h1 className="w-80 text-center">or</h1>
              <div className="w-full h-[0.5px] bg-black"></div>
            </div>

            {/* oauth */}
            <div className="w-full grid grid-cols-1 gap-4">
              <button className="w-full space-x-2 h-14 border flex items-center justify-center rounded">
                <FcGoogle size={24} />
                <h1>Log in with Google</h1>
              </button>
              <button className="w-full space-x-2 h-14 border flex items-center justify-center rounded">
                <FaFacebook size={24} color="blue" />
                <h1>Log in with Facebook</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
