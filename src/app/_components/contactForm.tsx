'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import supabase from '../../config/supabaseClient';

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Name is required.' }).max(100, { message: 'Name is too long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(4, { message: 'Subject is required.' }).max(200, { message: 'Subject is too long.' }),
  message: z.string().min(20, { message: 'Message is required.' }).max(1000, { message: 'Message is too long.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting }
    } = useForm({
      resolver: zodResolver(contactFormSchema),
    });
  
    const [formStatus, setFormStatus] = useState('');
  
    const onSubmit = async (values: ContactFormData) => {
      setFormStatus(''); 
      try {
        const { error: _error } = await supabase
        .from('contact')
        .insert([values])

        if (_error) {
          setFormStatus('error');
          return; 
        } else {
          setFormStatus('success');
          reset(); 
        }
      } catch (error) {
        console.error("Supabase insert error:", error);
        setFormStatus('error');
      }
    };
  
    return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs italic mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs italic mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400"
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs italic mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 resize-y"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs italic mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.0 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </>
                  )}
                </button>
              </div>
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500 text-white rounded-md flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Message sent successfully!
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500 text-white rounded-md flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 mr-2" /> Failed to send message. Please try again.
                </div>
              )}
            </form>
    );
  };