"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileProjectsOpen(false);
  };

  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/Inscoa Logo.webp"
              alt="PD Engineering"
              width={150}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10 text-black font-medium">
            <Link
              href="/"
              className={`transition hover:text-blue-800 ${
                pathname === "/" ? "text-blue-800" : "text-black"
              }`}
            >
              Home
            </Link>

            <Link
              href="/aboutUs"
              className={`transition hover:text-blue-800 ${
                pathname === "/aboutUs" ? "text-blue-800" : "text-black"
              }`}
            >
              About Us 
            </Link>

            <Link
              href="/whatWeDo"
              className={`transition hover:text-blue-800 ${
                pathname === "/whatWeDo" ? "text-blue-800" : "text-black"
              }`}
            >
              What We Do
            </Link>

             <Link
              href="/projects"
              className={`transition hover:text-blue-800 ${
                pathname === "/projects" ? "text-blue-800" : "text-black"
              }`}
            >
              Projects
            </Link>

            {/* Projects Dropdown */}

            {/* <div className="relative group">
              <button
                className={`flex items-center cursor-pointer gap-1 transition ${
                  pathname.startsWith("/projects")
                    ? "text-blue-800"
                    : "text-black"
                } hover:text-blue-800`}
              >
                Projects
                <ChevronDown size={16} />
              </button>

              <div className="absolute -ml-4 left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="bg-white border border-gray-200 rounded-xl p-4 w-48 shadow-lg">
                  <Link
                    href="/projects/projects01"
                    className={`block py-2 hover:text-blue-800 ${
                      pathname === "/projects/projects01"
                        ? "text-blue-800"
                        : "text-black"
                    }`}
                  >
                    projects01
                  </Link>

                  <Link
                    href="/projects/projects02"
                    className={`block py-2 hover:text-blue-800 ${
                      pathname === "/projects/projects02"
                        ? "text-blue-800"
                        : "text-black"
                    }`}
                  >
                    projects02
                  </Link>
                </div>
              </div>
            </div> */}

            <Link
              href="/productSupply"
              className={`transition hover:text-blue-800 ${
                pathname === "/productSupply" ? "text-blue-800" : "text-black"
              }`}
            >
              Products & Supply
            </Link>
          </nav>

          {/* Contact Button */}

          <div className="hidden lg:block">
            <Link
              href="/contactUs"
              className="px-6 py-2 rounded-full text-white text-md font-semibold bg-linear-to-r from-blue-600 to-blue-800 hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-6 gap-4 text-black">
            <Link
              href="/"
              className={`hover:text-blue-800 ${
                pathname === "/" ? "text-blue-800" : "text-black"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/aboutUs"
              className={`hover:text-blue-800 ${
                pathname === "/aboutUs" ? "text-blue-800" : "text-black"
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <Link
              href="/whatWeDo"
              className={`hover:text-blue-800 ${
                pathname === "/whatWeDo" ? "text-blue-800" : "text-black"
              }`}
              onClick={closeMobileMenu}
            >
              What We Do
            </Link>

            {/* Mobile Projects Dropdown */}

            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className={`flex items-center cursor-pointer justify-between hover:text-blue-800 ${
                pathname.startsWith("/projects") ? "text-blue-800" : "text-black"
              }`}
            >
              Projects
              <ChevronDown size={18} />
            </button>

            {mobileProjectsOpen && (
              <div className="pl-4 flex flex-col gap-2 text-sm">
                <Link
                  href="/projects/projects01"
                  className={`hover:text-blue-800 ${
                    pathname === "/projects/projects01" ? "text-blue-800" : "text-black"
                  }`}
                  onClick={closeMobileMenu}
                >
                  projects01
                </Link>

                <Link
                  href="/projects/projects02"
                  className={`hover:text-blue-800 ${
                    pathname === "/projects/projects02" ? "text-blue-800" : "text-black"
                  }`}
                  onClick={closeMobileMenu}
                >
                  projects02
                </Link>
              </div>
            )}

            <Link
              href="/productSupply"
              className={`hover:text-blue-800 ${
                pathname === "/productSupply" ? "text-blue-800" : "text-black"
              }`}
              onClick={closeMobileMenu}
            >
              Products & Supply
            </Link>

            <Link
              href="/contact"
              className="mt-4 text-center py-2 rounded-full text-white bg-linear-to-r from-blue-600 to-blue-800"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}