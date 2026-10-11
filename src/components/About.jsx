// function About() {
//     return (
//         <section id="About" className="scroll-mt-20 py-12">
//             <div className="w-[90%] mx-auto">
//                 <h2 className="capitalize text-3xl  text-gray-100 mb-6 items-center flex justify-center">About me</h2>
               
 
//             </div>

//         </section>

//     )
// }
// export default About;

/////////////////////////////////////////////////
import React from "react";
import { useSettings } from "../context/SettingsContext";

function About() {
  const { t } = useSettings();

  return (
    <section
      id="About"
      className="theme-page scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto w-[90%] max-w-5xl">
        <h2 className="section-heading mb-8 text-center text-3xl sm:text-4xl">
          {t.about.title}
        </h2>
         <p className="capitalize text-gray-400">
                    My name isMohamed ayman eldawoody. I became interested in technology and in completing tasks in a faster and more efficient way. My programming journey started at the beginning of 2024,2025 with html,html5,css,css3,javascript,tailwind,bootstrap,problemsolving,react,next.js and typescript. I liked the language and how it can help in everyday life, not only for professional programmers. Later, I became interested in Front-End development. I really liked the field, how work and experience can be displayed to everyone through websites, and how services can be provided to the public instead of only personal use like mobile or desktop applications.This made me want to share all technical work with others through websites to benefit everyone. Currently, I am aiming to continue my journey as a Full-Stack developer so that I can design and build all my websites from start to finish by myself. Programming languages really help in work, and even if you learn them without aiming for a job, they change your way of thinking, just as they did with me. Now instead of searching for a website that provides a service, I try to design it myself.
                    I'm a passionate Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, and React.js for building responsive and user-friendly web applications. I also work with Node.js to develop backend applications and RESTful APIs. I enjoy problem-solving, learning new technologies, and writing clean, maintainable code. I have worked on an E-commerce application, focusing on creating a smooth user experience and practical functionality. I'm always eager to improve my skills and build useful web solutions.
                </p>

        <div className="theme-card rounded-2xl p-6 sm:p-9">
          <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />

          <p className="theme-muted text-base leading-8 sm:text-lg">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;