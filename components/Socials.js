import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
FaInstagram,
FaLinkedinIn
} from "react-icons/fa";
import {
  BsTwitterX
} from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-2xl">
      <Link href={'https://www.instagram.com/devendrasolanki._/?hl=en'} className="hover:text-accent transition-all duration-300">
       <FaInstagram />
      </Link>
      <Link href={'https://github.com/devendrasingh25'} className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link href={'https://x.com/Devendr27421192'} className="hover:text-accent transition-all duration-300">
        <BsTwitterX />
      </Link>
      
      <Link href={'https://www.linkedin.com/in/me/'} className="hover:text-accent transition-all duration-300">
       <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default Socials;

