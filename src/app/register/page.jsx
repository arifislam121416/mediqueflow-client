"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button, Form } from "@heroui/react";

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

   
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }

   
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    setLoading(true);

    setPasswordError("");

    const formData = new FormData(e.currentTarget);

    const registerData = Object.fromEntries(formData.entries());

  
    const passwordValidationError = validatePassword(
      registerData.password
    );

    if (passwordValidationError) {

      setPasswordError(passwordValidationError);

      toast.error(passwordValidationError);

      setLoading(false);

      return;
    }

   
    const { data, error } = await authClient.signUp.email({

      name: registerData.name,

      email: registerData.email,

      password: registerData.password,

      image: registerData.photoURL,

    });

    setLoading(false);

    if (error) {

      toast.error(error.message || "Registration Failed");

      return;
    }

   
    toast.success("Registration Successful");

    router.push("/");
  };


  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message);
  }

    // await authClient.signIn.social({

    //   provider: "google",

    //   callbackURL: "/",

    // });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-white/80 mb-6 text-sm">
          Join our tutoring platform and start learning
        </p>

      
        <Form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <div>

            <p className="font-semibold text-white mb-1">
              Your Name
            </p>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />
          </div>

         
          <div>

            <p className="font-semibold text-white mb-1">
              Your Email
            </p>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />
          </div>

        
          <div>

            <p className="font-semibold text-white mb-1">
              Photo URL
            </p>

            <input
              name="photoURL"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />
          </div>

        
          <div>

            <p className="font-semibold text-white mb-1">
              Your Password
            </p>

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-white/90 outline-none"
              required
            />

            <div className="mt-2 text-sm text-white/90 space-y-1">

              <p>
                • Must contain one uppercase letter
              </p>

              <p>
                • Must contain one lowercase letter
              </p>

              <p>
                • Minimum 6 characters
              </p>

            </div>

            {
              passwordError && (
                <p className="text-red-200 mt-2 text-sm">
                  {passwordError}
                </p>
              )
            }

          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            {
              loading
                ? "Creating Account..."
                : "Register"
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
          width={300}
          height={200}
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="google"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        
        <p className="text-center text-white mt-6 text-sm">

          Already have an account?

          <Link
            href="/login"
            className="ml-1 underline font-semibold"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}