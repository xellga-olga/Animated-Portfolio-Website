"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const text = "Say Hello";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-6xl items-center justify-center flex">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😊
          </div>
        </div>

        {/* Form Container  */}
        <form className="h-auto lg:h-full w-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-6 sm:p-12 lg:p-24">
          <span className="text-lg sm:text-xl lg:text-2xl">
            Dear OlyaPla Dev,
          </span>
          <textarea
            rows={1}
            placeholder="Share your thoughts here..."
            className="bg-transparent resize-none border-b-2 border-black outline-none mt-2 pb-12 focus:border-violet-500 transition-colors text-base sm:text-lg w-full"
          ></textarea>
          <span className="text-lg sm:text-xl">Email for response:</span>
          <input
            type="email"
            placeholder="example@mail.com"
            className="bg-transparent border-b-2 border-black outline-none mt-2 pb-4 focus:border-violet-500 transition-colors text-base sm:text-lg w-full"
          ></input>
          <span className="text-sm sm:text-base lg:text-lg text-gray-600">
            Looking forward to hearing from you!
          </span>
          <button className="bg-purple-200 hover:bg-violet-300 rounded font-semibold text-gray-600 p-4sm:p-4 lg:p-6 text-base sm:text-lg transition-colors">
            Send 🚀
          </button>
        </form>
      </div>
    </motion.div>
  );
}
