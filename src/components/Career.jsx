import React from "react";
const jobOpenings = [
  {
    title: "Software Engineer (Backend – Python/AWS)",
    location: "Remote or HQ in Austin, TX",
    experience: "3+ years",
  },
  {
    title: "Frontend Developer (React/Next.js)",
    location: "Remote",
    experience: "2+ years",
  },
  {
    title: "QA Automation Engineer",
    location: "Remote / India",
    experience: "4+ years",
  },
];

const Career = () => {
  return (
    <>
     
      

      <div className="bg-gradient-to-tr from-purple-900 via-indigo-900 to-black text-white min-h-screen px-6 md:px-16 py-16 space-y-20">
        {/* Hero */}
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 transition duration-500">
            Build the Future of Technology With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            We’re solving real-world problems with cutting-edge solutions. Join
            a team that’s shaping the future.
          </p>
          <a href="#roles" aria-label="View Open Roles">
            <button className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 shadow-lg rounded-lg text-white font-semibold transition duration-300">
              View Open Roles
            </button>
          </a>
        </section>

        {/* Why Work With Us */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-purple-400 tracking-wide">
            Why Work With Us?
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-300 text-lg leading-relaxed">
            {[
              "Innovative Projects: AI, blockchain, cloud infrastructure",
              "Learning: Courses, certifications, and conferences",
              "Flexible Culture: Remote-first with flexible hours",
              "Tech Stack: React, Node.js, Python, AWS",
              "Inclusive & diverse environment",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Job Openings */}
        <section
          className="max-w-6xl mx-auto"
          id="roles"
          aria-label="Job Openings"
        >
          <h2 className="text-3xl font-semibold text-purple-400 mb-12 text-center tracking-wide">
            Open Positions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-purple-700 rounded-xl p-7 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500 hover:border-purple-500"
                tabIndex={0}
                role="button"
                aria-label={`Apply for ${job.title}`}
              >
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <button className="mt-2 w-full px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Life At Company */}
        <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-purple-400 tracking-wide">
            Life at Our Company
          </h2>
          <blockquote className="italic text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            “I’ve never worked somewhere that encourages experimentation like
            this place. We’re solving hard problems — and having fun doing
            it.”
          </blockquote>
          <p className="text-gray-400 font-semibold tracking-wide">
            – Khushi, Frontend Developer
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-500 tracking-wide">
            Join Us
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto tracking-wide">
            If you’re ready to make an impact, we’re ready for you.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </>
  );
};

export default Career;
