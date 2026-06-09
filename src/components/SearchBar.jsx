"use client";

import { Button, Form } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    // search
    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    // start date
    if (startDate) {
      params.set("startDate", startDate);
    } else {
      params.delete("startDate");
    }

    // end date
    if (endDate) {
      params.set("endDate", endDate);
    } else {
      params.delete("endDate");
    }

    router.push(`/tutorals?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
    router.push("/tutorals");
  };

  return (
    <Form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto">
      
      {/* GRID INPUTS */}
      <div className="bg-white shadow-md rounded-3xl p-4 md:p-6 mb-6 border border-gray-100">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* SEARCH */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tutorials..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* START DATE */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* END DATE */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">

          {/* SEARCH BUTTON */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            Search
          </Button>

          {/* RESET */}
          <Button
            type="button"
            onClick={handleReset}
            className="w-full px-6 py-3 rounded-2xl border border-gray-300 text-center font-medium hover:bg-gray-100 transition"
          >
            Reset Filter
          </Button>

        </div>
      </div>
    </Form>
  );
}