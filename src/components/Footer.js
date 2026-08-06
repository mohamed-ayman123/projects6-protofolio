import logo from "../assets/Logo.jpg";

import {
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#242222] pt-12 pb-8">

      <div className="w-[90%] max-w-6xl mx-auto">

        {/* Logo & Name */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">

          <img
            src={logo}
            alt="logo"
            className="w-24 md:w-28 rounded"
          />

          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 text-center">
            Mohamed Ayman
          </h2>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center flex-wrap gap-5 mt-10">

          <a
            href="https://wa.me/201066956862"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white duration-300"
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white duration-300"
          >
            <FaLinkedin className="text-xl md:text-2xl" />
          </a>

          <a
            href="tel:+201066956862"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-300"
          >
            <FaPhone className="text-xl md:text-2xl" />
          </a>

          <a
            href="https://github.com/mohamed-ayman123"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-500 flex justify-center items-center text-gray-300 hover:bg-black hover:border-black hover:text-white duration-300"
          >
            <FaGithub className="text-xl md:text-2xl" />
          </a>

        </div>

        {/* Line */}
        <div className="border-t border-gray-600 my-10"></div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm md:text-xl leading-8">
          © 2026 All Rights Reserved. Designed &amp; Developed by{" "}
          <span className="text-orange-500 font-semibold">
            Mohamed Ayman
          </span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;