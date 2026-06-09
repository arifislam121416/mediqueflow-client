"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin, LiaTwitter } from "react-icons/lia";

export default function FooterPage() {
  const learningLinks = [
    {
      title: "Find Tutors",
      href: "/tutorals",
    },
    {
      title: "Book Session",
      href: "/tutorials",
    },
    {
      title: "Become a Tutor",
      href: "/add-tutorial",
    },
    {
      title: "My Sessions",
      href: "/my-booked-sessions",
    },
  ];

  const supportLinks = [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      href: "/terms",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook size={20} />,
      href: "https://web.facebook.com/profile.php?",
    },
    {
      icon: <BsInstagram size={20} />,
      href: "https://instagram.com",
    },
    {
      icon: <LiaLinkedin size={20} />,
      href: "https://linkedin.com",
    },
    {
      icon: <LiaTwitter size={20} />,
      href: "https://x.com",
    },
  ];

  return (
    <footer className="bg-[#000000] text-white mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-blue-500">
              MediqueFlow
            </Link>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Simplifying tutor booking and online learning with smart
              scheduling, smooth session management, and trusted tutors.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Learning Services */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Learning Services
            </h2>

            <div className="space-y-3">
              {learningLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-semibold mb-5">Support</h2>

            <div className="space-y-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-5">Contact Info</h2>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1" size={18} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+880 01754 872785</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>arifislam54872785@gmail.com</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition duration-300 w-full sm:w-auto">
                Start Learning Today
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} MediqueFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-blue-400">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-blue-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
