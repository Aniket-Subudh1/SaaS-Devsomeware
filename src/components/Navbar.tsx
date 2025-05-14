"use client";
import { usePathname } from "next/navigation";
import Logo from "@/./../public/tra.png";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  link: string;
}

export const Navbar = () => {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { name: 'Home', path: '/ ', link: '/ ' },
    { name: 'Products', path: '/ ', link: '/ ' },
    { name: 'About', path: '/ ', link: '/ ' },
    { name: 'Contact', path: '/ ', link: '/ ' },
  ];
  
  return (
    <header className="sticky top-5 mx-auto z-[999] w-[80%] max-w-screen-md bg-background-1/2 backdrop-blur-lg border border-white/10 rounded-3xl shadow-md px-6 py-3 hidden md:flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src={Logo}
          alt="DWS Logo"
          width={40}
          height={40}
          className="relative z-10"
        />
      </Link>
      
      <div className="flex items-center gap-6 mr-10">
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={`relative flex items-center space-x-1 text-sm transition-all duration-300
              ${
                pathname === navItem.link
                  ? "text-pink-500 font-semibold shadow-glow"
                  : "text-white hover:text-pink-500 hover:shadow-glow"
              }`}
          >
            {navItem.icon && (
              <span className="block sm:hidden">{navItem.icon}</span>
            )}
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};
