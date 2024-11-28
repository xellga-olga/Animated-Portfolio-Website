"use client";

import Image from "next/image";
import Hero from "../../public/hero.png";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full lg:flex-row flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 relative lg:w-1/2 lg:h-full">
          <Image src={Hero} alt="hero" fill className="object-contain" />
        </div>

        {/* Text Container */}
        <div className=" lg:w-1/2 lg:h-full h-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Portfolio
          </h1>
          <p className="md:text-xl">
            Passionate about crafting stunning web experiences, I specialize in
            delivering scalable and high-performance solutions. Let’s bring your
            ideas to life with clean code and creative designs.
          </p>

          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button
              className="p-4 bg-black text-white rounded-lg ring-1 ring-black transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
              onClick={() =>
                window.open("https://github.com/xellga-olga", "_blank")
              }
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black transition-transform duration-300 hover:scale-105 hover:ring-gray-400 hover:bg-gray-100"
              onClick={() => window.open("https://t.me/OlyaaPla", "_blank")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
