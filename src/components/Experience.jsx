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
    description:
      "Developing and deploying MES and AES solutions using .NET Core, ASP.NET Web API, Angular, and MSSQL. Managing cloud-based deployment on Azure while optimizing industrial OT operations with automation.",
  },
  {
    company: "Jisa Softech Pvt Ltd",
    logo: "/jisa_softech.jpg",
    location: "Pune, Maharashtra",
    role: "Software Developer (.NET)",
    period: "September 2023 - January 2025",
    description:
      "Worked in the cryptographic domain, implementing encryption, TDE, and key management solutions. Developed secure applications with ASP.NET MVC, Web API, React, Angular, and cloud services (Azure, AWS, GCP).",
  },
  {
    company: "Persistent Systems",
    logo: "/persistent.png",
    location: "Pune, Maharashtra",
    role: "Software Engineer",
    period: "July 2022 - August 2023",
    description:
      "Developed Medical and Fintech applications using React, ASP.NET Web API, and MSSQL. Integrated AI/ML-based analytics for decision-making and optimized cloud-based data processing solutions.",
  },
  {
    company: "Persistent Systems",
    logo: "/persistent.png",
    location: "Pune, Maharashtra",
    role: "Intern",
    period: "February 2022 - July 2022",
    description:
      "Gained experience in C#, ASP.NET MVC, Web API, and ADO.NET. Assisted in developing web applications, debugging code, and enhancing database functionalities.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <div id="experience" className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(150, 0, 255, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="border-2 border-purple-500 p-5 rounded-xl shadow-lg bg-gray-900/80 backdrop-blur-md flex flex-col items-center text-center h-[320px] w-[360px] mx-auto transition-all duration-300 overflow-hidden"
            >
              <motion.img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-16 h-16 object-contain rounded-md mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              <h2 className="text-gray-100 text-lg font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {experience.location}
              </p>
              <p className="text-gray-300 text-sm font-medium mt-1">
                {experience.role}
              </p>
              <p className="text-gray-400 text-xs">{experience.period}</p>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
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
