"use client";

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
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

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="gap-6 flex flex-col">
          <div>
            <h1>First Name</h1>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className="border w-full p-1 rounded-lg"
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
              className="border w-full p-1 rounded-lg"
            />
            <ErrorMessage name="lastName">
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
              className="border w-full p-1 rounded-lg"
            />
            <ErrorMessage name="email">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
          </div>

          {/* Password */}
          <div>
            <h1>Password</h1>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="border w-full p-1 rounded-lg"
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
              className="border w-full p-1 rounded-lg"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
          </div>

          <label>
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


          <button type="submit"
          style={{backgroundColor:"#2196F3", color:"white", padding:6, borderRadius:12}}
          >Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
