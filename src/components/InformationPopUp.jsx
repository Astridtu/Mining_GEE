import React from "react";

const InformationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if the popup is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-6 relative max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/remote_sensing.jpg" // Replace with your image URL
              alt="Mining Information"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">Mining Information</h2>
            <p className="mt-4 text-gray-600">
              Mongolia is home to diverse geological formations and rich mineral resources. The mining industry
              contributes significantly to the nation's GDP, offering valuable resources like coal, copper, and gold.
            </p>
            <p className="mt-4 text-gray-600">
               Learn more about how Mongolia is leveraging its mineral wealth while preserving its unique environment.
               We can see Mongolia's rich mining area from our website Map section.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">What is Satelite</h2>
            <p className="mt-4 text-gray-600">
               Modern technologies, including satellite imagery and geospatial data analytics, are employed to ensure
               sustainable extraction and minimize environmental impact. But especially Remote Sensing is being popular
               in these days. Today, mining companies employ specialized companies to analyze spectral data of specific
               areas collected by the satellite constellations that circle the earth to help them determine likely locations 
               for mineral exploration and mining using by Satelite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPopup;
