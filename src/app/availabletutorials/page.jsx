"use client";

import AvailableCard from "@/components/AvailableCard";
import { AvailabletutorialApi } from "@/data";
import { useEffect, useState } from "react";

const AvailableTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const tutorialApi = async () => {
      try {
        const data = await AvailabletutorialApi();

        console.log(data);

        setTutorials(data);
      } catch (error) {
        console.log("Error fetching tutorials:", error);
        setError("Failed to load tutorials");
      } finally {
        setLoading(false);
      }
    };

    tutorialApi();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-6">
        Available Tutorials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <AvailableCard
            key={tutorial._id}
            tutorial={tutorial}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableTutorials;