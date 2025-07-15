import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-6 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-6 lg:py-8">
          
          {/* Logo */}
          <Link href="/" className="block">
            <Image 
              src="/op1.svg" 
              width={180} 
              height={48} 
              alt="Logo"
              priority
            />
          </Link>

          {/* Social Icons */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
