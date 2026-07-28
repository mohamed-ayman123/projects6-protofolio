import { useState } from "react";
import skills from "../data/skillsData";


function Skills(){

  const [category, setCategory] = useState("All");


  const filteredSkills =
    category === "All"
      ? skills
      : skills.filter((item) => item.category === category);



  return(

<section id="Skills" className="scroll-mt-20 py-10 sm:py-16">


<div className="w-[90%] mx-auto">


<h2 className="
capitalize
text-3xl
sm:text-4xl
font-bold
text-gray-100
text-center
">
My Skills
</h2>



<div className="
flex
flex-wrap
justify-center
gap-3
sm:gap-5
my-8
">


<button

onClick={()=>setCategory("All")}

className={`
px-5
py-2
rounded-lg
transition-all
duration-300
text-sm
sm:text-base

${
category==="All"
?
"bg-white text-black"
:
"bg-orange-600 text-white"
}

`}
>
All
</button>



<button

onClick={()=>setCategory("Tech")}

className={`
px-5
py-2
rounded-lg
transition-all
duration-300
text-sm
sm:text-base

${
category==="Tech"
?
"bg-white text-black"
:
"bg-orange-600 text-white"
}

`}
>
Tech
</button>




<button

onClick={()=>setCategory("Soft")}

className={`
px-5
py-2
rounded-lg
transition-all
duration-300
text-sm
sm:text-base

${
category==="Soft"
?
"bg-white text-black"
:
"bg-orange-600 text-white"
}

`}
>
Soft Skills
</button>



</div>





<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
sm:gap-6
">



{
filteredSkills.map((item)=>(


<div

key={item.id}

className="
bg-gray-700
rounded-xl
p-5
sm:p-6
text-center
hover:-translate-y-2
transition
duration-300
shadow-lg
"


>



<h2 className="
text-white
text-lg
sm:text-xl
font-bold
">
{item.name}
</h2>



<p className="
text-orange-400
mt-2
text-sm
sm:text-base
">
{item.category}
</p>



</div>


))

}




</div>



</div>


</section>


  )

}


export default Skills;