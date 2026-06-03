import React from "react";
import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  const currentDate = format(
    new Date(),
    "EEEE, MMMM d, yyyy"
  );

  return (
    <header className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Dragon News Logo"
          className="w-full max-w-[320px] md:max-w-[420px] h-auto object-contain"
        />

        <p className="mt-3 text-sm md:text-base text-gray-500">
          Journalism Without Fear or Favour
        </p>

        <p className="mt-2 text-sm md:text-base font-medium text-gray-700">
          {currentDate}
        </p>
      </div>
    </header>
  );
};

export default Header;