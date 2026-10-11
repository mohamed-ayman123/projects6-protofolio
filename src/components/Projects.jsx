import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import existingProjects from "../data/projects";
import { useSettings } from "../context/SettingsContext";

function Projects() {
  const { t } = useSettings();

  // المشروعان الجديدان
  const newProjects = [
    {
      id: "nexistech-admin",
      titleKey: "nexistechAdminTitle",
      descriptionKey: "nexistechAdminDescription",
      image: "/src/assets/projects/nexistech-dashboard.png",
      live: "https://nexistech-dashboard.vercel.app/dashboard",
      github:
        "https://github.com/mohamed-ayman123/ecommerce-project/tree/main/admin-dashboard",
    },
    {
      id: "nexistech-store",
      titleKey: "nexistechStoreTitle",
      descriptionKey: "nexistechStoreDescription",
      image: "/src/assets/projects/nexistech-store.png",
      live: "https://nexistech.vercel.app/",
      github:
        "https://github.com/mohamed-ayman123/ecommerce-project/tree/main/store",
    },
  ];

  // كل المشاريع القديمة والجديدة
  const allProjects = [...existingProjects, ...newProjects];

  // نصوص افتراضية للمشروعين حتى لو مفاتيح الترجمة لم تُضف بعد
  const projectTexts = {
    nexistechAdminTitle:
      t.projects.nexistechAdminTitle ||
      (t.projects.demo === "Live Demo"
        ? "NexisTech Admin Dashboard"
        : "لوحة تحكم NexisTech"),

    nexistechAdminDescription:
      t.projects.nexistechAdminDescription ||
      (t.projects.demo === "Live Demo"
        ? "Admin dashboard for managing the e-commerce application."
        : "لوحة تحكم لإدارة تطبيق التجارة الإلكترونية."),

    nexistechStoreTitle:
      t.projects.nexistechStoreTitle ||
      (t.projects.demo === "Live Demo"
        ? "NexisTech E-commerce Store"
        : "متجر NexisTech الإلكتروني"),

    nexistechStoreDescription:
      t.projects.nexistechStoreDescription ||
      (t.projects.demo === "Live Demo"
        ? "An online store for browsing products and shopping."
        : "متجر إلكتروني لاستعراض المنتجات والتسوق."),
  };

  return (
    <section
      id="Projects"
      className="theme-page scroll-mt-20 py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="section-heading text-center text-3xl sm:text-5xl">
          {t.projects.title}
        </h2>

        <p className="theme-muted mx-auto mb-12 mt-5 max-w-2xl text-center leading-7">
          {t.projects.subtitle}
        </p>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => {
            const title =
              projectTexts[project.titleKey] ||
              t.projects[project.titleKey] ||
              project.title ||
              "";

            const description =
              projectTexts[project.descriptionKey] ||
              t.projects[project.descriptionKey] ||
              project.description ||
              "";

            return (
              <article
                key={project.id}
                className="theme-card group overflow-hidden rounded-2xl"
              >
                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="theme-text mb-3 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="theme-muted mb-6 min-h-16 leading-7">
                    {description}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-button inline-flex items-center gap-2 rounded-lg px-4 py-2.5"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        {t.projects.demo}
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-surface inline-flex items-center gap-2 rounded-lg px-4 py-2.5"
                      >
                        <FaGithub aria-hidden="true" />
                        {t.projects.code}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;