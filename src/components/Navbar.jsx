// import React from "react";
// import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";
// import logo from "../assets/Logo.jpg";
// import { useSettings } from "../context/SettingsContext";

// function Navbar() {
//   const { theme, language, toggleTheme, toggleLanguage } =
//     useSettings();

//   const isArabic = language === "ar";

//   const links = [
//     { href: "#Home", en: "Home", ar: "الرئيسية" },
//     { href: "#About", en: "About", ar: "من أنا" },
//     { href: "#Skills", en: "Skills", ar: "مهاراتي" },
//     { href: "#Projects", en: "Projects", ar: "مشاريعي" },
//     { href: "#Courses", en: "Courses", ar: "الدورات" },
//     { href: "#Contact", en: "Contact", ar: "تواصل معي" },
//   ];

//   return (
//    <nav className="theme-navbar fixed top-0 z-[9999] h-16 w-full">
//         <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-3 sm:px-5">
//         <a href="#Home" aria-label="Home">
//           <img
//             src={logo}
//             alt="Logo"
//             className="ml-4 h-10 w-10 rounded"
//           />
//         </a>

//         <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
//           {links.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-gray-300 hover:text-yellow-300 transition duration-300"
//               >
//                 {isArabic ? link.ar : link.en}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={toggleLanguage}
//             aria-label="Change language"
//             title={isArabic ? "Switch to English" : "التغيير للعربية"}
//             className="flex items-center gap-1 rounded border border-gray-500 px-2 py-2 hover:bg-gray-600"
//           >
//             <FiGlobe size={18} />
//             <span className="text-sm font-semibold">
//               {isArabic ? "EN" : "AR"}
//             </span>
//           </button>

//           <button
//             onClick={toggleTheme}
//             aria-label="Toggle color theme"
//             title={theme === "dark" ? "Light mode" : "Dark mode"}
//             className="rounded border border-gray-500 p-2 hover:bg-gray-600"
//           >
//             {theme === "dark" ? (
//               <FiSun size={20} />
//             ) : (
//               <FiMoon size={20} />
//             )}
//           </button>

//           <a
//             href="#Contact"
//             className="rounded bg-orange-500 px-3 py-2 text-sm text-white capitalize hover:bg-orange-600 sm:px-6"
//           >
//             {isArabic ? "وظّفني" : "Hire Me"}
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
//////////////////////////////////////////////////////////////
import React from "react";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import logo from "../assets/Logo.jpg";
import { useSettings } from "../context/SettingsContext";

function Navbar() {
  const { theme, language, toggleTheme, toggleLanguage, t } =
    useSettings();

  const links = [
    { href: "#Home", label: t.nav.home },
    { href: "#About", label: t.nav.about },
    { href: "#Skills", label: t.nav.skills },
    { href: "#Projects", label: t.nav.projects },
    { href: "#Courses", label: t.nav.courses },
    { href: "#Contact", label: t.nav.contact },
  ];

  return (
    <nav className="theme-navbar fixed top-0 z-[9999] h-16 w-full">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-3 sm:px-5">
        <a href="#Home" aria-label="Home" className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-lg object-cover"
          />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="theme-muted text-sm font-medium hover:text-orange-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            title={language === "ar" ? "Switch to English" : "التغيير للعربية"}
            className="theme-surface flex items-center gap-1.5 rounded-lg px-2.5 py-2 hover:border-orange-500"
          >
            <FiGlobe size={18} />
            <span className="text-sm font-bold">
              {language === "ar" ? "EN" : "AR"}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            className="theme-surface rounded-lg p-2 hover:border-orange-500 hover:text-orange-500"
          >
            {theme === "dark" ? (
              <FiSun size={20} />
            ) : (
              <FiMoon size={20} />
            )}
          </button>

          <a
            href="#Contact"
            className="accent-button rounded-lg px-3 py-2 text-sm font-bold sm:px-5"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;