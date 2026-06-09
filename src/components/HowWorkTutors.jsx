import React from 'react';

const HowWorkTutors = () => {
    return (
        <section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        How It Works
      </h2>
      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Simple steps to start learning with us
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
          01
        </div>

        <h3 className="mt-5 text-xl font-semibold text-gray-800">
          Search Tutor
        </h3>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          Browse tutors by subject and availability.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xl">
          02
        </div>

        <h3 className="mt-5 text-xl font-semibold text-gray-800">
          Select Slot
        </h3>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          Choose your preferred day and time.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold text-xl">
          03
        </div>

        <h3 className="mt-5 text-xl font-semibold text-gray-800">
          Book Session
        </h3>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          Confirm booking with one click easily.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xl">
          04
        </div>

        <h3 className="mt-5 text-xl font-semibold text-gray-800">
          Start Learning
        </h3>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          Join your session and begin learning.
        </p>
      </div>
    </div>
  </div>
</section>
    );
};

export default HowWorkTutors;