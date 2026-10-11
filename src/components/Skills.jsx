// import { useState } from "react";
// import skills from "../data/skillsData";
// import React from "react";


// function Skills(){

//   const [category, setCategory] = useState("All");


//   const filteredSkills =
//     category === "All"
//       ? skills
//       : skills.filter((item) => item.category === category);



//   return(

// <section id="Skills" className="scroll-mt-20 py-10 sm:py-16">


// <div className="w-[90%] mx-auto">


// <h2 className="
// capitalize
// text-3xl
// sm:text-4xl
// font-bold
// text-gray-100
// text-center
// ">
// My Skills
// </h2>



// <div className="
// flex
// flex-wrap
// justify-center
// gap-3
// sm:gap-5
// my-8
// ">


// <button

// onClick={()=>setCategory("All")}

// className={`
// px-5
// py-2
// rounded-lg
// transition-all
// duration-300
// text-sm
// sm:text-base

// ${
// category==="All"
// ?
// "bg-white text-black"
// :
// "bg-orange-600 text-white"
// }

// `}
// >
// All
// </button>



// <button

// onClick={()=>setCategory("Tech")}

// className={`
// px-5
// py-2
// rounded-lg
// transition-all
// duration-300
// text-sm
// sm:text-base

// ${
// category==="Tech"
// ?
// "bg-white text-black"
// :
// "bg-orange-600 text-white"
// }

// `}
// >
// Tech
// </button>




// <button

// onClick={()=>setCategory("Soft")}

// className={`
// px-5
// py-2
// rounded-lg
// transition-all
// duration-300
// text-sm
// sm:text-base

// ${
// category==="Soft"
// ?
// "bg-white text-black"
// :
// "bg-orange-600 text-white"
// }

// `}
// >
// Soft Skills
// </button>



// </div>





// <div className="
// grid
// grid-cols-1
// sm:grid-cols-2
// lg:grid-cols-3
// gap-5
// sm:gap-6
// ">



// {
// filteredSkills.map((item)=>(


// <div

// key={item.id}

// className="
// bg-gray-700
// rounded-xl
// p-5
// sm:p-6
// text-center
// hover:-translate-y-2
// transition
// duration-300
// shadow-lg
// "


// >



// <h2 className="
// text-white
// text-lg
// sm:text-xl
// font-bold
// ">
// {item.name}
// </h2>



// <p className="
// text-orange-400
// mt-2
// text-sm
// sm:text-base
// ">
// {item.category}
// </p>



// </div>


// ))

// }




// </div>



// </div>


// </section>


//   )

// }


// export default Skills;
/////////////////////////////////////////////////////////
import React, { useState } from "react";
import skills from "../data/Skills.js";
import { useSettings } from "../context/SettingsContext";

function Skills() {
  const [category, setCategory] = useState("All");
  const { t } = useSettings();

  const categories = [
    { id: "All", label: t.skills.all },
    { id: "Tech", label: t.skills.tech },
    { id: "Soft", label: t.skills.soft },
  ];

  const filteredSkills =
    category === "All"
      ? skills
      : skills.filter((item) => item.category === category);

  const getCategoryLabel = (value) => {
    if (value === "Soft") return t.skills.soft;
    if (value === "Tech") return t.skills.tech;
    return value;
  };

  const getSkillName = (name) => {
    if (name === "Communication") return t.skills.communication;
    if (name === "Team Work") return t.skills.teamwork;
    return name;
  };

  return (
    <section
      id="Skills"
      className="theme-page scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <h2 className="section-heading text-center text-3xl sm:text-4xl">
          {t.skills.title}
        </h2>

        <div className="my-9 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
                category === item.id
                  ? "accent-button shadow-lg shadow-orange-500/20"
                  : "theme-surface hover:border-orange-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((item) => (
            <article
              key={item.id}
              className="theme-card rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl font-bold text-orange-500">
                {item.name.slice(0, 1)}
              </div>

              <h3 className="theme-text text-xl font-bold">
                {getSkillName(item.name)}
              </h3>

              <p className="accent-text mt-2 text-sm">
                {getCategoryLabel(item.category)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;