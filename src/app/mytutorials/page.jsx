"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyTutorials = () => {
  const { data: session } = authClient.useSession();
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchMyTutorials = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mybookings?email=${session.user.email}`,{
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
        );

        const data = await res.json();

        setTutorials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyTutorials();
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        My Booked Tutorials
      </h1>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-500">
          No tutorials booked yet
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {tutorials.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              {/* image */}
              <div className="relative w-full h-48">
                <Image
                  src={tutor.photo}
                  alt={tutor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="p-5 space-y-2">

                <h2 className="text-xl font-bold">
                  {tutor.name}
                </h2>

                <p className="text-sm text-gray-500">
                  Subject: {tutor.subject}
                </p>

                <p className="text-sm">
                  Slot: {tutor.totalSlot}
                </p>

                <p className="text-sm text-green-600 font-semibold">
                  Status: Booked
                </p>

                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default MyTutorials;