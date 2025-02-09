"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutIntro: React.FC = () => {
  const headShotImage = "/asselAndMe_PuertoViejo.jpg";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Profile Image / LEFT */}
      <div className="relative w-full h-full">
        <Image
          src={headShotImage}
          alt="Headshot of Vernon"
          fill
          className="object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Professional Statement - RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto px-8 py-12 flex flex-col justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Meet Vernon
        </h2>

        <div className="space-y-6 text-gray-300">
          <p>
            Passionate about creating elegant solutions to complex problems, I
            bring a unique perspective to frontend development with a focus on
            building scalable, user-friendly applications.
          </p>
          <p>
            My development philosophy centers on writing clean, maintainable
            code while staying at the forefront of modern web technologies.
          </p>
          <p>
            What sets me apart is my ability to bridge the gap between technical
            excellence and business objectives, ensuring that every line of code
            serves a purpose and adds value.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutIntro;
