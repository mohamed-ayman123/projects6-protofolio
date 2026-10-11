// import {
//   FaLinkedin,
//   FaWhatsapp,
//   FaGithub,
//   FaPhone
// } from "react-icons/fa";
// import logo from "../assets/Logo1.jpeg";
// import React from "react";
 

// function Hero(){
//     return(
//    <section id="Home" className="scroll-mt-20 pt-24 pb-10">

//       <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

//         <div className="w-full lg:w-1/2">
//           <p className="capitalize text-3xl  text-gray-300">Hi I am</p>
//           <h1 className="capitalize text-3xl  text-gray-300 mb-4">mohamed ayman eldawoody</h1>
//           <h2 className="capitalize text-3xl  text-yellow-200 mb-4">Full-stack Developer</h2>
//           <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">

// {/* <div className="flex gap-4 mt-6"> */}

//   <a
//     href="https://www.linkedin.com/in/mohamed-eldawoudy-336428364/"
//      target="_blank"
//        rel="noopener noreferrer"
//     className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
//   >
//     <FaLinkedin size={22} />
//   </a>

//   <a
//     href="https://wa.me/201066956862"
//      target="_blank"
//        rel="noopener noreferrer"
//     className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
//   >
//     <FaWhatsapp size={22} />
//   </a>

//   <a
//     href="https://github.com/mohamed-ayman123"
//      target="_blank"
//        rel="noopener noreferrer"
//     className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
//   >
//     <FaGithub size={22} />
//   </a>

//   <a
//     href="tel:+201066956862"
//      target="_blank"
//        rel="noopener noreferrer"
//     className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
//   >
//     <FaPhone size={20} />
//   </a>

// {/* </div> */}
// </div>
//           {/* buttons */}
//         <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

//             <button className="bg-orange-500 px-6 py-2 rounded text-white capitalize hover:bg-orange-600">hire me</button>
//             <button className="border-2  border-gray-400 px-6 py-2 rounded text-white capitalize hover:bg-gray-300 hover:text-gray-800">download cv</button>
//         </div>
//         {/* block */}
//         {/* <div className="bg-gray-400 border-2 border-gray-200 mt-4 h-32 rounded w-[75%]">


//         </div> */}
//         <div className="
// bg-gray-400
// border-2
// border-gray-200
// rounded
// mt-10
// w-full
// lg:w-[75%]
// flex
// flex-col
// sm:flex-row">
  
//   <div className="flex-1 text-center">
//   <p className="text-orange-800 text-3xl" >5</p>
//   <h2 className="text-white text-xl">projects done</h2>

//   </div>

//   <div className="border-l-2 border-gray-200 h-full"></div>

//   <div className="flex-1 text-center">
//    <p className="text-orange-800 text-3xl" >2</p>
//   <h2 className="text-white text-xl">courses</h2>
//   </div>
//   <div className="border-l-2 border-gray-200 h-full"></div>

//   <div className="flex-1 text-center">
//    <p className="text-orange-800 text-3xl" >10</p>
//   <h2 className="text-white text-xl">Skills</h2>
//   </div>

// </div>
//         </div>
        

//         <div className="w-full lg:w-1/2 flex justify-center">

//            {/* Logo2 */}
                          
//                       <img
//             src={logo}
//             alt="Logo"
//                 className="
// w-64
// sm:w-72
// md:w-80
// lg:w-[420px]
// h-auto
// rounded-2xl
// mx-auto"

//           />
                          
//         </div>

//       </div>

//     </section>
//     )

// }
// export default Hero;
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/Logo1.jpeg";
import { useSettings } from "../context/SettingsContext";

function Hero() {
  const { t, language } = useSettings();
  const isArabic = language === "ar";

  return (
    <section
      id="Home"
      className="theme-page scroll-mt-20 overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="theme-muted mb-2 text-2xl">
            {t.hero.greeting}
          </p>

          <h1 className="theme-text mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Mohamed Ayman Eldawoody
          </h1>

          <h2 className="accent-text mb-5 text-2xl font-bold sm:text-3xl">
            {t.hero.role}
          </h2>

          <p className="theme-muted max-w-xl text-lg leading-8">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/mohamed-eldawoudy-336428364/",
                Icon: FaLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://wa.me/201066956862",
                Icon: FaWhatsapp,
                label: "WhatsApp",
              },
              {
                href: "https://github.com/mohamed-ayman123",
                Icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "tel:+201066956862",
                Icon: FaPhone,
                label: "Phone",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("tel:") ? undefined : "_blank"}
                rel={href.startsWith("tel:") ? undefined : "noreferrer"}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Icon size={21} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#Contact"
              className="accent-button rounded-lg px-6 py-3 font-semibold shadow-lg shadow-orange-500/20"
            >
              {t.hero.hire}
            </a>

            <a
              href="#Projects"
              className="theme-surface rounded-lg px-6 py-3 font-semibold hover:border-orange-500"
            >
              {isArabic ? "استكشف مشاريعي" : "Explore Projects"}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { number: "3+", label: t.hero.projectsDone },
              { number: "10+", label: t.hero.courses },
              { number: "8+", label: t.hero.skills },
            ].map((item) => (
              <div
                key={item.label}
                className="theme-card rounded-xl p-4 text-center"
              >
                <p className="accent-text text-2xl font-extrabold">
                  {item.number}
                </p>
                <p className="theme-muted mt-1 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="absolute h-64 w-64 rounded-full bg-orange-500/10 blur-3xl sm:h-80 sm:w-80" />

          <img
            src={logo}
            alt="Mohamed Ayman Eldawoody"
            className="relative mx-auto h-auto w-64 rounded-3xl border border-orange-500/30 shadow-2xl shadow-orange-500/10 sm:w-80 lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;