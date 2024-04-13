"use client";

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { userAuth } from "../../useContext";
import { Hourglass } from "react-loader-spinner";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  phonenumber: Yup.string().required("Required"),
  date_of_birth: Yup.date().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number and one special character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("Required to agree"),
});

const SignUpForm = () => {
  const { signup, isLoading } = userAuth();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    date_of_birth: Date(),
    username: "",
    phonenumber: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const data = {
          username: values.username,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
          email: values.email,
          phonenumber: values.phonenumber,
          date_of_birth: values.date_of_birth.toString(),
        };
        console.log(data);
        signup(data);
        console.log(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="gap-6 flex flex-col">
          {step1 ? (
            <div className="flex flex-col space-y-2">
              <div>
                <h1>First Name</h1>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="firstName">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* last name */}
              <div>
                <h1>Last Name</h1>

                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              {/* user name */}
              <div>
                <h1>Username</h1>

                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="username">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* email */}
              <div>
                <h1>Email</h1>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep1(false);
                  setStep2(true);
                }}
                style={{ color: "white", padding: 6, borderRadius: 12 }}
                className="bg-blue-600"
              >
                Next
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              {/* Password */}
              <div>
                <h1>Password</h1>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div>
                <h1>Confirm Password</h1>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <h1>Phone Number</h1>
                <input
                  type="text"
                  name="phonenumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phonenumber}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="phonenumber">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <h1>Date of Birth</h1>
                <input
                  type="date"
                  name="date_of_birth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date_of_birth}
                  className="mt-1 h-12 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage name="date_of_birth">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>

              <label className="flex gap-4">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.agreeToTerms}
                />
                Agree to terms and conditions
              </label>
              <ErrorMessage name="agreeToTerms">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <button
                type="submit"
                style={{ color: "white", padding: 6, borderRadius: 12 }}
                className="bg-blue-600 flex justify-center"
              >
                {isLoading ? (
                  <Hourglass
                    height="20"
                    width="20"
                    colors={['white', '#72a1ed']}
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  <h1>Sign Up</h1>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep1(true);
                  setStep2(false);
                }}
              >
                {"<<"}back
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
