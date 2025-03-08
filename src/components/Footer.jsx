import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">A.Patil</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://www.github.com/TheCoderAbhishek/">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj96k/">
            <AiOutlineLinkedin />
          </a>
          <a href="https://www.instagram.com/yuvraj96k/">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/InnovationWithAbhi/">
            <SiLeetcode />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 A.Patil</p>
    </div>
  );
};

export default Footer;
