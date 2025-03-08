import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiAngularSimple, DiDotnet, DiReact } from "react-icons/di";
import { motion } from "framer-motion";
import { TbBrandCSharp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              ".NET Developer",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">ABHISHEK PATIL</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate software developer with over 3 years of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-3xl md:text-5xl z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.github.com/TheCoderAbhishek/"
              >
                <AiOutlineGithub className="text-gray-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/yuvraj96k/"
                className="text-white hover:text-gray-300"
              >
                <AiOutlineLinkedin className="text-blue-600" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/yuvraj96k/"
                className="text-white hover:text-gray-300"
              >
                <AiOutlineInstagram className="text-pink-500" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://leetcode.com/u/InnovationWithAbhi/"
                className="text-white hover:text-gray-300"
              >
                <SiLeetcode className="text-orange-500" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-5xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <TbBrandCSharp className="text-purple-700 mx-2" />
        <DiDotnet className="text-blue-700 mx-2" />
        <DiReact className="text-cyan-400 mx-2" />
        <DiAngularSimple className="text-red-600 mx-2" />
        <RiTailwindCssFill className="text-sky-500 mx-2" />
        <FaBootstrap className="text-indigo-500 mx-2 text-4xl" />
        <VscAzure className="text-blue-500 mx-2 text-4xl" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
