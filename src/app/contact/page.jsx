"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const text = "Say Hello";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

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
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto lg:h-full w-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-6 sm:p-12 lg:p-24"
        >
          <span className="text-lg sm:text-xl lg:text-2xl">
            Dear OlyaPla Dev,
          </span>
          <textarea
            rows={1}
            name="user_message"
            placeholder="Share your thoughts here..."
            className="bg-transparent resize-none border-b-2  border-black outline-none mt-2 pb-14  focus:border-violet-500 transition-colors text-base sm:text-lg w-full"
          ></textarea>
          <span className="text-lg sm:text-xl">Email for response:</span>
          <input
            name="user_email"
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

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
