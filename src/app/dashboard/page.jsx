import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Image from "next/image";


export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-10">

     
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <Image
          src={session.user.image || "https://kommodo.ai/i/T5Hel6IgXcOOJ4XdcrHr"}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
        
        <h1 className="text-3xl font-bold mt-4">
          Welcome, {session.user.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {session.user.email}
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Total Tutorials
          </h2>
          <p className="text-4xl font-bold mt-3 text-blue-600">
            12
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            My Bookings
          </h2>
          <p className="text-4xl font-bold mt-3 text-green-600">
            5
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Enrolled Tutorials
          </h2>
          <p className="text-4xl font-bold mt-3 text-purple-600">
            3
          </p>
        </div>

      </div>

    
      <div className="bg-white shadow rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li>✅ Booked React Tutorial</li>
          <li>✅ Enrolled in JavaScript Basics</li>
          <li>✅ Completed HTML Fundamentals</li>
        </ul>
      </div>

    </div>
  );
}