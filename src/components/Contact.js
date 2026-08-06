import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="Contact" className="py-20">
      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Feel free to contact me for work opportunities or collaboration.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* ================= Left ================= */}
          <div className="w-full lg:w-1/2">

            <h3 className="text-3xl font-bold text-white mb-5">
              Get In Touch
            </h3>

            <p className="text-gray-400 mb-10 leading-7">
              Don't hesitate to contact me. I'd be happy to answer your
              questions or discuss your next project.
            </p>

            {/* WhatsApp */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                <FaWhatsapp className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  WhatsApp
                </h4>

                <a
                  href="https://wa.me/201066956862"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-400 duration-300"
                >
                  +20 1066956862
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                <MdEmail className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <a
                  href="mailto:Eldawoodymohamed683@gmail.com"
                  className="text-gray-400 hover:text-red-400 duration-300 break-all"
                >
                  eldawoodymohamed683
                  @gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                <FaLinkedin className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  LinkedIn
                </h4>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 duration-300 break-all"
                >
                  linkedin.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center">
                <FaGithub className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  GitHub
                </h4>

                <a
                  href="https://github.com/mohamed-ayman123"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white duration-300 break-all"
                >
                  github.com/mohamed-ayman123
                </a>
              </div>
            </div>

          </div>

          {/* ================= Right ================= */}

          <div className="w-full lg:w-1/2">

            <form className="space-y-5">

              <div className="flex flex-col md:flex-row gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-orange-500"
                />

              </div>

              <div className="flex flex-col md:flex-row gap-5">

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-orange-500"
                />

              </div>

              <textarea
                rows="7"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none resize-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 duration-300 py-4 rounded-lg text-white font-semibold text-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;