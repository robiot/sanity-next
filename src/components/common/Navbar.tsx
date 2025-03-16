"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {
  const NavbarLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      href={to}
      className={cn(
        "relative py-2 text-sm font-medium transition-colors hover:text-black",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full",
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-medium flex items-center tracking-tight"
        >
          <span className="bg-black text-white rounded px-1 mr-1">S</span>
          <span className="hidden sm:inline">Web</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavbarLink to="/" label="Home" />
          <NavbarLink to="/asd" label="About" />
          <NavbarLink to="/asd" label="Contact" />
          <NavbarLink to="/asd" label="More" />
        </div>
      </div>
    </header>
  );
};
