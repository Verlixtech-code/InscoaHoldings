"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
  };

  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/inscoaLogo.jpg"
              alt="PD Engineering"
              width={150}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10 text-white font-medium">
            <Link
              href="/"
              className={`transition hover:text-[#89CA29] ${
                pathname === "/" ? "text-[#89CA29]" : "text-white"
              }`}
            >
              {" "}
              Home
            </Link>

            <Link
              href="/aboutUs"
              className={`transition hover:text-[#89CA29] ${
                pathname === "/aboutUs" ? "text-[#89CA29]" : "text-white"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}

            <div className="relative group">
              <button
                className={`flex items-center cursor-pointer gap-1 transition ${
                  pathname.startsWith("/services")
                    ? "text-[#89CA29]"
                    : "text-white"
                }`}
              >
                Our Services
                <ChevronDown size={16} />
              </button>

              <div className="absolute -ml-4 left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="bg-black border border-white/10 rounded-xl p-4 w-48 shadow-lg">
                  <Link
                    href="/services/engineer"
                    className={`block py-2 hover:text-[#89CA29] ${
                      pathname === "/services/engineer"
                        ? "text-[#89CA29]"
                        : "text-white"
                    }`}
                  >
                    Engineering
                  </Link>

                  <Link
                    href="/services/academy"
                    className={`block py-2 hover:text-[#89CA29] ${
                      pathname === "/services/academy"
                        ? "text-[#89CA29]"
                        : "text-white"
                    }`}
                  >
                    Academy
                  </Link>

                  <Link
                    href="/services/energy-auditing"
                    className={`block py-2 hover:text-[#89CA29] ${
                      pathname === "/services/energy-auditing"
                        ? "text-[#89CA29]"
                        : "text-white"
                    }`}
                  >
                    Energy Auditing
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`transition hover:text-[#89CA29] ${pathname === "/projects" ? "text-[#89CA29]" : "text-white"}`}
            >
              Projects
            </Link>

            <Link
              href="/news"
              className={`transition hover:text-[#89CA29] ${pathname === "/news" ? "text-[#89CA29]" : "text-white"}`}
            >
              News & Events
            </Link>
          </nav>

          {/* Contact Button */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full text-white text-md font-semibold bg-gradient-to-r from-[#6CC1FF] to-[#89CA29] hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-4 text-white">
            <Link
              href="/"
              className={`hover:text-[#89CA29] ${pathname === "/" ? "text-[#89CA29]" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/aboutUs"
              className={`hover:text-[#89CA29] ${pathname === "/aboutUs" ? "text-[#89CA29]" : ""}`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services */}

            <button
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className={`flex items-center cursor-pointer justify-between hover:text-[#89CA29] ${
                pathname.startsWith("/services") ? "text-[#89CA29]" : ""
              }`}
            >
              Our Services
              <ChevronDown size={18} />
            </button>

            {mobileServiceOpen && (
              <div className="pl-4 flex flex-col gap-2 text-sm">
                <Link
                  href="/services/engineer"
                  className={`hover:text-[#89CA29] ${pathname === "/services/engineer" ? "text-[#89CA29]" : ""}`}
                  onClick={closeMobileMenu}
                >
                  Engineering
                </Link>

                <Link
                  href="/services/academy"
                  className={`hover:text-[#89CA29] ${pathname === "/services/academy" ? "text-[#89CA29]" : ""}`}
                  onClick={closeMobileMenu}
                >
                  Academy
                </Link>

                <Link
                  href="/services/energy-auditing"
                  className={`hover:text-[#89CA29] ${pathname === "/services/energy-auditing" ? "text-[#89CA29]" : ""}`}
                  onClick={closeMobileMenu}
                >
                  Energy Auditing
                </Link>
              </div>
            )}

            <Link
              href="/projects"
              className={`hover:text-[#89CA29] ${pathname === "/projects" ? "text-[#89CA29]" : ""}`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>

            <Link
              href="/news"
              className={`hover:text-[#89CA29] ${pathname === "/news" ? "text-[#89CA29]" : ""}`}
              onClick={closeMobileMenu}
            >
              News & Events
            </Link>

            <Link
              href="/contact"
              className="mt-4 text-center py-2 rounded-full bg-gradient-to-r from-blue-500 to-[#89CA29]"
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
