import TutorialCard from "@/components/TutorialCard";
import { tutorialApi } from "@/data";
import SearchBar from "@/components/SearchBar";

const TutorialPage = async ({ searchParams }) => {
  const tutorials = await tutorialApi();

  const search = searchParams?.search?.toLowerCase() || "";
  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";

  // 🔥 FIXED FILTER LOGIC
  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchSearch =
      tutorial?.name?.toLowerCase().includes(search) ||
      tutorial?.subject?.toLowerCase().includes(search);

    const tutorialDate = tutorial?.sessionStartDate
      ? new Date(tutorial.sessionStartDate)
      : null;

    const matchStartDate = startDate
      ? tutorialDate >= new Date(startDate)
      : true;

    const matchEndDate = endDate
      ? tutorialDate <= new Date(endDate)
      : true;

    return matchSearch && matchStartDate && matchEndDate;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          All Tutorials
        </h1>
        <p className="text-gray-500 mt-2">
          Browse tutorials with smart search and filters
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-10">
        <SearchBar />
      </div>

      {/* RESULTS INFO */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredTutorials.length} results
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredTutorials.length > 0 ? (
          filteredTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="hover:-translate-y-1 transition duration-300"
            >
              <TutorialCard tutorial={tutorial} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No tutorials found 😢
          </div>
        )}

      </div>
    </div>
  );
};

export default TutorialPage;

// import TutorialCard from "@/components/TutorialCard";
// import { tutorialApi } from "@/data";
// import React from "react";
// import { Search } from "lucide-react";

// import { Button, Form } from "@heroui/react";
// import SearchBar from "@/components/SearchBar";

// const TutorialPage = async ({ searchParams }) => {
//   const tutorials = await tutorialApi();

//   const search = searchParams?.search?.toLowerCase() || "";
//   const startDate = searchParams?.startDate || "";
//   const endDate = searchParams?.endDate || "";

//   const filteredTutorials = tutorials;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold">
//             All Tutorials
//           </h1>
//           <p className="text-gray-500 mt-2 text-sm md:text-base">
//             Browse tutorials with smart search and date filtering.
//           </p>
//         </div>
//       </div>

//     <div className="m-10">
//       <SearchBar></SearchBar>
//     </div>
//       {/* <Form className="bg-white shadow-md rounded-3xl p-4 md:p-6 mb-10 border border-gray-100">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
//           <div className="relative md:col-span-2">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

//             <input
//               type="text"
//               name="search"
//               placeholder="Search tutorials..."
//               defaultValue={search}
//               className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-black"
//             />
//             <SearchBar/>
//           </div>

        
//           <div>
//             <input
//               type="date"
//               name="startDate"
//               defaultValue={startDate}
//               className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

        
//           <div>
//             <input
//               type="date"
//               name="endDate"
//               defaultValue={endDate}
//               className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3 mt-5">
//           <Button
//             type="submit"
//             className=" bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
//           >
            
//           </Button>

//           <a
//             href="/tutorals"
//             className="px-6 py-3 rounded-2xl border border-gray-300 text-center font-medium hover:bg-gray-100 transition"
//           >
//             Reset Filter
//           </a>
//         </div>
//       </Form> */}

    
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredTutorials.map((tutorial) => (
//             <div
//               key={tutorial._id}
//               className="hover:-translate-y-1 transition duration-300"
//             >
//               <TutorialCard tutorial={tutorial} />
//             </div>
//           ))}
//         </div>
//     </div>
//   );
// };

// export default TutorialPage;
