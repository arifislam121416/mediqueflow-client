"use client";

import Image from "next/image";

const BokingData = ({ booking }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <div className="relative w-full h-52">
        <Image
          src={booking.photo}
          alt={booking.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold">
          {booking.name}
        </h2>

        <p className="text-gray-600">
          📚 Subject: {booking.subject}
        </p>

        <p className="text-gray-600">
          🏫 Institution: {booking.institution}
        </p>

        <p className="text-gray-600">
          💼 Experience: {booking.experience}
        </p>

        <p className="text-gray-600">
          🌍 Location: {booking.location}
        </p>

        <p className="text-gray-600">
          💻 Mode: {booking.teachingMode}
        </p>

        <p className="text-gray-600">
          💰 Fee: ${booking.hourlyFee}/hour
        </p>

        <p className="text-gray-600">
          🎯 Slots: {booking.totalSlot}
        </p>

        <p className="text-gray-600">
          📅 Start Date: {booking.sessionStartDate}
        </p>

        <p
          className={`font-semibold ${
            booking.availability === "Available"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {booking.availability}
        </p>
      </div>
    </div>
  );
};

export default BokingData;