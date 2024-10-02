import React, { useState } from "react";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { useLottie } from "lottie-react";
import lottieBall from "../assets/lottie_ball.json";

import "../styles/home.style.css";
import { Section } from "./Section";

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

export const Home = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { View } = useLottie({
    loop: true,
    autoplay: true,
    animationData: lottieBall,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    className: "ball",
  });

  const svg = (color: string) => (
    <svg height="300" width="300" style={{ alignSelf: "center" }}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="rgb(196,196,196)" />
          <stop offset="49%" stopColor="rgb(255,255,255)" />
          <stop offset="100%" stopColor="rgb(199,199,199)" />
        </linearGradient>
      </defs>
      <circle
        style={{ filter: `drop-shadow(0px 0px 5px white)` }}
        strokeOpacity={0.5}
        cx="150"
        cy="150"
        r="100"
        stroke="white"
        strokeWidth={1}
        fill={color === "silver" ? "url(#grad1)" : color}
      />
    </svg>
  );

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <main>
        <Section>
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
            className="mobile:mt-10 mobile:mb-10"
            style={{
              display: "flex",
              justifyContent: "center",
              maxHeight: "40%",
              maxWidth: "100%",
            }}
          >
            <motion.img src={"/src/assets/three.png"} className="three" alt="" />
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
        </Section>

        <Section>
          <h1>Сбор гостей в 18:00</h1>
          <h1>
            Кафе "Каприз" <br /> г. Приморско-Ахтарск
          </h1>
        </Section>

        <Section>
          <h1>DRESS CODE</h1>
          <div className="flex tablet:flex-row mobile:flex-col gap-1">
            <div className="flex flex-col">
              {svg("black")}
              <span className="text-5xl text-center" style={{ color: "white" }}>
                Черный
              </span>
            </div>
            <div className="flex flex-col">
              {svg("white")}
              <span className="text-5xl text-center" style={{ color: "white" }}>
                Белый
              </span>
            </div>
            <div className="flex flex-col">
              {svg("grey")}
              <span className="text-5xl text-center" style={{ color: "white" }}>
                Серый
              </span>
            </div>
            <div className="flex flex-col">
              {svg("silver")}
              <span className="text-5xl text-center" style={{ color: "white" }}>
                Серебристый
              </span>
            </div>
          </div>
        </Section>

        <Section>
          <h1>Текст</h1>
        </Section>
      </main>
    </>
  );
};
