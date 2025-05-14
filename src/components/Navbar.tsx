"use client";
import { usePathname } from "next/navigation";
import Logo from "@/./../public/tra.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import cn from "clsx";
import { Home, Package, Info, Mail } from "lucide-react";

interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: React.ReactElement;
  link: string;
}

export const Navbar = () => {
  const pathname = usePathname();
  const [pressedIcon, setPressedIcon] = useState<string | null>(null);
  
  const navItems: NavItem[] = [
    { id: "home", name: 'Home', path: '/ ', icon: <Home />, link: '/ ' },
    { id: "products", name: 'Products', path: '/ ', icon: <Package />, link: '/ ' },
    { id: "about", name: 'About', path: '/ ', icon: <Info />, link: '/ ' },
    { id: "contact", name: 'Contact', path: '/ ', icon: <Mail />, link: '/ ' },
  ];

  useEffect(() => {
    setPressedIcon(null);
  }, [pathname]);

  function isActivePath(pathname: string, link: string): boolean {
    const normalize = (path: string) =>
      path.replace(/\/$/, "").toLowerCase() || "/";
    const currentPath = normalize(pathname);
    const itemLink = normalize(link);

    if (itemLink === "/") {
      return currentPath === "/";
    } else {
      return currentPath === itemLink || currentPath.startsWith(itemLink + "/");
    }
  }
  
  return (
    <>
      {/* Desktop Navigation */}
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
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto mb-10 flex origin-bottom h-full max-h-14">
          <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

          <TooltipProvider>
            <Dock className="z-50 pointer-events-auto backdrop-blur-3xl relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              {navItems.map((item) => {
                const key = `nav-${item.id}`;
                return (
                  <DockIcon key={key}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.link}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                              size: "icon",
                            }),
                            "w-12 h-12 flex items-center justify-center"
                          )}
                        >
                          <span
                            onClick={() => {
                              console.log(`Icon ${item.name} clicked`);
                              setPressedIcon(item.name);
                            }}
                          >
                            {React.cloneElement(item.icon, {
                              className: cn(
                                "h-5 w-5",
                                isActivePath(pathname, item.link) ||
                                  pressedIcon === item.name
                                  ? "text-pink-500"
                                  : "text-gray-600 dark:text-gray-400 hover:text-pink-500"
                              ),
                            })}
                          </span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                );
              })}
            </Dock>
          </TooltipProvider>

          {pressedIcon && (
            <div className="absolute bottom-16 mx-auto text-center w-full">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-pink-500">{pressedIcon}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
