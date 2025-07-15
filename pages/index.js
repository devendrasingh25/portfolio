import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-32 xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            I'm <span className="text-accent"> Devendra </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Web developer & <br /> programmer
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md sm:max-w-lg md:max-w-xl mx-auto xl:mx-0 mb-4 sm:mb-6 sm:text-base"
          >
            “Ideas fade. Execution is what stays.”<br />
            Because code, not concepts, brings visions to life.
          </motion.p>

          {/* Resume Button */}
          <motion.div
            variants={fadeIn('down', 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start mb-6"
          >
            <Link
              href="https://drive.google.com/file/d/1z_9FlGYhJhKJT-H2Zi3wGbpwqzslLwnd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 bg-accent hover:bg-transparent text-white font-semibold rounded-lg shadow-md   hover:scale-105 transition-all border border-white/5"
            >
              Download CV
            </Link>
          </motion.div>

          {/* Mobile - Projects Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          {/* Desktop - Projects Button */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Right-side visuals */}
      <div className="absolute right-0 bottom-0 w-full xl:w-[1200px] h-[500px] xl:h-full">
        {/* Explosion Background */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        {/* Particle effect */}
        <div className="absolute w-full h-full">
          <ParticlesContainer />
        </div>

        {/* Avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] absolute bottom-0 left-1/2 xl:right-[6%] transform -translate-x-1/2 xl:translate-x-0"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
