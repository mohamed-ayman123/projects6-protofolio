
import React from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlinePsychology } from "react-icons/md";

import { useSettings } from "../context/SettingsContext";

const courses = [
  {
    key: "react",
    title: "React",
    icon: FaReact,
    color: "#61DAFB",
    category: "frontend",
    desc: "Build modern user interfaces using React components and hooks.",
    arDesc: "بناء واجهات مستخدم حديثة باستخدام مكونات React والـ Hooks.",
  },
  {
    key: "html",
    title: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    category: "frontend",
    desc: "Create semantic and accessible web page structures.",
    arDesc: "إنشاء هيكل صفحات ويب منظم ودلالي وسهل الوصول.",
  },
  {
    key: "css",
    title: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    category: "frontend",
    desc: "Style responsive websites with modern CSS techniques.",
    arDesc: "تصميم مواقع متجاوبة باستخدام تقنيات CSS الحديثة.",
  },
  {
    key: "javascript",
    title: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    category: "frontend",
    desc: "Build interactive applications using JavaScript.",
    arDesc: "إنشاء تطبيقات تفاعلية باستخدام JavaScript.",
  },
  {
    key: "oop",
    title: "OOP",
    icon: MdOutlinePsychology,
    color: "#A78BFA",
    category: "programming",
    desc: "Understand object-oriented programming principles.",
    arDesc: "فهم مبادئ البرمجة كائنية التوجه وتنظيم الكود.",
  },
  {
    key: "problemSolving",
    title: "Problem Solving",
    icon: TbBrandCpp,
    color: "#38BDF8",
    category: "programming",
    desc: "Practice algorithms, logical thinking, and coding challenges.",
    arDesc: "التدرب على الخوارزميات والتفكير المنطقي وحل التحديات البرمجية.",
  },
  {
    key: "next",
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    category: "frontend",
    desc: "Build React applications with modern Next.js features.",
    arDesc: "بناء تطبيقات React باستخدام إمكانيات Next.js الحديثة.",
  },
  {
    key: "typescript",
    title: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend",
    desc: "Write maintainable JavaScript with static typing.",
    arDesc: "كتابة كود أكثر تنظيمًا باستخدام الأنواع الثابتة.",
  },
  {
    key: "tailwind",
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
    category: "frontend",
    desc: "Create responsive interfaces using utility-first CSS.",
    arDesc: "إنشاء واجهات متجاوبة باستخدام كلاسات Tailwind CSS.",
  },
  {
    key: "git",
    title: "Git & GitHub",
    icon: FaGitAlt,
    color: "#F05032",
    category: "tools",
    desc: "Manage source code and collaborate using Git and GitHub.",
    arDesc: "إدارة الكود والتعاون في المشاريع باستخدام Git وGitHub.",
  },
  {
    key: "node",
    title: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
    category: "backend",
    desc: "Build server-side applications using JavaScript.",
    arDesc: "بناء تطبيقات الخادم باستخدام JavaScript.",
  },
  {
    key: "express",
    title: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
    category: "backend",
    desc: "Create backend routes and REST APIs using Express.",
    arDesc: "إنشاء مسارات الخادم وواجهات REST API باستخدام Express.",
  },
  {
    key: "database",
    title: "Database",
    icon: FaDatabase,
    color: "#4DB33D",
    category: "backend",
    desc: "Understand data storage, queries, and database operations.",
    arDesc: "فهم تخزين البيانات والاستعلامات وعمليات قواعد البيانات.",
  },
  {
    key: "authentication",
    title: "Authentication & Security",
    icon: FaShieldAlt,
    color: "#E5C07B",
    category: "backend",
    desc: "Protect APIs using authentication and authorization.",
    arDesc: "حماية واجهات API باستخدام المصادقة وتحديد الصلاحيات.",
  },
  {
    key: "postman",
    title: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "tools",
    desc: "Test API endpoints and inspect HTTP requests and responses.",
    arDesc: "اختبار واجهات API وفحص طلبات HTTP والاستجابات.",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "backend",
    desc: "Store and query document-based data using MongoDB.",
    arDesc: "تخزين البيانات والاستعلام عنها باستخدام MongoDB.",
  },
];

function Courses() {
  const settings = useSettings();
  const t = settings?.t;
  const language = settings?.language || settings?.lang || "en";

  const isArabic =
    language === "ar" ||
    language?.startsWith?.("ar");

  const sectionTitle =
    t?.courses?.title ||
    (isArabic ? "المهارات والتقنيات" : "Skills & Technologies");

  const sectionSubtitle =
    t?.courses?.subtitle ||
    (isArabic
      ? "التقنيات والأدوات التي أستخدمها لبناء تطبيقات ويب حديثة وتطوير مهاراتي البرمجية."
      : "Technologies and tools I use to build modern web applications and develop my programming skills.");

  const getCourseTitle = (course) => {
    return (
      t?.courses?.[`${course.key}Title`] ||
      course.title
    );
  };

  const getCourseDescription = (course) => {
    const translatedDescription = t?.courses?.[course.key];

    // استخدم الوصف الافتراضي لو مفتاح الترجمة غير موجود.
    if (
      translatedDescription &&
      translatedDescription !== course.title
    ) {
      return translatedDescription;
    }

    return isArabic ? course.arDesc : course.desc;
  };

  const getCategoryLabel = (category) => {
    const categories = {
      frontend: isArabic ? "تطوير الواجهات" : "Frontend",
      backend: isArabic ? "تطوير الخوادم" : "Backend",
      programming: isArabic ? "البرمجة" : "Programming",
      tools: isArabic ? "الأدوات" : "Tools",
    };

    return categories[category] || category;
  };

  return (
    <section
      id="Courses"
      dir={isArabic ? "rtl" : "ltr"}
      className="theme-page scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="section-heading text-3xl font-bold sm:text-4xl">
            {sectionTitle}
          </h2>

          <p className="theme-muted mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base">
            {sectionSubtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.key}
                className="
                  theme-card group relative flex h-full flex-col
                  overflow-hidden rounded-2xl border border-white/10
                  p-6 shadow-md
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:border-orange-500/50
                  hover:shadow-xl
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute left-0 top-0 h-1 w-0
                    transition-all duration-300
                    group-hover:w-full
                  "
                  style={{ backgroundColor: course.color }}
                />

                {/* Icon */}
                <div
                  className="
                    mb-5 flex h-16 w-16 items-center justify-center
                    rounded-2xl border border-white/10 bg-white/5
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={36}
                    color={course.color}
                    aria-hidden="true"
                  />
                </div>

                {/* Translated Title */}
                <h3 className="theme-text min-h-14 text-lg font-bold leading-7 sm:text-xl">
                  {getCourseTitle(course)}
                </h3>

                {/* Translated Description */}
                <p className="theme-muted mt-3 min-h-20 flex-1 text-sm leading-7">
                  {getCourseDescription(course)}
                </p>

                {/* Category */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="theme-muted text-xs font-medium">
                    {getCategoryLabel(course.category)}
                  </span>

                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: course.color }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;