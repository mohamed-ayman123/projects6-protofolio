import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaPhone
} from "react-icons/fa";
import logo from "../assets/Logo1.jpeg";
 

function Hero(){
    return(
   <section id="Home" className="scroll-mt-20 pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

        <div className="w-full lg:w-1/2">
          <p className="capitalize text-3xl  text-gray-300">Hi I am</p>
          <h1 className="capitalize text-3xl  text-gray-300 mb-4">mohamed ayman eldawoody</h1>
          <h2 className="capitalize text-3xl  text-yellow-200 mb-4">Front-end Developer</h2>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">

{/* <div className="flex gap-4 mt-6"> */}

  <a
    href="https://www.linkedin.com/notifications/?filter=all"
     target="_blank"
       rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://wa.me/201066956862"
     target="_blank"
       rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
  >
    <FaWhatsapp size={22} />
  </a>

  <a
    href="https://github.com/mohamed-ayman123"
     target="_blank"
       rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="tel:+201066956862"
     target="_blank"
       rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-300 hover:text-black transition duration-300"
  >
    <FaPhone size={20} />
  </a>

{/* </div> */}
</div>
          {/* buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="bg-orange-500 px-6 py-2 rounded text-white capitalize hover:bg-orange-600">hire me</button>
            <button className="border-2  border-gray-400 px-6 py-2 rounded text-white capitalize hover:bg-gray-300 hover:text-gray-800">download cv</button>
        </div>
        {/* block */}
        {/* <div className="bg-gray-400 border-2 border-gray-200 mt-4 h-32 rounded w-[75%]">


        </div> */}
        <div className="bg-gray-400
bg-gray-400
border-2
border-gray-200
rounded
mt-10
w-full
lg:w-[75%]
flex
flex-col
sm:flex-row">
  
  <div className="flex-1 text-center">
  <p className="text-orange-800 text-3xl" >5</p>
  <h2 className="text-white text-xl">projects done</h2>

  </div>

  <div className="border-l-2 border-gray-200 h-full"></div>

  <div className="flex-1 text-center">
   <p className="text-orange-800 text-3xl" >2</p>
  <h2 className="text-white text-xl">courses</h2>
  </div>
  <div className="border-l-2 border-gray-200 h-full"></div>

  <div className="flex-1 text-center">
   <p className="text-orange-800 text-3xl" >10</p>
  <h2 className="text-white text-xl">Skills</h2>
  </div>

</div>
        </div>
        

        <div className="w-full lg:w-1/2 flex justify-center">

           {/* Logo2 */}
                          
                      <img
            src={logo}
            alt="Logo"
                className="
w-64
sm:w-72
md:w-80
lg:w-[420px]
h-auto
rounded-2xl
mx-auto"

          />
                          
        </div>

      </div>

    </section>
    )

}
export default Hero;