import logo from "../assets/Logo.jpg";

function Navbar(){
    return(

          <nav className="fixed z-[9999]  w-full  h-16 bg-gray-700 rounded">
          <div className="m-2  flex justify-between items-center text-gray-400 ">
                {/* Logo */}
                <div>
            <img
  src={logo}
  alt="Logo"
  className="w-10 h-10 ml-4 rounded"
/>
                </div>

        {/* links */}
      <ul className="hidden lg:flex gap-10">
  <li>
    <a href="#Home" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      Home
    </a>
  </li>

  <li>
    <a href="#About" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      About
    </a>
  </li>

  <li>
    <a href="#Skills" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      Skills
    </a>
  </li>

  <li>
    <a href="#Projects" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      Projects
    </a>
  </li>
  <li>
    <a href="#Courses" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      Courses
    </a>
  </li>

  <li>
    <a href="#Contact" className="text-gray-400 hover:text-yellow-100 transition duration-300">
      Contact
    </a>
  </li>
</ul>

        {/* buttons */}
        <div>

            <a href="#Contact"><button className="bg-orange-500 px-6 py-2 rounded text-white capitalize hover:bg-orange-600">hire me</button></a>
        </div>

    </div>
    </nav>
    )

}
export default Navbar;