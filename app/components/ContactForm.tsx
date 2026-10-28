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
    <div className="relative min-h-[560px]">
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-4 text-center"
          >
            <CheckCircle size={48} className="mb-3 text-brand" />
            <p className="text-xl font-medium text-fg">Thanks — message received. I'll be in touch soon.</p>
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
            <Form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-dim">
                    Your Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-brand focus:outline-none"
                  />
                  <ErrorMessage name="name" component="div" className="mt-1.5 text-sm text-red-400" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-dim">
                    Your Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-brand focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="mt-1.5 text-sm text-red-400" />
                </div>
              </div>

              <div>
                <label htmlFor="engagement" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-dim">
                  Engagement Model
                </label>
                <Field
                  as="select"
                  id="engagement"
                  name="engagement"
                  className="w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-brand focus:outline-none"
                >
                  <option value="" disabled>
                    Select Engagement Model
                  </option>
                  <option value="hourly">Hourly</option>
                  <option value="fixed">Fixed Price</option>
                </Field>
                <ErrorMessage name="engagement" component="div" className="mt-1.5 text-sm text-red-400" />
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-dim">
                  Budget Range
                </label>
                <Field
                  as="select"
                  id="budget"
                  name="budget"
                  className="w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-brand focus:outline-none"
                >
                  <option value="" disabled>
                    Select Budget Range
                  </option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </Field>
                <ErrorMessage name="budget" component="div" className="mt-1.5 text-sm text-red-400" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-dim">
                  Your Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="w-full h-36 resize-none rounded-xl border border-line-strong bg-canvas px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-brand focus:outline-none"
                />
                <ErrorMessage name="message" component="div" className="mt-1.5 text-sm text-red-400" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="h-auto w-full rounded-full bg-brand py-4 text-base font-medium text-white hover:bg-brand/85">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
