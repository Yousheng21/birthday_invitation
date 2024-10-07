import { motion, type ForwardRefComponent, type HTMLMotionProps, type MotionProps, type Variants } from "framer-motion";
import React, { type HTMLAttributes } from "react";

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

interface IProps extends MotionProps {
  children: React.ReactNode
}

export const Section = (props: IProps) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className="invitation"
      {...props}
    >
      {props.children}
    </motion.section>
  );
};
