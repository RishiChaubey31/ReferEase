import React from "react";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const AllPrograms = [
  "PRODUCT MANAGEMENT",
  "STRATEGY & LEADERSHIP",
  "BUSINESS MANAGEMENT",
  "FINTECH",
  "SENIOR MANAGEMENT",
  "DATA SCIENCE",
  "DIGITAL TRANSFORMATION",
  "BUSINESS ANALYTICS",
];

const ReferralTable = () => {
  return (
    <div>
        <div><h1 className="text-center text-2xl font-semibold mt-16">
        What are the Referal Benefits <span className="text-blue-400">Refer?</span>
      </h1></div>
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-center gap-6 p-4">
      {/* Left Table - All Programs */}
      <div className="shadow-lg rounded-lg overflow-hidden w-full md:w-[10%] min-w-[270px] mt-12">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left bg-blue-600 text-white">All Programs</th>
            </tr>
          </thead>
          <tbody>
            {AllPrograms.map((program, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 text-center relative shadow-inner">
                  <button className="relative w-full text-left">
                    {program}
                    <span className="absolute right-4">▼</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Section - Heading + Toggle + Referral Table */}
      <div className="flex flex-col items-center w-full md:w-[65%] min-w-[300px]">
        {/* Heading & Toggle */}
        <div className="relative w-full">
          

          {/* Toggle Button - Extreme Right */}
          <div className="absolute top-full right-0 mt-2 flex items-center">
            <span className="text-gray-600 text-sm mr-2">Enrolled</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Referral Table */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mt-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-3 text-left text-gray-700">Programs</th>
                <th className="p-3 text-gray-700">Referrer Bonus</th>
                <th className="p-3 text-gray-700">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 flex items-center">
                    <span className="mr-2">🎓</span> {program.name}
                  </td>
                  <td className="p-4 text-center">{program.referrerBonus}</td>
                  <td className="p-4 text-center">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Show More Button */}
          <div className="p-4 flex justify-center">
            <button className="text-gray-600 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              Show More ▼
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center w-full mt-16">
  <button className="bg-blue-600 text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
    Refer Now
  </button>
</div>

    </div>
   
  );
};

export default ReferralTable;
