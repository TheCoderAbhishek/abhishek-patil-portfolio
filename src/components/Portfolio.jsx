import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.svg";
import project4 from "../assets/project4.jfif";
import { AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Cardio Risk Prediction System",
    description:
      "A web application using Django and Logistic Regression to predict heart disease risk.",
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
      "Developed a responsive company website using Angular 18 and Tailwind CSS.",
    links: {
      site: "https://innovatewithabhi.github.io/AridentRIS/home",
      github: "https://github.com/InnovateWithAbhi/AridentRIS",
    },
  },
  {
    img: project4,
    title: "AridentRIS E-Commerce",
    description:
      "A feature-rich e-commerce platform built with Angular, TypeScript, and Tailwind CSS.",
    links: {
      site: "https://innovatewithabhi.github.io/AridentRIS-Ecommerce/",
      github: "https://github.com/InnovateWithAbhi/AridentRIS-Ecommerce",
    },
  },
];

// Typewriter Hook with Uniform Timing
const useTypewriter = (text, duration = 2500, delay = 1000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = duration / text.length; // Ensures all titles complete in the same time

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
    }
  }, [index, text, typingSpeed, delay]);

  return displayedText;
};

const Portfolio = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24" id="portfolio">
      {/* Portfolio Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-100 text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Portfolio
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const typedTitle = useTypewriter(project.title, 2500, 1500); // Same typing duration for all

          return (
            <motion.div
              key={index}
              className="bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transition-all hover:scale-105 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </motion.div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Title with Typewriter Effect */}
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  {typedTitle}
                  <span className="animate-blink">|</span>
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    className="text-gray-200 text-2xl hover:text-blue-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
