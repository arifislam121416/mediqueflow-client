"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    title: "Learn Smarter with Expert Tutors",
    desc: "Book verified tutors and improve your skills with personalized learning sessions.",
    btn: "Find Tutors",
    link: "/tutorials",
    bg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    title: "One-to-One Online Learning",
    desc: "Join live sessions and get real-time guidance from professional educators.",
    btn: "Explore Sessions",
    link: "/tutorials",
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Build Your Future with Knowledge",
    desc: "Track your learning progress and book sessions anytime, anywhere.",
    btn: "Start Learning",
    link: "/tutorials",
    bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function HeroPage() {
  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
        
          <Image
          width={1200}
          height={800}
            src={slide.bg}
            alt="banner"
            className="w-full h-full object-cover"
          />

         
          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="max-w-7xl mx-auto text-center px-6 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-gray-200 text-sm md:text-lg max-w-xl mb-6">
                {slide.desc}
              </p>

              <Link
                href="/tutorals"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
              >
                {slide.btn}
              </Link>
            </div>
          </div>
        </div>
      ))}

    
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}