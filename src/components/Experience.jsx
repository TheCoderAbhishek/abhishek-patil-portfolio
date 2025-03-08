import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "AT&S",
    logo: "/ats.svg",
    location: "Pune, Maharashtra",
    role: "Software Engineer OT_Ops",
    period: "February 2025 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Jisa Softech Pvt Ltd",
    logo: "/jisa_softech.jpg",
    location: "Pune, Maharashtra",
    role: "Software Developer (.NET)",
    period: "September 2023 - January 2025",
    description: "Description of your experience in this company.",
  },
  {
    company: "Persistent Systems",
    logo: "/persistent.png",
    location: "Pune, Maharashtra",
    role: "Software Engineer",
    period: "July 2022 - August 2023",
    description: "Description of your experience in this company.",
  },
  {
    company: "Persistent Systems",
    logo: "/persistent.png",
    location: "Pune, Maharashtra",
    role: "Intern",
    period: "February 2022 - July 2022",
    description: "Description of your experience in this company.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border border-purple-600 p-6 rounded-xl shadow-lg bg-gray-900/80 backdrop-blur-md flex flex-col items-center text-center"
            >
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-16 h-16 object-contain rounded-md mb-4"
              />
              <h2 className="text-gray-100 text-xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                {experience.location}
              </p>
              <p className="text-gray-300 text-sm font-medium mt-1">
                {experience.role}
              </p>
              <p className="text-gray-400 mt-2 text-sm">{experience.period}</p>
              <p className="text-gray-400 mt-4 text-sm">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
