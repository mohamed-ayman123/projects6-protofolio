import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlinePsychology } from "react-icons/md";


function Courses(){

  const courses = [
    {
      title:"React",
      icon:<FaReact />,
      color:"text-blue-500",
      button:"bg-blue-500",
      desc:"Build modern web applications using components, hooks and routing."
    },

    {
      title:"HTML5",
      icon:<FaHtml5 />,
      color:"text-orange-500",
      button:"bg-orange-500",
      desc:"Semantic structure for building modern responsive websites."
    },

    {
      title:"CSS3",
      icon:<FaCss3Alt />,
      color:"text-blue-400",
      button:"bg-blue-400",
      desc:"Design beautiful responsive interfaces with animations."
    },

    {
      title:"JavaScript",
      icon:<FaJsSquare />,
      color:"text-yellow-400",
      button:"bg-yellow-500",
      desc:"Add interactivity and dynamic behavior to web applications."
    },

    {
      title:"OOP",
      icon:<MdOutlinePsychology />,
      color:"text-purple-500",
      button:"bg-purple-500",
      desc:"Object-Oriented Programming principles and design patterns."
    },

    {
      title:"Problem Solving",
      icon:<TbBrandCpp />,
      color:"text-cyan-400",
      button:"bg-cyan-500",
      desc:"Practice algorithms and data structures to solve coding challenges."
    },

    {
      title:"Next.js",
      icon:<SiNextdotjs />,
      color:"text-white",
      button:"bg-white text-black",
      desc:"Build fast, SEO-friendly React applications with server rendering."
    },

    {
      title:"TypeScript",
      icon:<SiTypescript />,
      color:"text-blue-600",
      button:"bg-blue-600",
      desc:"Write scalable and type-safe JavaScript applications."
    },

    {
      title:"Tailwind CSS",
      icon:<RiTailwindCssFill />,
      color:"text-cyan-400",
      button:"bg-cyan-500",
      desc:"Build fast and modern UI using utility-first CSS framework."
    },

    {
      title:"Git & Github",
      icon:<FaGitAlt />,
      color:"text-orange-500",
      button:"bg-orange-500",
      desc:"Manage projects using Git version control and Github."
    }

  ];


  return(

<section id="Courses" className="py-10 sm:py-16">

<div className="w-[90%] mx-auto">


<h2 className="
text-3xl 
sm:text-4xl 
font-bold 
text-center 
text-white
">
Courses
</h2>


<p className="
text-center 
text-gray-400 
mt-3 
mb-12
text-sm
sm:text-base
max-w-2xl
mx-auto
">
Dedicated to lifelong learning, building innovative solutions and growing through modern technologies.
</p>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
">


{
courses.map((course,index)=>(

<div 
key={index}
className="
bg-[#1f2937]
rounded-xl
p-5
sm:p-6
hover:-translate-y-2
transition
duration-300
shadow-lg
"
>


<div className={`text-5xl mb-4 ${course.color}`}>
{course.icon}
</div>


<h3 className="
text-xl
sm:text-2xl
font-bold
text-white
">
{course.title}
</h3>


<p className="
text-gray-300
mt-3
text-sm
sm:text-base
leading-6
">
{course.desc}
</p>



<button 
className={`
mt-6
px-5
py-2
rounded-lg
text-blue
${course.button}
hover:opacity-80
transition
`}
>
Learn More
</button>


</div>


))
}



</div>


</div>

</section>


  )
}


export default Courses;