"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUpload } from "react-icons/fa6";
import { uploadProfilePic, getProfilePic } from "@/api/Auth";
import { userAuth } from "../../../../useContext";

import { FaRegUserCircle } from "react-icons/fa";

// Validation schema
const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  username: Yup.string().required("Required"),
  phonenumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
  dateofbirth: Yup.date().required("Required"),
});

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  phonenumber: string;
  dateofbirth: Date | string;
}

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  phonenumber: "",
  dateofbirth: "",
};

function Page() {

  
  const { username } = userAuth();

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  const [profilepic, setProfilepic] = useState<string>("");
  const getToken = async () => {
    const token = await localStorage.getItem("token");
    setToken(token || "");
  };
  const handleImageChange = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      uploadProfilePic(formData, token);
    } catch (error) {}
  };

  useEffect(() => {
    //get profile picture
    getProfilePic().then((value) => {
      console.log(value?.data[0].image);
      setProfilepic(value?.data[0].image);
    });
    getToken();
    console.log(token);
  }, [token]);
  return (
    <Userdashboardwrapper>
      <div className="w-full flex-col flex p-6  items-center  justify-center">
        <div className="text-lg font-bold">Profile</div>
        {/* profile pic */}
        <div className="w-full flex p-1 lg:w-8/12  flex-col md:flex-row items-center gap-2">
          <div className="lg:w-40 lg:h-40 flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full border">
            {profilepic ? (
              <img src={profilepic && profilepic} alt="image" />
            ) : (
              <FaRegUserCircle size={80} color={"black"} />
            )}
          </div>

          {/* action buttons */}
          <div className="flex lg:h-full flex-col justify-center gap-2">
            <div className="flex space-x-4">
              <input
                type="file"
                onChange={handleImageChange}
                className="border rounded"
                // placeholder="Upload Image"
                //   className="w-40 p-3 items-center justify-center flex bg-black text-white rounded-lg"
              />
              <button
                onClick={handleSubmit}
                className="p-4 border rounded hover:border-blue-500"
              >
                <FaUpload />
              </button>
            </div>

            <Link
              href={""}
              className="w-40 p-3 items-center justify-center flex  border rounded-lg"
            >
              <h1>Delete Picture</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="w-full flex flex-col items-center ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="grid grid-cols-1 w-11/12 lg:w-8/12 gap-6 ">
            <div className="md:flex justify-between ">
              {/* first name */}
              <label htmlFor="firstname" className="block md:w-[45%]">
                <span className="text-gray-700">First Name</span>
                <Field
                  name="firstname"
                  type="text"
                  placeholder={username?.first_name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </label>
              {/* lastname */}
              <label htmlFor="lastname" className="block md:w-[45%]">
                <span className="text-gray-700">Last Name</span>
                <Field
                  name="lastname"
                  type="text"
                  placeholder={username?.last_name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </label>
            </div>

            <label htmlFor="email" className="block">
              <span className="text-gray-700">Email Address</span>
              <Field
                name="email"
                type="email"
                placeholder={username?.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label htmlFor="username" className="block">
              <span className="text-gray-700">Username</span>
              <Field
                name="username"
                type="text"
                placeholder={username?.username}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label htmlFor="phonenumber" className="block">
              <span className="text-gray-700">Phone Number</span>
              <Field
                name="phonenumber"
                type="text"
                placeholder={username?.phonenumber}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              <ErrorMessage
                name="phonenumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label htmlFor="dateofbirth" className="block">
              <span className="text-gray-700">Date of Birth</span>
              <Field
                name="dateofbirth"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              <ErrorMessage
                name="dateofbirth"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </Userdashboardwrapper>
  );
}
export default Page;
