"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React E-Commerce",
    desc: "Web application using React JS and Tailwind CSS.",
    link: "https://e-commerce-inly.vercel.app/",
    img: "/Inly.png",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "E-Shop",
    desc: "E-commerce website using React, Redux Toolkit, and Tailwind CSS.",
    img: "/E-shop.png",
    link: "https://e-shop-kappa.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Clothing-Store",
    desc: "E-Commerce website using React JS and Tailwind CSS.",
    img: "/E-commerce.png",
    link: "https://clothing-store-wine.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "WaveNewsReact",
    desc: "News-react is a React-based web application for displaying news. It uses an API to fetch and present up-to-date content.",
    img: "/News.png",
    link: "https://news-react-blush.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Weather",
    desc: "React JS Weather App using OpenWeatherMap API.",
    img: "/Weather.png",
    link: "https://weather-six-orcin.vercel.app/",
  },
];

export default function PortfolioPage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl text-center md:text-6xl lg:text-8xl">
          My Works
        </div>

        <div className="sticky top-0 w-screen h-screen">
          <motion.div style={{ x }} className="flex w-screen h-screen">
            {items.map((item) => (
              <div
                className={`flex-shrink-0 h-full w-full flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center justify-center gap-8 text-white px-6 text-center">
                  <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>

                  <div className="relative w-64 h-48 md:w-80 md:h-56 lg:w-[400px] lg:h-[300px] xl:w-[500px] xl:h-[350px]">
                    <Image 
                    className="rounded-xl"
                      src={item.img}
                      alt="Project Image"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>

                  <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                    {item.desc}
                  </p>

                  <Link href={item.link}>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>

            <text
              fill="#000"
              textAnchor="middle"
              className="text-sm md:text-base lg:text-lg"
            >
              <textPath href="#circlePath" startOffset="50%">
                Front-End Developer • Front-End Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm md:text-base lg:text-lg"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
