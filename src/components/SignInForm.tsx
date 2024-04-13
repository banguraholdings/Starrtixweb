"use client";

import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "@/api/Auth";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { userAuth } from "../../useContext";

import { Hourglass } from "react-loader-spinner";

type auth = {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phonenumber: string;
  email: string;
};

const SignInForm = () => {
  const { loginAuthUser, isLoading } = userAuth();

  const Router = useRouter();
  //state
  // Define your validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Initial values for your form fields
  const initialValues = {
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values: any) => {
    // console.log(values);
    const Auth: auth = {
      username: values.email,
      password: values.password,
      first_name: "",
      last_name: "",
      phonenumber: "",
      email: "",
    };
    // login(values.email, values.password).then((data) => {
    //   setIsLoading(true)
    //   console.log(data.data.token);
    //   if(data.data.status ===200){
    //     localStorage.setItem('token',data.data.token)
    //     setIsAuthenticated(true)
    //     setIsLoading(false)
    //     Router.push("/")
    //   }
    // });
    // Handle sign-in logic here

    loginAuthUser(Auth);
  };

  useEffect(() => {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <Field
              name="email"
              type="text"
              className={`mt-1 h-12 block p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.email && touched.email ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-2"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              className={`mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.password && touched.password ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? (
                <Hourglass
                  height="20"
                  width="20"
                  colors={["white", "#72a1ed"]}
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <h1> Sign In</h1>
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
