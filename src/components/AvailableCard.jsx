import Image from "next/image";
import Link from "next/link";

const AvailableCard = ({ tutorial }) => {

  const {
    _id,
    name,
    photo,
    subject,
    availability,
    hourlyFee,
    totalSlot,
    sessionStartDate,
    teachingMode,
    location,
    experience,
  } = tutorial;

  return (

    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <Image
          width={500}
          height={350}
          src={photo}
          alt={name}
          className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        
        <span
          className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs md:text-sm font-bold text-white shadow-lg ${
            availability === "Available"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {availability}
        </span>

        <div className="absolute bottom-4 left-4">

          <span className="bg-white/90 backdrop-blur-md text-blue-700 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            {subject}
          </span>

        </div>
      </div>

     
      <div className="p-5 md:p-6 space-y-4">

     
        <div>

          <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
            {name}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Professional Tutor
          </p>

        </div>

       
        <div className="grid grid-cols-2 gap-3">

          <div className="bg-blue-50 rounded-2xl p-3">

            <p className="text-xs text-gray-500">
              Hourly Fee
            </p>

            <h3 className="text-lg font-bold text-blue-700">
              ${hourlyFee}
            </h3>

          </div>

          <div className="bg-green-50 rounded-2xl p-3">

            <p className="text-xs text-gray-500">
              Available Slots
            </p>

            <h3 className="text-lg font-bold text-green-700">
              {totalSlot}
            </h3>

          </div>

        </div>

     
        <div className="space-y-2 text-sm text-gray-600">

          <div className="flex items-center justify-between">

            <span className="font-medium">
              Session Start
            </span>

            <span>
              {sessionStartDate}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="font-medium">
              Mode
            </span>

            <span>
              {teachingMode}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="font-medium">
              Experience
            </span>

            <span>
              {experience}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="font-medium">
              Location
            </span>

            <span className="truncate max-w-[150px]">
              {location}
            </span>

          </div>

        </div>

       
        <Link href={`/tutorals/${_id}`}>

          <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-300">

            Book Tutorial Session

          </button>

        </Link>

      </div>
    </div>
  );
};

export default AvailableCard;