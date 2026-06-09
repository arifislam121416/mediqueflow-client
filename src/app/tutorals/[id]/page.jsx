import { auth } from "@/lib/auth";
import { convertServerPatchToFullTree } from "next/dist/client/components/segment-cache/navigation";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const TutorialApiDetails =  async (id,token) => {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/tutorals/${id}`,
  {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

 
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutorals/${id}`, {
//   cache: "no-store",
// },{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });

  const data = await res.json();
  return data || {};
};

const TutorialsDetailsPage = async ({ params }) => {

    const {token} = await auth.api.getToken({
      headers: await headers() 
  });
  console.log(token,"Token ashse")
  const { id } = await params;

  const tutorial = await TutorialApiDetails(id,token);

  const {
    name,
    photo,
    subject,
    institution,
    availability,
    hourlyFee,
    totalSlot,
    sessionStartDate,
    experience,
    location,
    teachingMode,
    createdAt,
tutorEmail
  } = tutorial;

  return (
     <div className="min-h-screen bg-gray-100 py-10  px-4">

      <div className="max-w-6xl p-4 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">

    
        <div className="relative w-full h-[500px]">

          <Image
            src={photo || "https://via.placeholder.com/800x500"}
            alt={name || "tutorial"}
            fill
            className="object-cover rounded-xl"
          />
        </div>

       
        <div className="p-8 space-y-6">

     
          <div className="flex gap-3 flex-wrap">

            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
              {subject}
            </span>

            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
              {teachingMode}
            </span>

            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
              {availability}
            </span>
          </div>

    
          <h1 className="text-4xl font-bold text-gray-800">
            {name}
          </h1>

         
          <div className="space-y-4 text-gray-700">

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Institution
              </p>

              <p>
                {institution}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Experience
              </p>

              <p>
                {experience}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Location
              </p>

              <p>
                {location}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Hourly Fee
              </p>

              <p className="text-blue-600 font-bold">
                ${hourlyFee}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Total Slots
              </p>

              <p>
                {totalSlot}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Session Start
              </p>

              <p>
                {sessionStartDate}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Tutor Email
              </p>

              <p className="text-sm">
                {tutorEmail}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">
                Created At
              </p>

              <p>
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* slot condition */}
          {
            totalSlot === 0 ? (
              <p className="text-red-600 font-bold text-lg">
                This session is fully booked.
                You can’t join at the moment.
              </p>
            ) : (
             <Link href="/register">
              <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-2xl text-lg font-semibold">
                Book Tutorial
              </button>
             </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TutorialsDetailsPage;