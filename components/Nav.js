// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-3 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-[4px] w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="flex w-full xl:flex-col items-center justify-center
        gap-x-6 xl:gap-y-5 
        px-2 sm:px-6 md:px-10 xl:px-0 
        h-[44px] sm:h-[52px] md:h-[58px] xl:h-max 
        py-[4px] xl:py-6 
        bg-white/10 backdrop-blur-sm 
        text-[20px] sm:text-[22px] md:text-[24px] xl:text-xl 
        xl:rounded-full"
      >
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && 'text-accent'
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* Tooltip (Desktop only) */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[5px] rounded-[3px]">
                <div className="text-[11px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>

            {/* Icon with padding */}
            <div className="p-2 sm:p-2.5 md:p-3">{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
