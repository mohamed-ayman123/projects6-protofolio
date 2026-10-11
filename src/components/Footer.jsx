// import logo from "../assets/Logo.jpg";
// import React from "react";

// import {
//   FaWhatsapp,
//   FaLinkedin,
//   FaPhone,
//   FaGithub,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-[#242222] pt-12 pb-8">

//       <div className="w-[90%] max-w-6xl mx-auto">

//         {/* Logo & Name */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-4">

//           <img
//             src={logo}
//             alt="logo"
//             className="w-24 md:w-28 rounded"
//           />

//           <h2 className="text-3xl md:text-5xl font-bold text-orange-500 text-center">
//             Mohamed Ayman
//           </h2>

//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center items-center flex-wrap gap-5 mt-10">

//           <a
//             href="https://wa.me/201066956862"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white duration-300"
//           >
//             <FaWhatsapp className="text-xl md:text-2xl" />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/mohamed-eldawoudy-336428364/"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white duration-300"
//           >
//             <FaLinkedin className="text-xl md:text-2xl" />
//           </a>

//           <a
//             href="tel:+201066956862"
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-300"
//           >
//             <FaPhone className="text-xl md:text-2xl" />
//           </a>

//           <a
//             href="https://github.com/mohamed-ayman123"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-black hover:border-black hover:text-white duration-300"
//           >
//             <FaGithub className="text-xl md:text-2xl" />
//           </a>

//         </div>

//         {/* Line */}
//         <div className="border-t border-gray-600 my-10"></div>

//         {/* Copyright */}
//         <p className="text-center text-gray-400 text-sm md:text-xl leading-8">
//           © 2026 All Rights Reserved. Designed &amp; Developed by{" "}
//           <span className="text-orange-500 font-semibold">
//             Mohamed Ayman
//           </span>
//         </p>

//       </div>

//     </footer>
//   );
// }

// export default Footer;
//////////////////////////////////////////////
import React from "react";
import logo from "../assets/Logo.jpg";
import {
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { useSettings } from "../context/SettingsContext";

function Footer() {
  const { t } = useSettings();

  const socialLinks = [
    {
      href: "https://wa.me/201066956862",
      label: "WhatsApp",
      Icon: FaWhatsapp,
    },
    {
      href: "https://www.linkedin.com/in/mohamed-eldawoudy-336428364/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      href: "tel:+201066956862",
      label: "Phone",
      Icon: FaPhone,
    },
    {
      href: "https://github.com/mohamed-ayman123",
      label: "GitHub",
      Icon: FaGithub,
    },
  ];

  return (
    <footer className="theme-footer border-t border-[var(--border-color)] py-12">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <img
            src={logo}
            alt="Mohamed Ayman logo"
            loading="lazy"
            className="h-16 w-16 rounded-xl object-cover"
          />

          <h2 className="accent-text text-center text-2xl font-extrabold sm:text-3xl">
            Mohamed Ayman
          </h2>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("tel:") ? undefined : "_blank"}
              rel={href.startsWith("tel:") ? undefined : "noreferrer"}
              className="theme-surface flex h-12 w-12 items-center justify-center rounded-full hover:border-orange-500 hover:text-orange-500"
            >
              <Icon size={21} />
            </a>
          ))}
        </div>

        <div className="border-t border-[var(--border-color)] pt-7">
          <p className="theme-muted text-center text-sm leading-7">
            © 2026 {t.footer.rights}{" "}
            {t.footer.made}{" "}
            <span className="accent-text font-bold">
              Mohamed Ayman
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;