import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a passionate{" "}
                <span className="text-primary-color">Software Developer</span>{" "}
                with over <span className="text-primary-color">3 years</span> of
                experience in building high-performance web applications. My
                expertise lies in{" "}
                <span className="text-primary-color">
                  C#, .NET Core, ASP.NET Web API, React, and Angular
                </span>
                , alongside modern UI frameworks like{" "}
                <span className="text-primary-color">
                  Tailwind CSS and Bootstrap
                </span>
                . I also have strong experience working with databases such as{" "}
                <span className="text-primary-color">
                  MySQL, PostgreSQL, and MSSQL Server
                </span>
                , and cloud platforms including{" "}
                <span className="text-primary-color">Azure, AWS, and GCP</span>.
                I thrive on solving complex problems and crafting scalable
                solutions that deliver impact.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bjjmrnpb"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let’s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              autoComplete="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              autoComplete="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              autoComplete="off"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
