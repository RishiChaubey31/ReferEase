import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-100 min-h-[40px] py-2 md:py-3 font-semibold shadow-md z-50">
      <div className="flex md:flex-row justify-center items-center gap-2 md:gap-x-4 px-4">
        <div className="text-xs sm:text-sm md:text-base">
          Navigate your ideal career with tailored expert advice
        </div>
        <button className="text-blue-600 text-xs sm:text-sm md:text-base hover:text-blue-800">
          Contact Expert
        </button>
      </div>
    </div>
  );
}

export default Header;
