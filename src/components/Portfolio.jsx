import React from "react";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.svg";
import project4 from "../assets/project4.jfif";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Cardio Risk Prediction System",
    description:
      "The Cardio Risk Prediction System (CRPS) is a user-friendly web application, developed with Django, that utilizes machine learning (Logistic Regression) to predict the likelihood of heart disease.",
    links: {
      site: "https://github.com/TheCoderAbhishek/Cardio-Risk-Prediction-System-Python",
      github:
        "https://github.com/TheCoderAbhishek/Cardio-Risk-Prediction-System-Python",
    },
  },
  {
    img: project2,
    title: "AridentRIS Brand",
    description:
      "Developed the official AridentRIS company website using Angular 18 and Tailwind CSS, creating a modern and responsive online presence.",
    links: {
      site: "https://innovatewithabhi.github.io/AridentRIS/home",
      github: "https://github.com/InnovateWithAbhi/AridentRIS",
    },
  },
  {
    img: project4,
    title: "AridentRIS E-Commerce",
    description:
      "A feature-rich e-commerce platform built with Angular, TypeScript, and Tailwind CSS, providing a seamless shopping experience.",
    links: {
      site: "https://innovatewithabhi.github.io/AridentRIS-Ecommerce/",
      github: "https://github.com/InnovateWithAbhi/AridentRIS-Ecommerce",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          {" "}
          {/* Key added here */}
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                            transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                            transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
