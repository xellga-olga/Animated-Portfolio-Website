"use client";
import { motion } from "framer-motion";
import Bottom from "../../../public/bottom.svg";
import Signature from "../../../public/signature.svg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="w-full">
        {/* Text Container */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* BIO */}
          <div className="flex flex-col gap-12 items-center">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="text-lg text-center p-5">
              Hi, I am <strong>Olya</strong> — a creative and detail-oriented
              **Frontend Developer** with a passion for modern web development.
              My mission is to create intuitive, visually appealing, and
              high-performance user experiences using the latest tools and
              technologies.
            </p>
            <p className="text-lg text-center p-5">
              I thrive on solving challenging problems and turning ideas into
              reality with **React**, **JavaScript**, and other cutting-edge
              frameworks. Whether it is developing interactive interfaces,
              optimizing code, or collaborating with teams, I am always ready to
              push boundaries and stay ahead in the ever-evolving tech world.
            </p>
            <span className="italic text-center">
            «Code that connects, design that inspires»
              <Image
                src={Signature}
                alt="signature"
                className="h-14 w-auto mx-auto"
              />
            </span>
            <Image src={Bottom} alt="bottom" className="h-20 w-auto mx-auto" />
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-12 items-center mt-8">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                JavaScript
              </div>
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                React.js
              </div>
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                Next.js
              </div>
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                CSS
              </div>
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                SCSS
              </div>
              <div className="cursor-pointer bg-black text-white p-2 text-sm rounded hover:text-black hover:bg-white ">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </div>
            <Image src={Bottom} alt="bottom" className="h-20 w-auto mx-auto" />
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 items-center mt-8">
            <h1 className="text-2xl font-bold">Experience</h1>

            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Assisted in building responsive web applications using
                    JavaScript and modern frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    TechCorp
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Contributed to React projects by implementing components and
                    fixing bugs.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    dec.2023 - 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Webify Solutions
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Intern Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Learned web development practices and built small projects
                    under supervision.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    jun.2023 - sept.2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    StartUp Labs
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
