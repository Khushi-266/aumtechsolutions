import React from 'react';

function Hero() {
  return (
    <section className="text-white bg-black py-20 px-6 md:px-12 shadow-2xl">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 animate-fade-in-down">
            Aum Tech
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in">
            Driving Innovation with Smart, Scalable Tech Solutions. We deliver custom software,
            automation tools, and digital strategies that fuel business growth.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-800 rounded-md transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full mb-12 md:mb-0 flex justify-center animate-fade-in">
          <img
            src="/tech.jpg"
            alt="Tech Illustration"
            className="rounded-lg shadow-lg w-80 h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
