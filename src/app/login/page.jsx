"use client";

import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import toast from "react-hot-toast";
import Image from "next/image";
import { Button, Form } from "@heroui/react";

export default  function LoginPage() {
 

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  

  const handleLogin = async (e) => {


    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const loginData = Object.fromEntries(
      formData.entries()
    );

    const { error } =
      await authClient.signIn.email({

        email: loginData.email,

        password: loginData.password,

      });

    setLoading(false);


  
    if (error) {

      toast.error(
        error.message || "Login Failed"
      );

      return;
    }

    toast.success("Login Successful");

    // router.push("/dashboard");

      const {data: tokenData}   = await authClient.token()
     console.log("token Data ashse", tokenData);
  };
 


  const handleGoogleLogin = async () => {

    await authClient.signIn.social({

     provider: "google",
     
      callbackURL: "/dashboard",

    });

   
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">

     
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-white/80 mb-6 text-sm">
          Login to continue your learning journey
        </p>

   
        <Form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <div>

            <p className="text-white font-semibold mb-1">
              Email
            </p>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />

          </div>

          <div>

            <p className="text-white font-semibold mb-1">
              Password
            </p>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />

          </div>

         
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            {
              loading
                ? "Logging in..."
                : "Login"
            }
          </Button>

        </Form>

  
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-white/40"></div>

          <p className="text-white text-sm">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-white/40"></div>

        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-3"
        >

          <Image
          width={40}
          height={40}
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="google"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        <p className="text-center text-white mt-6 text-sm">

          Don&apos;t have an account?

          <Link
            href="/register"
            className="ml-1 underline font-semibold"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}