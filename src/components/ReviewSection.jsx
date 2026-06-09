"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "HSC Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    review:
      "MediQueue made booking tutors super easy. I found an amazing Physics tutor within minutes!",
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 4,
    review:
      "The session booking system is smooth and the tutors are very professional and friendly.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "SSC Candidate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    review:
      "I love the clean UI and instant booking feature. It saved me a lot of time.",
  },
];

export default function ReviewSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Student Reviews
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Thousands of students trust MediQueue to connect with the best tutors.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              onMouseEnter={() => setActive(index)}
              className={`bg-white dark:bg-gray-900 rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                active === index
                  ? "border-blue-500 shadow-2xl"
                  : "border-gray-200 dark:border-gray-700 shadow-lg"
              }`}
            >
              {/* User Info */}
              <div className="flex items-center gap-4">
                <Image
                width={300}
                height={200}
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Students
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">300+</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Expert Tutors
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Sessions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">4.9★</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}