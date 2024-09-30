import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import lottieBall from "../assets/lottie_ball.json";

import "../styles/home.style.css";

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

export const Home = () => {
  const { View } = useLottie({
    loop: true,
    autoplay: true,
    animationData: lottieBall,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: { marginLeft: "-5%", maxWidth: "35%", maxHeight: 500 },
  });
  return (
    <main>
      <motion.section
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="invitation"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
          Приглашаю <br /> на свой блестящий <br /> ЮБИЛЕЙ
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.img src={"src/assets/three.png"} className="three" alt="" />
          {View}
        </motion.div>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
          8 ноября 2024
        </motion.h1>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="invitation"
      >
        <h1>Сбор гостей в 18:00</h1>
        <h1>Кафе "Каприз" <br /> г. Приморско-Ахтарск</h1>
      </motion.section>
    </main>
  );
};
