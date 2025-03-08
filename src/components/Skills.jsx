import React from "react";
import { DiReact, DiBootstrap, DiMsqlServer, DiAws } from "react-icons/di";
import {
  SiDotnet,
  SiAngular,
  SiTailwindcss,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiApachespark,
  SiJenkins,
} from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "Angular", icon: <SiAngular className="text-red-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      {
        name: "Bootstrap 5",
        icon: <DiBootstrap className="text-purple-600" />,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "C#", icon: <TbBrandCSharp className="text-blue-700" /> },
      { name: "ASP.NET Web API", icon: <SiDotnet className="text-blue-600" /> },
      { name: "ASP.NET MVC", icon: <SiDotnet className="text-blue-600" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "Azure", icon: <VscAzureDevops className="text-blue-500" /> },
      { name: "AWS", icon: <DiAws className="text-yellow-500" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
      { name: "DevOps", icon: <SiJenkins className="text-red-600" /> },
    ],
  },
  {
    category: "Databases",
    technologies: [
      {
        name: "SQL Server",
        icon: <DiMsqlServer className="text-orange-600" />,
      },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "AI/ML",
    technologies: [
      { name: "AI/ML", icon: <SiApachespark className="text-yellow-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-4xl mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I have experience working on various frontend, backend, and cloud
          technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 p-6 rounded-lg bg-gray-900 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
