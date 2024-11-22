import Image from "next/image";
import Hero from "../../public/hero.png";

const Homepage = () => {
  return (
    <div className="h-full lg:flex-row flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Container */}
      <div className="h-1/2 relative lg:w-1/2 lg:h-full">
        <Image src={Hero} alt="hero" fill className="object-contain"/>
      </div>

      {/* Text Container */}
      <div className=" lg:w-1/2 lg:h-full h-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="md:text-xl">
          Passionate about crafting stunning web experiences, I specialize in
          delivering scalable and high-performance solutions. Let’s bring your
          ideas to life with clean code and creative designs.
        </p>

        {/* Buttons */}
        <div className="w-full flex gap-4">
          <button className="p-4 bg-black text-white rounded-lg ring-1 ring-black">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
