"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddTutorialsPage = () => {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleAddTutorial = async (e) => {

    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const tutorialData = Object.fromEntries(formData.entries());

    tutorialData.hourlyFee = Number(tutorialData.hourlyFee);
    tutorialData.totalSlot = Number(tutorialData.totalSlot);

    tutorialData.createdAt = new Date();

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/addtutorals`,{
  cache: "no-store",
},
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tutorialData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {

        toast.success("Tutorial Added Successfully");

        form.reset();

        router.push("/tutorals");

      } else {
        toast.error("Failed To Add Tutorial");
      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">

        {/* heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Add New Tutorial
          </h1>

          <p className="text-gray-500 mt-2">
            Create and publish your tutorial session
          </p>

        </div>

        {/* form */}
        <form
          onSubmit={handleAddTutorial}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

         
          <div>
            <label className="font-semibold text-gray-700">
              Tutor Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter tutor name"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tutor Email */}
          <div>
            <label className="font-semibold text-gray-700">
              Tutor Email
            </label>

            <input
              type="email"
              name="tutorEmail"
              placeholder="Enter tutor email"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="font-semibold text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter image URL"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="font-semibold text-gray-700">
              Subject
            </label>

            <select
              name="subject"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="English">English</option>
              <option value="ICT">ICT</option>
              <option value="Biology">Biology</option>
            </select>
          </div>

          {/* Hourly Fee */}
          <div>
            <label className="font-semibold text-gray-700">
              Hourly Fee
            </label>

            <input
              type="number"
              name="hourlyFee"
              placeholder="Enter fee"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Total Slot */}
          <div>
            <label className="font-semibold text-gray-700">
              Total Slot
            </label>

            <input
              type="number"
              name="totalSlot"
              placeholder="Enter available slots"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Session Date */}
          <div>
            <label className="font-semibold text-gray-700">
              Session Start Date
            </label>

            <input
              type="date"
              name="sessionStartDate"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="font-semibold text-gray-700">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              placeholder="e.g. 3 Years"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Teaching Mode */}
          <div>
            <label className="font-semibold text-gray-700">
              Teaching Mode
            </label>

            <select
              name="teachingMode"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Availability */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700">
              Availability
            </label>

            <select
              name="availability"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-bold text-lg"
            >
              {loading ? "Adding Tutorial..." : "Add Tutorial"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTutorialsPage;