import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-24 text-white">Get in Touch</h2>
        <div className="max-w-2xl mx-auto bg-black rounded-2xl shadow-xl p-8 border border-gray-800">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;