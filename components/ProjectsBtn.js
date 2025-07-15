import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] xl:w-[185px] xl:h-[185px] flex items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=".."
          className="animate-spin-slow w-full h-full max-w-[110px] max-h-[110px] sm:max-w-[125px] sm:max-h-[130px] xl:max-w-[141px] xl:max-h-[148px]"
        />
        <HiArrowRight className="absolute text-3xl sm:text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
