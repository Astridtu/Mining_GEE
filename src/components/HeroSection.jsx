"use client"

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession(); // Get user session
  const router = useRouter();

  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Geeday.jpg')`, // Replace with your image URL
        }}
      />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Login / Logout Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
                onClick={() => signOut()}
                className="text-sm font-semibold text-white bg-red-600 px-3 py-2 rounded-md"
              >
                Log out
              </button>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center text-white">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Let's explore mining with Satellite
          </h1>
          <p className="mt-8 text-lg sm:text-xl">
            You can find what you expected. Informations, Maps, GEE, especially in Mongolian maps.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#main-section"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;