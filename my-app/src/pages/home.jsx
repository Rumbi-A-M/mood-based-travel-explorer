import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16 overflow-hidden">

      {/* Background Accents */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-start max-w-6xl gap-12 lg:gap-24">

        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Sihle</span> 👋
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg">
            Industrial Design student at the University of Johannesburg. I craft functional, innovative designs with a touch of <span className="font-semibold text-blue-600">African identity</span>. Turning ideas into experiences people love.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/work"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 hover:scale-105 transition transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Sihle Sibiya"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl border-4 border-white object-cover transition-transform transform hover:scale-105"
            />
            <span className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-gray-400 w-full text-center">
        &copy; {new Date().getFullYear()} Sihle Sibiya. All rights reserved.
      </p>
    </main>
  );
}
