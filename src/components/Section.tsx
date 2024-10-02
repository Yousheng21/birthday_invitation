import { motion, type Variants } from "framer-motion";
import React from "react";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Section = (props: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className="invitation"
    >
      {props.children}
    </motion.section>
  );
};
