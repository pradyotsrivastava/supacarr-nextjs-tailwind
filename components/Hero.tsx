"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero bg-zinc-300">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book & rent your perfect car — fast and hassle-free!
        </h1>

        <p className="hero__subtitle">
          Effortlessly discover, explore, and book the perfect car with all the
          details you need at your fingertips.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-pink-500 text-2xl font-bold text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
