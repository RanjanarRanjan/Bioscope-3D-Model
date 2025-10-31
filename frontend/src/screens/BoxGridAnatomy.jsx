import React from "react";
import { motion } from "framer-motion";
import {
  arrow,
  Skeletal,
  Muscular,
  Nervous,
  Digestive,
  Respiratory,
  Circulatory,
} from "../assets/images";

const BoxGridAnatomy = () => {
  const boxes = [
    { id: 1, imageUrl: Skeletal, text: "Skeletal System" },
    { id: 2, imageUrl: Muscular, text: "Muscular System" },
    { id: 3, imageUrl: Nervous, text: "Nervous System" },
    { id: 4, imageUrl: Digestive, text: "Digestive System" },
    { id: 5, imageUrl: Respiratory, text: "Respiratory System" },
    { id: 6, imageUrl: Circulatory, text: "Circulatory System" },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white px-6 py-12 md:px-12 lg:px-24">
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-1">AnatomyScope</h2>
        <h1 className="text-4xl font-bold text-gray-800">Human Anatomy Explorer</h1>
      </section>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {boxes.map((box, index) => (
          <motion.div
            key={box.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.3,     // staggered delay
              duration: 1,            // slower motion
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="border border-gray-200 rounded-2xl shadow-md p-5 text-center bg-white hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={box.imageUrl}
              alt={box.text}
              className="w-full h-40 object-contain mb-4 transition-transform duration-300 hover:scale-110"
            />
            <p className="text-lg font-medium text-gray-700">{box.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all hover:scale-105 shadow-lg">
          View More
          <motion.img
            src={arrow}
            alt="arrow"
            className="w-5 h-5"
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </button>
      </motion.div>
    </div>
  );
};

export default BoxGridAnatomy;
