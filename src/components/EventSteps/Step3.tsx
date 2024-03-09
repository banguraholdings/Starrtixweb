import React from 'react'
import { Formik, Field, Form, ErrorMessage,FormikProps } from 'formik';
import * as Yup from 'yup';
// Define the validation schema using Yup
interface FormValues {
    description: string;
    flyer: File | null;
    video: File | null;
  }
  
  // Custom component props
  interface FileInputProps {
    field: {
      name: string;
    };
    form: FormikProps<FormValues>;
  }
  
  const FileInput: React.FC<FileInputProps> = ({ field, form, ...props }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      form.setFieldValue(field.name, files ? files[0] : null); // Set the file or null
    };
  
    return <input type="file" {...props} onChange={handleChange} />;
  };
  
  // Yup validation schema
  const validationSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    flyer: Yup.mixed().required('A flyer is required'),
    video: Yup.mixed().required('A video is required'),
  });
  
  const initialValues: FormValues = {
    description: '',
    flyer: null,
    video: null,
  };
  
function Step3({ closeStep }: any) {
  return (
    <div className="max-w-md mx-auto my-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          closeStep(1);

        }}
      >
        <Form className="space-y-6">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Field name="description" as="textarea" rows={3} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="flyer" className="block text-sm font-medium text-gray-700">Upload Flyer</label>
            <Field name="flyer" component={FileInput} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="flyer" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">Event Video</label>
            <Field name="video" component={FileInput} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="video" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Step3
