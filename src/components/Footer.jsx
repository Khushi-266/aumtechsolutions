import React from 'react';

function Footer() {
  return (
    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-8 md:mb-0">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">
           <img className='w-15 h-15 rounded-full' src="companylogo.jpg" alt="" />
            <span className="ml-3 text-xl font-semibold">AumTech</span>
          </a>
          <p className="mt-2 text-gray-400 text-sm">
            Driving Innovation with Smart, Scalable Tech Solutions
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center md:text-left">
          {[
            {
              title: 'Company',
              links: ['About Us', 'Contact Us', 'Career', 'Press Kit'],
            },
            {
              title: 'Services',
              links: ['Development', 'Designing', 'Branding', 'Marketing'],
            },
            {
              title: 'Social',
              links: ['LinkedIn', 'X', 'GitHub', 'Facebook'],
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Cookie Policy', 'Terms of Use'],
            },
          ].map((section, i) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-500 transition-colors duration-300"
                      aria-label={link}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 AumTech — All rights reserved
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-6">
            {/* Social icons */}
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
