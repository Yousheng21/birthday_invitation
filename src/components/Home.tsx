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
        <Section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 65,
            marginBottom: 100
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            <span className="min-[300px]:text-7xl min-[350px]:text-8xl">
              Приглашаю
            </span>
            <br />{" "}
            <span className="min-[300px]:text-6xl min-[350px]:text-7xl">
              на блестящую вечеринку
            </span>
            <br />
            <h1 className="text-main mt-10 text-wrap  min-[320px]:text-6xl min-[375px]:text-7xl">
              "Блести&Сияй"
            </h1>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="flex justify-center -mt-5"
          >
            <motion.img src={"/three.png"} className="three" alt="" />
            {View}
          </motion.div>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="mobile:pt-5 tablet:pt-0"
            style={{ fontSize: 72 }}
          >
            8 ноября 2024
          </motion.h1>
        </Section>

        <Section>
          <h1 className="shadow">Сбор гостей в 18:00</h1>
          <h1 className="shadow">
            Кафе "Каприз" <br /> г. Приморско-Ахтарск
          </h1>
        </Section>

        <Section>
          <h1 className="shadow pb-5">Дорогие мои!</h1>
          <br />
          <p className="text-5xl text-info">
            С радостью приглашаю вас отпраздновать мое блестящее <br />{" "}
            <span className="text-main text-5xl"> тридцатилетие!</span> <br />{" "}
            Этот важный момент мы отметим в блеске! <br />
            <br /> Мы погрузимся в мир веселья, зажигательной музыки и
            незабываемой атмосферы в стиле блестящего диско! Будем танцевать под
            сверкающие огни и наслаждаться друг другом! <br />
            <br /> Это мероприятие, которое вы не сможете пропустить, - взрослая
            блестящая вечеринка не для детских глаз. <br />
            <br /> Дресс-код: белый, серый, черный и серебро – пусть ваш наряд
            сияет так же ярко, как диско-шар! <br />
            <br /> С нетерпением жду вас на своем празднике! <br /> С любовью,
            Натали🖤
          </p>
        </Section>

        <Section>
          <h1 className="shadow">DRESS CODE</h1>
          <div className="flex tablet:flex-row mobile:flex-col gap-1">
            <div className="flex flex-col">
              {svg("black")}
              <span className="text-5xl text-info">Черный</span>
            </div>
            <div className="flex flex-col">
              {svg("white")}
              <span className="text-5xl text-info">Белый</span>
            </div>
            <div className="flex flex-col">
              {svg("grey")}
              <span className="text-5xl text-info">Серый</span>
            </div>
            <div className="flex flex-col items-center mt-16">
              <div className="silver" />

              <span className="text-5xl text-info">Серебристый</span>
            </div>
          </div>
        </Section>
        <div
          style={{
            backgroundImage: "url('/dance.gif')",
            width: "100%",
            height: 600,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "-10%",
          }}
        ></div>
      </main>
    </>
  );
};
