"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession(); // Get session status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else if (res?.url) {
      router.push(res.url); // Redirect to dashboard or home
    }
  };

  // ✅ If user is logged in, show success message
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-green-500">Successfully Logged In</h2>
        <p>Welcome, {session.user?.name || "User"} 🎉</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => router.push("/")} // Change to your dashboard page
        >
          Go for Mining!
        </button>
      </div>
    );
  }

  return (
    <section className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/Geeday.jpg')` }}
      />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sign in</h1>
            
            {error && <p className="text-sm text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 rounded-lg px-5 py-2.5"
              >
                Sign in
              </button>

              <button
                onClick={() => signIn("google")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5"
              >
                Login with Google
              </button>

              <button
                onClick={() => signIn("github")}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-5 py-2.5"
              >
                Login with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;