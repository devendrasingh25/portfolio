import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { AiOutlineArrowRight } from "react-icons/ai";

import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Show Booking app",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/bulb.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Burger-Store-React-app  ",
    description: "Analytics dashboard with charts and insights.",
    image: "/2.png",
    tags: ["framer-motion", "Tailwindcss", "Next.js"],
    demoUrl: "https://food-app-lake-tau.vercel.app/",
    githubUrl: "https://github.com/devendrasingh25/Food-App"
  },
  {
    id: 3,
    title: "Weather app ",
    description: "Online store with user auth and Stripe payments.",
    image: "/bulb.png",
    tags: ["Html", "Css", "Java Script"],
    demoUrl: "#",
    githubUrl: ""
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/bulb.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Orbit Analytics Dashboard",
    description: "Analytics dashboard with charts and insights.",
    image: "/bulb.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Online store with user auth and Stripe payments.",
    image: "/bulb.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Work = () => {
  return (
    <section id="projects" className="pt-48 pb-28 bg-card">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Left side: text + CTA */}
         <motion.div
  variants={fadeIn('up', 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="lg:w-1/2 w-full text-center lg:text-left"
>
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
    Featured <span className="text-accent">Projects</span>
  </h2>

  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 max-w-prose mx-auto lg:mx-0">
    {/* Add optional description here */}
     I’ve worked on a variety of projects that showcase my skills in frontend development, JavaScript, React, and Next.js. From landing pages to full-stack apps, each project reflects my attention to detail and passion for building user-friendly experiences.
  </p>

  <a
    href="https://github.com/devendrasingh25"
    target="_blank"
    rel="noopener noreferrer"
   className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-accent hover:bg-transparent text-white text-sm sm:text-base font-semibold rounded-md shadow-md hover:scale-105 transition-all border border-white/5"

  >
    My GitHub
    <AiOutlineArrowRight className="text-lg sm:text-xl" />
  </a>
</motion.div>

          {/* Right side: slider */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:w-1/2 w-full"
          >
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={32}
              pagination={{ el: ".custom-pagination", clickable: true }}
              className="pb-8"
            >
              {projects.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div className="relative group w-full max-w-full sm:max-w-md mx-auto rounded-xl overflow-hidden shadow-lg h-[220px] sm:h-[400px] mb-8">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-6">
                      <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-3">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-300 mb-2 sm:mb-4">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {proj.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-accent/40 text-white text-[10px] sm:text-sm font-medium px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center gap-3 sm:gap-6 text-base sm:text-2xl">
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          <FaLink />
                        </a>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>


              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center mt-6"></div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Work;
