import React from "react";

function Features() {
  const cardStyle =
    "bg-black bg-opacity-30 border border-purple-600 rounded-2xl p-6 shadow-lg shadow-purple-700/50 transition-transform duration-500 hover:scale-105 hover:shadow-purple-500 cursor-pointer";
  const headingStyle =
    "text-purple-300 drop-shadow-md font-extrabold tracking-wide";
  const paragraphStyle = "text-purple-200 tracking-wide leading-relaxed";

  // Unified container background styles
  const containerBg =
    "bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg shadow-purple-900/60";

  return (
    <>
      {/* Features Section */}
      <section
        className={`body-font mt-15 px-6 py-24 ${containerBg} container mx-auto`}
      >
        <div className="flex flex-wrap w-full mb-20 items-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              className={`sm:text-4xl text-3xl mb-3 animate-fadeInDown ${headingStyle}`}
            >
              Our Features
            </h1>
            <div className="h-1 w-24 bg-purple-600 rounded-full animate-pulse shadow-lg"></div>
          </div>
          <p className={`lg:w-1/2 w-full text-xl max-w-xl ${paragraphStyle}`}>
            Discover the powerful features that make our platform fast,
            flexible, and future-ready. From smart automation to intuitive
            design, we deliver technology that scales with your business.
          </p>
        </div>

        <div className="flex flex-wrap -m-6">
          {[
            {
              img: "innovation.jpg",
              title: "Innovative Technology",
              desc:
                "Built with the latest tech to deliver future-ready, high-performance solutions.",
            },
            {
              img: "solution.jpg",
              title: "Scalable Solutions",
              desc:
                " Easily adapts and grows your business with us, from startup to enterprise we are here.",
            },
            {
              img: "usercentric.jpg",
              title: "User-Centric Design",
              desc:
                "Designed for intuitive use and seamless user experience at every touchpoint.",
            },
            {
              img: "support.jpg",
              title: "24/7 Support",
              desc:
                "Get expert help anytime with round-the-clock technical and customer support.",
            },
          ].map(({ img, title, desc }, idx) => (
            <div
              key={idx}
              className="xl:w-1/4 md:w-1/2 p-6"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div
                className={`${cardStyle} flex flex-col items-center animate-fadeInUp`}
              >
                <img
                  className="h-50 w-full rounded-2xl object-cover object-center mb-6 border-2 border-purple-500 shadow-[0_0_15px_#a78bfa]"
                  src={img}
                  alt={title}
                  loading="lazy"
                />
                <h2 className={`text-xl mb-3 text-center ${headingStyle}`}>
                  {title}
                </h2>
                <p className={`text-center ${paragraphStyle}`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All-in-one Section */}
      <div
        className={`container mx-auto px-5 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-20 ${containerBg}`}
      >
        {/* Text Content */}
        <div
          className="md:w-1/2 text-center md:text-left
                     bg-black bg-opacity-10 backdrop-blur-md
                     rounded-2xl p-10 drop-shadow-lg"
        >
          <h1
            className={`sm:text-4xl text-3xl mb-6 animate-fadeInDown ${headingStyle}`}
          >
            All-in-one Web Designing and Development Services
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-xl mx-auto md:mx-0 ${paragraphStyle}`}
          >
            We offer comprehensive web design and development services that
            blend creativity with functionality. From visually stunning layouts
            to robust backend systems, our all-in-one solutions ensure your
            website is responsive, fast, and optimized for every device—helping
            you engage users, strengthen your brand, and grow your digital
            presence effortlessly.
          </p>
        </div>

        {/* Images */}
       <div className="md:w-1/2 flex justify-center md:justify-end gap-8 flex-wrap max-w-lg mx-auto">
  {["allone.jpg", "alltwo.jpg"].map((src, idx) => (
    <img
      key={idx}
      src={src}
      alt={`All-in-one ${idx + 1}`}
      loading="lazy"
      className={`w-56 h-56 sm:w-56 sm:h-56 md:w-56 md:h-56 object-cover rounded-2xl border-4 border-purple-500
                  shadow-[0_0_25px_#8b5cf6]
                  transform ${idx === 0 ? "-rotate-3" : "rotate-3"}
                  hover:rotate-0 hover:scale-110
                  transition duration-700 ease-in-out cursor-pointer`}
    />
  ))}
</div>
      </div>

      {/* Web Designing & Development Solutions */}
      <section
        className={`text-white body-font py-24 rounded-2xl shadow-lg shadow-purple-900/60 px-6 ${containerBg} container mx-auto`}
      >
        <div className="text-center mb-16">
          <h1
            className={`sm:text-4xl text-3xl font-extrabold title-font
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600
                          drop-shadow-lg animate-fadeInDown`}
          >
            Web Designing & Development Solutions
          </h1>
          <div className="w-24 h-1 bg-purple-600 rounded-full mx-auto mt-4 mb-8 shadow-lg"></div>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-3">
          {[
            "Responsive Web Design",
            "Blog Website Design",
            "Corporate Website Design",
            "Landing Page Design",
            "eCommerce Websites",
            "Customised Website Designing",
          ].map((item, idx) => (
            <div key={idx} className="p-3 sm:w-1/2 w-full">
              <div
                className={`${cardStyle} flex p-6 h-full items-center
                             shadow-md shadow-purple-900/70
                             hover:shadow-purple-500
                             animate-fadeInUp`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div
                  className="w-12 h-12 mr-6 flex-shrink-0 rounded-full bg-purple-700 text-white flex items-center justify-center drop-shadow-lg"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <span className="title-font font-semibold text-lg text-purple-300 tracking-wide">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Features;
