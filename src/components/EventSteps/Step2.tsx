import React from 'react'
import { Formik, Form, Field, ErrorMessage,FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Define the types for the form values
interface FormValues {
    eventType: string;
    nameOnTicket: string;
    quantity: number;
    price: number | null;
  }
  
  // Define the types for the form errors
  interface FormErrors {
    eventType?: string;
    price?: string;
  }
  
  const initialValues: FormValues = {
    eventType: '',
    nameOnTicket: '',
    quantity: 1,
    price: null,
  };
function Step2({ closeStep,Finalvalues }: any) {
   // Validate function ensuring correct typing for errors
  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
  
    if (!values.eventType) {
      errors.eventType = 'Please select the event type';
    }

    if (values.eventType === 'paid' && (values.price === null || values.price <= 0)) {
      errors.price = 'Price is required for paid events and must be greater than 0';
    }
  
    return errors;
  };

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    Finalvalues(values)
    actions.setSubmitting(false);
    closeStep(1);

  };

    
  return (
    <div className="max-w-md mx-auto mt-10">
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
            <div>
              <div>Which kind of event is it?</div>
              {["free", "paid", "invite"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <Field type="radio" name="eventType" value={type} className="form-radio" />
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </label>
              ))}
              <ErrorMessage name="eventType" component="div" className="text-red-500 text-sm" />
            </div>

            {values.eventType === 'paid' && (
              <div>
                <label htmlFor="price" className="block">Price (Le)</label>
                <Field name="price" type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Step2
