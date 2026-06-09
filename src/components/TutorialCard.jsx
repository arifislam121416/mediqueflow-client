import Image from "next/image";
import Link from "next/link";

export default function TutorialCard({tutorial}) {
  const {
    _id,
    name,
    photo,
    subject,
    availability,
    hourlyFee,
    totalSlot,
    sessionStartDate,
  } = tutorial;

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <Image
        width={300}
        height={200}
          src={photo}
          alt={name}
          className="w-full h-64 object-cover"
        />

        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold text-white ${
            availability === "Available"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {availability}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-blue-600 font-medium">{subject} Tutor</p>
        </div>

       <div>
              <p>
            <span className="font-semibold text-gray-800">
              Session Starts:
            </span>{" "}
            {sessionStartDate}
          </p>
            
          </div>
           <div>
           <h3 className=" font-semibold text-gray-800">
              Available Slots: {totalSlot}
            </h3>
            
          </div>

        <div className="space-y-2 text-sm text-gray-600">
         <h3 className="text-xl font-bold text-blue-700">
              Hourly Fee: ${hourlyFee}
            </h3>
        </div>

       <Link href={`/tutorals/${_id}`}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-xl">
          Book Tutorial Session
        </button>
       </Link>
      </div>
    </div>
  );
}
