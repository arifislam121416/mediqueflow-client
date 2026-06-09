"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef(null);

  const publicMenus = [
    { name: "Home", path: "/" },
    { name: "Tutors", path: "/tutorals" },
    { name: "About", path: "/about" },
  ];

  const privateMenus = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Tutorials", path: "/mytutorials" },
    { name: "Add Tutor", path: "/addtutorals" },
  ];

  const isActive = (path) => pathname === path;

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  // close dropdown outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // fix hydration issue for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          MediqueFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {[...publicMenus, ...(user ? privateMenus : [])].map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className={`transition hover:text-blue-500 ${
                isActive(menu.path)
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : ""
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">

          {/* Theme Button */}
          <Button
            isIconOnly
            variant="bordered"
            onPress={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>

          {/* Auth */}
          {!isPending && !user ? (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="border border-gray-400 dark:border-white px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white dark:text-white hover:text-black"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative" ref={ref}>

              {/* User Button */}
              <Button
                onPress={() => setDropdown(!dropdown)}
                className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 px-3 py-2 rounded-2xl"
              >
                <Image
                  src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="text-left">
                  <h3 className="text-sm font-semibold">
                    {user?.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
              </Button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden">

                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold">{user?.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {user?.email}
                    </p>
                  </div>

                  {privateMenus.map((menu) => (
                    <Link
                      key={menu.path}
                      href={menu.path}
                      onClick={() => setDropdown(false)}
                      className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                    >
                      {menu.name}
                    </Link>
                  ))}

                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <Button
          isIconOnly
          className="md:hidden"
          onPress={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </Button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 pb-4">

          {[...publicMenus, ...(user ? privateMenus : [])].map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-xl ${
                isActive(menu.path)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {menu.name}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-2">

            <Button
              onPress={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="w-full border rounded-xl"
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="bg-blue-500 text-white text-center py-2 rounded-xl"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="border text-center py-2 rounded-xl"
                >
                  Register
                </Link>
              </>
            ) : (
              <Button
                onPress={handleSignOut}
                className="bg-red-500 text-white py-2 rounded-xl"
              >
                Logout
              </Button>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}


// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   usePathname,
//   useRouter,
// } from "next/navigation";

// import {
//   signOut,
//   useSession,
 
// } from "@/lib/auth-client";
// import { useTheme } from "next-themes";
// import { Button } from "@heroui/react";

// export default function Navbar() {
//  const { theme, setTheme } = useTheme();
// const [mounted, setMounted] = useState(false);
//   const router = useRouter();

//   const pathname = usePathname();

//   const { data: session,isPending } = useSession();

//   const user = session?.user;

//   const [open, setOpen] = useState(false);

//   const [dropdown, setDropdown] =
//     useState(false);

//   const ref = useRef();

//   const publicMenus = [
//     { name: "Home", path: "/" },
//     { name: "Tutors", path: "/tutorals" },
//     { name: "About", path: "/about" }
//   ];

//   const privateMenus = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "My Tutorials", path: "/mytutorials" },
//     { name: "Add Tutor", path: "/addtutorals" },
//   ];

//   const isActive = (path) =>
//     pathname === path;

  
//   const handleSignOut = async () => {

//     await signOut();

//     router.push("/");

//   };

 
//   useEffect(() => {

//     const handler = (e) => {

//       if (
//         ref.current &&
//         !ref.current.contains(e.target)
//       ) {
//         setDropdown(false);
//       }
//     };

//     document.addEventListener(
//       "mousedown",
//       handler
//     );

//     return () =>
//       document.removeEventListener(
//         "mousedown",
//         handler
//       );

//   }, []);
 

// useEffect(() => {
//   setMounted(true);
// }, []);

// if (!mounted) return null;

//   return (
//     <nav className="sticky top-0 z-50 bg-white dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 text-black dark:text-white">

//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-400"
//         >
//           MediqueFlow
//         </Link>

       
//         <div className="hidden md:flex items-center gap-6">

//           {[
//             ...publicMenus,
//             ...( user ? privateMenus : []),
//           ].map((menu) => (
//             <Link
//               key={menu.path}
//               href={menu.path}
//               className={`transition hover:text-blue-400 ${
//                 isActive(menu.path)
//                   ? "text-blue-400 border-b-2 border-blue-400 pb-1"
//                   : ""
//               }`}
//             >
//               {menu.name}
//             </Link>
//           ))}

//         </div>

//         <div className="hidden md:flex items-center">
//    <Button
//   onClick={() =>
//     setTheme(theme === "dark" ? "light" : "dark")
//   }
//   className="mr-4 p-2 rounded-lg border"
// >
//   {theme === "dark" ? "☀️" : "🌙"}
// </Button>
//           {!isPending && !user ? (
         

//             <div className="flex gap-3">

//               <Link
//                 href="/login"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-xl
//              hover:bg-blue-600
//              dark:bg-blue-700 dark:hover:bg-blue-800"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="border border-gray-400 dark:border-white
//              px-4 py-2 rounded-xl
//              text-black dark:text-white
//              hover:bg-gray-100 dark:hover:bg-white
//              hover:text-black"
//               >
//                 Register
//               </Link>

//             </div>

//           ) : (

//             <div
//               className="relative"
//               ref={ref}
//             >

       
//               <Button
//                 onClick={() =>
//                   setDropdown(!dropdown)
//                 }
//                 className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 transition px-3 py-2 rounded-2xl"
//               >

//                <Image
//   src={
//     user?.image ||
//     "https://i.ibb.co/4pDNDk1/avatar.png"
//   }
//   alt="avatar"
// width={40}
// height={40}
//   className="rounded-full object-cover"
// />

//                 <div className="text-left">

//                   <h3 className="text-sm font-semibold">
//                     {user?.name}
//                   </h3>

//                   <p className="text-xs text-gray-600 dark:text-gray-400">
//                     {user?.email}
//                   </p>

//                 </div>

//               </Button>

          
//               {dropdown && (

//                 <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden">

//                   <div className="p-4 border-b border-gray-700">

//                     <h3 className="font-semibold">
//                       {user?.name}
//                     </h3>

//                     <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
//                       {user?.email}
//                     </p>

//                   </div>

//                   <div className="flex flex-col">

//                     {privateMenus.map((menu) => (

//                       <Link
//                         key={menu.path}
//                         href={menu.path}
//                         onClick={() =>
//                           setDropdown(false)
//                         }
//                         className="px-4 py-3 hover:bg-gray-800 transition text-sm"
//                       >
//                         {menu.name}
//                       </Link>

//                     ))}

//                     <Button
//                       onClick={handleSignOut}
//                       className="text-left px-4 py-3 text-red-400 hover:bg-gray-800 transition"
//                     >
//                       Logout
//                     </Button>

//                   </div>

//                 </div>

//               )}

//             </div>

//           )}

//         </div>

      
//         <Button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-3xl"
//         >
//           {open ? "✕" : "☰"}
//         </Button>

//       </div>

//       {open && (

//         <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 pb-4">

//           <div className="flex flex-col gap-2 pt-3">

//             {[
//               ...publicMenus,
//               ...(user ? privateMenus : []),
//             ].map((menu) => (

//               <Link
//                 key={menu.path}
//                 href={menu.path}
//                 onClick={() => setOpen(false)}
//                 className={`px-3 py-2 rounded-xl ${
//                   isActive(menu.path)
//                     ? "bg-blue-500"
//                     : "hover:bg-gray-800"
//                 }`}
//               >
//                 {menu.name}
//               </Link>

//             ))}

//           </div>

//           {!isPending && !user ? (

//             <div className="flex gap-3 mt-4">
// <Button
//   onClick={() =>
//     setTheme(theme === "dark" ? "light" : "dark")
//   }
//   className="w-full py-2 border rounded-xl mt-3"
// >
//   {theme === "dark"
//     ? "☀️ Light Mode"
//     : "🌙 Dark Mode"}
// </Button>
//               <Link
//                 href="/login"
//                 className="bg-blue-500 w-full py-2 rounded-xl text-center"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="border border-white w-full py-2 rounded-xl text-center"
//               >
//                 Register
//               </Link>

//             </div>

//           ) : (

//             <div className="mt-4 space-y-3">

//               <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 p-3 rounded-2xl">

//                  <Image
//   src={
//     user?.image ||
//     "https://i.ibb.co/4pDNDk1/avatar.png"
//   }
//   alt="avatar"
// width={40}
// height={40}
//   className="rounded-full object-cover"
// />

//                 <div>

//                   <h3 className="font-semibold">
//                     {user?.name}
//                   </h3>

//                   <p className="text-xs text-gray-600 dark:text-gray-400">
//                     {user?.email}
//                   </p>

//                 </div>

//               </div>

//               <Button
//                 onClick={handleSignOut}
//                 className="bg-red-500 w-full py-2 rounded-xl"
//               >
//                 Logout
//               </Button>

//             </div>

//           )}

//         </div>

//       )}

//     </nav>
//   );
// }