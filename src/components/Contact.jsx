import React from 'react';

function Contact() {
  return (
  <div id='contact'>
    <section className="text-white body-font relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-24 px-6 md:px-20">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 transition duration-500">
            Contact Us
          </h1>
          <p className="leading-relaxed mt-10 text-lg text-gray-300 mx-auto max-w-xl">
            Have an idea, a question, or just want to connect? We're a team of tech enthusiasts ready to collaborate and solve real-world problems through technology. Fill out the form, and we’ll get back to you within 24 hours.
          </p>
        </div>

        <form className="flex flex-wrap -m-3" onSubmit={e => e.preventDefault()}>
          <div className="p-3 w-1/2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 bg-opacity-60 rounded-lg border border-purple-700 focus:border-purple-400 focus:bg-gray-700 focus:ring-2 focus:ring-purple-400 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-300 ease-in-out"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="p-3 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 bg-opacity-60 rounded-lg border border-purple-700 focus:border-purple-400 focus:bg-gray-700 focus:ring-2 focus:ring-purple-400 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-300 ease-in-out"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="p-3 w-full">
            <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 bg-opacity-60 rounded-lg border border-purple-700 focus:border-purple-400 focus:bg-gray-700 focus:ring-2 focus:ring-purple-400 h-36 text-base outline-none text-white py-3 px-4 resize-none leading-7 transition-colors duration-300 ease-in-out"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <div className="p-3 w-full text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-400 text-white font-semibold rounded-lg px-12 py-3 text-lg shadow-lg transition duration-300"
            >
              Send
            </button>
          </div>
        </form>

        <div className="pt-12 mt-12 border-t border-purple-700 text-center">
          <a href="mailto:aumtechsolutios@email.com" className="text-purple-400 hover:text-purple-600 font-medium transition duration-300">
            aumtechsolutios@email.com
          </a>
          <p className="leading-normal text-gray-400 mt-4">
            Kurukshetra, Haryana
          </p>

          <div className="inline-flex space-x-6 mt-6 text-gray-300">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-purple-500 transition duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:text-purple-500 transition duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-purple-500 transition duration-300">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-500 transition duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
