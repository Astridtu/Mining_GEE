"use client";
import HeroSection from "../components/HeroSection"
import InformationPopup from "../components/InformationPopUp"
import { useState } from 'react';
import Link from 'next/link';
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <HeroSection />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            "All the mineral information you need to know is here."
            </p>
            <p className="mt-6 text-lg text-gray-600">
            Mining is necessary to obtain materials that can't be grown or created artificially, such as metals, coal, oil shale, and gemstones. 
            The process can also involve extracting non-renewable resources like petroleum, natural gas, or water.
            </p>
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            Let's learn about our mining operations and cutting-edge technology!
          </h3>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Explore the various mining locations, the use of Google Earth Engine (GEE) for data surveillance, and the
            economic benefits derived from rich mineral resources.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
  {/* Box 1 */}
  <div
    className="relative group h-48 sm:h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    style={{ backgroundImage: `url('/information.jpg')` }}
    onClick={togglePopup}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
      <h3 className="text-lg sm:text-xl text-white font-semibold">Mining Information</h3>
      <p className="text-xs sm:text-sm text-gray-300 mt-2">Mongolia, a landlocked country in East Asia, is characterized by its diverse geological features and rich mineral resources..</p>
      <button className="mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none">
        Learn More
      </button>
    </div>
  </div>

  {/* Box 2 */}
  <div
    className="relative group h-48 sm:h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    style={{ backgroundImage: `url('/maps.jpg')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
      <h3 className="text-lg sm:text-xl text-white font-semibold">Mining Location Map</h3>
      <p className="text-xs sm:text-sm text-gray-300 mt-2">Showing sorted mining locations in Asia especially in Mongolia.</p>
      <Link href="/mining-location-map">
      <button className="mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none">
        Learn More
      </button>
      </Link>
    </div>
  </div>

  {/* Box 3 */}
  <a
  href="https://frontend-5egy.onrender.com/index.html"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
  >
  <div
    className="relative group h-48 sm:h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    style={{ backgroundImage: `url('/GeeMining.jpg')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
      <h3 className="text-lg sm:text-xl text-white font-semibold">Using GEE to conduct surveillance</h3>
      <p className="text-xs sm:text-sm text-gray-300 mt-2">Geemap is a Python package that allows users to interactively analyze and visualize geospatial data from Google Earth Engine (GEE).</p>
      <button className="mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none">
        Learn More
      </button>
    </div>
  </div>
  </a>

  {/* Box 4 */}
  <div
    className="relative group h-48 sm:h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    style={{ backgroundImage: `url('/Finance.jpg')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
      <h3 className="text-lg sm:text-xl text-white font-semibold">Mining economic benefit</h3>
      <p className="text-xs sm:text-sm text-gray-300 mt-2">Economic profit data for various profitable minerals.</p>
      <Link href="/mining-economic-benefit">
      
      <button className="mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none">
        Learn More
      </button>
      
      </Link>
    </div>
  </div>
</div>
       {/* Popup */}
      <InformationPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
};

export default Page;
