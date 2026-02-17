"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const aboutMenu = [
  { label: "Know Us", href: "/about" },
  { label: "Our Evolution", href: "/about/evolution" },
  { label: "CSR Initiatives", href: "/about/csr" },
  { label: "Consumer Healthcare", href: "/about/consumer-healthcare" },
  { label: "Leadership Team", href: "/about/leadership" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-[#0E7490] cursor-pointer"
        >
          Eastern Healthcare
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-[#0E7490]" : ""
            } hover:text-[#0E7490]`}
          >
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 ${
                isActive("/about") ? "text-[#0E7490]" : ""
              } hover:text-[#0E7490]`}
            >
              About Us <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-3 w-64 overflow-hidden rounded-md bg-[#0E7490] text-white shadow-lg"
                >
                  {aboutMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-5 py-3 text-sm transition ${
                        isActive(item.href)
                          ? "bg-[#0B5C73]"
                          : "hover:bg-[#0B5C73]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            ["Operations", "/operations"],
            ["Products", "/products"],
            ["Technologies", "/technologies"],
            ["Investors", "/investors"],
            ["Careers", "/careers"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`${
                isActive(href) ? "text-[#0E7490]" : ""
              } hover:text-[#0E7490]`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`rounded-full border px-5 py-2 transition ${
              isActive("/contact")
                ? "bg-[#0E7490] text-white"
                : "border-[#0E7490] text-[#0E7490] hover:bg-[#0E7490] hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white"
            >
              {/* HEADER */}
              <div className="flex h-16 items-center justify-between border-b px-6">
                <span className="font-semibold text-[#0E7490]">
                  Eastern Healthcare
                </span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              {/* MENU */}
              <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium ${
                    isActive("/") ? "text-[#0E7490]" : ""
                  }`}
                >
                  Home
                </Link>

                {/* ABOUT ACCORDION */}
                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="flex w-full items-center justify-between font-medium"
                  >
                    <span
                      className={isActive("/about") ? "text-[#0E7490]" : ""}
                    >
                      About Us
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 ml-4 space-y-3 overflow-hidden text-sm"
                      >
                        {aboutMenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block ${
                              isActive(item.href)
                                ? "text-[#0E7490]"
                                : "text-gray-600"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {[
                  ["Operations", "/operations"],
                  ["Products", "/products"],
                  ["Technologies", "/technologies"],
                  ["Investors", "/investors"],
                  ["Careers", "/careers"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium ${
                      isActive(href) ? "text-[#0E7490]" : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="border-t p-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-md bg-[#0E7490] py-3 text-center font-medium text-white"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
