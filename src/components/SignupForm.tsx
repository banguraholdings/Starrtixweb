'use client'

import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Password must contain 8 characters, one uppercase, one lowercase, one number and one special character').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
  agreeToTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('Required to agree'),
});


const SignUpForm= () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <ErrorMessage name="firstName" component="div" />

          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <ErrorMessage name="lastName" component="div" />

          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <ErrorMessage name="email" component="div" />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <ErrorMessage name="password" component="div" />

          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <ErrorMessage name="confirmPassword" component="div" />

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
          <ErrorMessage name="agreeToTerms" component="div" />

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
