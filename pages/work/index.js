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
    title: "Burger Store React app",
    description: "Built a responsive Food Delivery App UI using React, Vite, Tailwind CSS, and Bootstrap. Implemented clean layouts, smooth navigation, and reusable components. Used Vite for fast builds and Tailwind/Bootstrap for responsive styling.",
    image: "/3.png",
    tags: ["framer-motion", "Tailwindcss", "Next.js"],
    demoUrl: "https://food-app-lake-tau.vercel.app/",
    githubUrl: "https://github.com/devendrasingh25/Food-App"},
    {
    id: 2,
    title: "Movie Ticket App",
    description: "Developed a Movie Ticket Booking App using React, Tailwind CSS, and a backend with full CRUD support. Users can select movies, view live trailers, choose seats, and book tickets. Includes an admin panel for managing movies, showtimes, and bookings.",
    image: "/2.png",
    tags: ["framer-motion", "Tailwindcss", "Next.js"],
    demoUrl: "",
    githubUrl: "https://github.com/devendrasingh25/ticketapp"
  },
  
    {
    id: 3,
    title: "Weather App",
    description: "Built a weather web app using HTML, CSS, and JavaScript with an interactive UI. Features a responsive design and a smart search bar that displays weather data only after a valid location is entered.",
    image: "/4.png",
    tags: ["Html", "CSS", "Javascript"],
    demoUrl: "",
    githubUrl: "https://github.com/devendrasingh25/Climate"
  },
  
];

const Work = () => {
  return (
    <section id="projects" className="pt-48 pb-28 bg-card">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
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

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-10 max-w-prose mx-auto lg:mx-0">
              I’ve worked on a variety of projects that showcase my skills in frontend development, JavaScript, React, and Next.js.
            </p>

          
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
              spaceBetween={20}
              pagination={{ el: ".custom-pagination", clickable: true }}
              className="pb-8"
            >
              {projects.map((proj) => (
                <SwiperSlide key={proj.id}>
                  <div className="relative group w-full max-w-[90%] sm:max-w-md mx-auto rounded-xl overflow-hidden shadow-lg h-[200px] sm:h-[360px] mb-8">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-6">
                      <h3 className="text-xs sm:text-xl font-bold mb-1 text-accent sm:mb-3">
                        {proj.title}
                      </h3>
                      <p className="text-[10px] sm:text-base text-gray-300 mb-2 sm:mb-4">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {proj.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-black/30 text-white text-[9px] sm:text-sm font-medium px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center gap-3 sm:gap-6 text-sm sm:text-2xl">
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
