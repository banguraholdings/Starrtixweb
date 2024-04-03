import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  acceptedRefundRequest: string;
  refundPolicy: string;
  termsAndCondition: string;
}

const initialValues: FormValues = {
  acceptedRefundRequest: '',
  refundPolicy: '',
  termsAndCondition: '',
};

const validationSchema = Yup.object().shape({
  acceptedRefundRequest: Yup.string().required('You must select an option'),
  refundPolicy: Yup.string(),
  termsAndCondition: Yup.string(),
});
function Step4({ closeStep,Finalvalues }: any) {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-5">Event Terms and Policies</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          Finalvalues(values)
          actions.setSubmitting(false);
          closeStep(1);

        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <div className="mb-2">Accepted Refund Request?</div>
              <label className="inline-flex items-center mr-6">
                <Field type="radio" name="acceptedRefundRequest" value="yes" className="form-radio" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <Field type="radio" name="acceptedRefundRequest" value="no" className="form-radio" />
                <span className="ml-2">No</span>
              </label>
              <ErrorMessage name="acceptedRefundRequest" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="refundPolicy" className="block mb-2">Refund Policy (optional)</label>
              <Field name="refundPolicy" as="textarea" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div>
              <label htmlFor="termsAndCondition" className="block mb-2">Terms and Condition (optional)</label>
              <Field name="termsAndCondition" as="textarea" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Step4
