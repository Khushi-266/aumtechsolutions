import React from "react";

function SvgAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const circleFill = "#FFFFFF"; // white background
  const circleStroke = "#7C3AED"; // purple outline
  const textColor = "#5B21B6"; // darker purple initials

  return (
    <svg
      className="w-20 h-20 rounded-full flex-shrink-0 mr-6"
      viewBox="0 0 100 100"
      role="img"
      aria-label={name}
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill={circleFill}
        stroke={circleStroke}
        strokeWidth="4"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="40"
        fill={textColor}
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}

function Team() {
  const members = [
    { name: "Khushi", role: "UI Designer" },
    { name: "Palak", role: "CTO" },
    { name: "Shudhanshu", role: "Founder" },
    { name: "Anjali", role: "DevOps" },
    { name: "Jasreen", role: "Software Engineer" },
    { name: "Boris Kitua", role: "UX Researcher" },
    { name: "Atticus Finch", role: "QA Engineer" },
    { name: "Alper Kamu", role: "System" },
    { name: "Rodrigo Monchi", role: "Product Manager" },
  ];

  return (
    <section className="bg-gradient-to-tr from-purple-900 via-indigo-900 to-black text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 transition duration-500">
            Our Team
          </h1>
          <p className="lg:w-2/3 text-xl mx-auto leading-relaxed">
            A passionate team united by vision, committed to excellence,
            collaboration, and achieving results that make a difference.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {members.map(({ name, role }, idx) => (
            <div key={idx} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-purple-600 border p-4 rounded-lg">
                <SvgAvatar name={name} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{name}</h2>
                  <p className="text-gray-200">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
