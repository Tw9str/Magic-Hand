'use client';
import { useState } from 'react';
import Socials from '../widgets/Socials';
import Link from 'next/link';
import Form from 'next/form';
import { sendEmailAction } from '@/app/actions/sendEmail';
import { useFormStatus } from 'react-dom';

export default function Contact() {
  const { pending } = useFormStatus();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await sendEmailAction(new FormData(event.target));
    if (!result.success) {
      setErrors(result.errors || { general: [result.message] });
      setSuccessMessage(null);
    } else {
      setSuccessMessage(result.message);
      setErrors(null);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto py-20 sm:py-24 lg:py-32">
        <h2 className="text-green-500 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wide text-center">
          Neem Contact Op
        </h2>
        <p className="text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Heeft u vragen of wilt u meer informatie? Vul het onderstaande
          formulier in, of neem direct contact met ons op via e-mail of
          telefoon.
        </p>

        <div className="mt-12">
          <Form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                Naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Uw naam"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Uw e-mailadres"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="subject"
                className="text-gray-700 font-medium mb-2"
              >
                Onderwerp
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Onderwerp van uw bericht"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-2"
              >
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Uw bericht"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
                disabled={pending}
              >
                {pending ? 'Versturen...' : 'Verstuur Bericht'}
              </button>
            </div>
          </Form>
          {errors && (
            <div className="text-red-500 text-center mt-6">
              {Object.entries(errors).map(([field, messages]) => (
                <p key={field}>{messages.join(', ')}</p>
              ))}
            </div>
          )}

          {successMessage && (
            <div className="text-green-500 text-center mt-6">
              <p>{successMessage}</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">U kunt ons ook bereiken via:</p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700">
              <strong>Email: </strong>
              <Link
                href="mailto:Info@magichand.nl"
                className="text-green-500 hover:underline"
              >
                Info@magichand.nl
              </Link>
            </li>
            <li className="text-gray-700">
              <strong>Telefoon: </strong>
              <Link
                href="tel:+31644146666"
                className="text-green-500 hover:underline"
              >
                +31 06 4414 6666
              </Link>
            </li>
          </ul>
        </div>
        <Socials />
      </div>
    </section>
  );
}
