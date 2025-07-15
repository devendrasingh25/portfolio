import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaJava,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman
} from "react-icons/si";

// data (✅ fixed: using icon components instead of JSX)
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs,
          FaBootstrap, SiFramer, FaWordpress, FaFigma
        ],
      },
      {
        title: 'Backend Development',
        icons: [SiExpress, FaNode, SiMongodb, SiMysql, FaJava, SiPostman],
      },
      {
        title: 'Version Control & Deployment',
        icons: [FaGitAlt, FaGithub],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      { title: 'B.Tech, Computer Science – RTU Kota', stage: '2023 - 2027' },
      { title: 'Completed 12th (Science) – Dr. Bansi Dhar School', stage: '2022' },
      { title: 'Completed 10th – Dr. Bansi Dhar School', stage: '2020' },
    ],
  },
];

// components 
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 pt-[9rem] sm:pt-[10rem] md:pt-[12rem] pb-[6rem] text-center xl:text-left relative">
      <Circles />

      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 left-[370px]"
      />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:ml-[4.5rem] px-4">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-6 sm:mt-10 md:mt-12"
          >
            Turning <span className="text-accent">Curiosity</span> into Creation
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs sm:text-sm md:text-base"
          >
            Starting from zero, I built my skills through relentless consistency and curiosity—mastering tools like React, Next.js, and Tailwind CSS. Every challenge shaped my journey into a passionate and capable web developer.
          </motion.p>

          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-sm sm:text-base xl:text-xl uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right content (tabs) */}
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`relative cursor-pointer capitalize 
                  text-[11px] sm:text-sm md:text-base xl:text-lg font-medium 
                  px-2 py-1
                  ${index === itemIndex
                    ? 'text-accent after:w-full after:bg-accent'
                    : 'text-white/70 after:w-0 after:bg-white/30'
                  }
                  after:h-[2px] after:absolute after:bottom-0 after:left-0 
                  after:transition-all after:duration-300 after:rounded`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 text-xs sm:text-sm md:text-base"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((IconComponent, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-lg sm:text-xl md:text-2xl text-white"
                    >
                      <IconComponent />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-10 sm:h-12 md:h-14" />
    </div>
  );
};

export default About;
