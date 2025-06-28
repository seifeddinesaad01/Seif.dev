// ContactForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormValues {
  name: string;
  email: string;
  engagement: string;
  budget: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  engagement: Yup.string().required('Engagement model is required'),
  budget: Yup.string().required('Budget range is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues: FormValues = {
  name: '',
  email: '',
  engagement: '',
  budget: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await fetch('/api/send-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipientEmail: 'saadseif304@gmail.com', details: values }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    // Set a fixed min-height matching the form’s original height
    <div className="relative min-h-[600px]">
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 p-4 rounded-lg"
          >
            <CheckCircle size={48} className="text-green-500 mb-2" />
            <p className="text-green-700 font-medium">Submitted successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="engagement" className="block text-sm font-medium text-gray-700 mb-2">
                  Engagement Model
                </label>
                <Field
                  as="select"
                  id="engagement"
                  name="engagement"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled>
                    Select Engagement Model
                  </option>
                  <option value="hourly">Hourly</option>
                  <option value="fixed">Fixed Price</option>
                </Field>
                <ErrorMessage name="engagement" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <Field
                  as="select"
                  id="budget"
                  name="budget"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled>
                    Select Budget Range
                  </option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </Field>
                <ErrorMessage name="budget" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-36 resize-none focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full py-4 font-semibold bg-blue-500 hover:bg-blue-600">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
