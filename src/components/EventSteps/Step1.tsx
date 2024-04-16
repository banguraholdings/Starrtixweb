import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Step1({ closeStep, Finalvalues }: any) {
  // Schema for form validation
  const validationSchema = Yup.object().shape({
    eventTitle: Yup.string().required("Event title is required"),
    eventCategory: Yup.string().required("Please select an event category"),
    fullAddress: Yup.string().required("Full address is required"),
    startDate: Yup.date() .min(new Date(), 'Date must be in the present or future').required("Start date is required"),
    startTime: Yup.string().required("Start time is required"),
    endTime: Yup.string().required("End time is required"),
  });

  // Initial values for the form fields
  const initialValues = {
    eventTitle: "",
    eventCategory: "",
    fullAddress: "",
    startDate: "",
    startTime: "",
    endTime: "",
  };

  // Submit handler
  const onSubmit = (values: any) => {
    console.log(values);
    Finalvalues(values)
    closeStep(1);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 ">
      <h1 className="text-2xl font-bold mb-5">Create Event</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-4">
            {/* first */}
            <div className="lg:space-x-4 lg:flex lg:justify-between">
              <div className="lg:w-6/12" >
                <label
                  htmlFor="eventTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Title
                </label>
                <Field
                  name="eventTitle"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="eventTitle"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="lg:w-6/12">
                <label
                  htmlFor="eventCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Category
                </label>
                <Field
                  name="eventCategory"
                  as="select"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select a category</option>
                  <option value="music">Music</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </Field>
                <ErrorMessage
                  name="eventCategory"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

            </div>
            {/* second */}
            <div className="lg:space-x-4 lg:flex lg:justify-between">

            <div className="lg:w-6/12">
              <label
                htmlFor="fullAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Full Address
              </label>
              <Field
                name="fullAddress"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="fullAddress"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="lg:w-6/12">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <Field
                name="startDate"
                type="date"
              
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="startDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            </div>

            {/* third */}
            <div className="lg:space-x-4 lg:flex lg:justify-between">

            <div className="lg:w-6/12">
              <label
                htmlFor="startTime"
                className="block text-sm font-medium text-gray-700"
              >
                Start Time
              </label>
              <Field
                name="startTime"
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="startTime"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="lg:w-6/12">
              <label
                htmlFor="endTime"
                className="block text-sm font-medium text-gray-700"
              >
                End Time
              </label>
              <Field
                name="endTime"
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="endTime"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Step1;
