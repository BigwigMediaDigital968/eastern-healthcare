"use client";

import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--secondary) text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-(--primary)">
            About Eastern Healthcare
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Eastern Healthcare is a trusted pharmaceutical manufacturing partner
            delivering innovation, quality, and regulatory excellence across
            diverse healthcare formulations.
          </p>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="text-lg font-semibold text-(--primary)">
            Our Offerings
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#" className="footer-link">
                Pharmaceuticals
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                API
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Nutraceutical
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Cosmetics & Derma
              </Link>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-lg font-semibold text-(--primary)">
            Our Expertise
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#" className="footer-link">
                Manufacturing
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Quality Assurance
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Innovation
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Regulatory
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                R&D
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-(--primary)">
            Useful Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Data Protection
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-(--primary)/20"></div>

      {/* Contact & Social Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Contact */}
        <div className="text-sm text-center md:text-left space-y-2">
          <p>Plot No. 131–133, Industrial Area Phase-I Delhi – 110083, India</p>
          <p>enquiry@easternhealthcare.com | +91 9999012080</p>
        </div>

        {/* Social */}
        <div className="flex md:justify-end items-center gap-5">
          <Link
            href="#"
            className="text-(--primary) hover:text-(--accent) transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="#"
            className="text-(--primary) hover:text-(--accent) transition"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="#"
            className="text-(--primary) hover:text-(--accent) transition"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            className="text-(--primary) hover:text-(--accent) transition"
          >
            <Youtube size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-(--primary) text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Eastern Healthcare. All Rights Reserved.
      </div>
    </footer>
  );
}
