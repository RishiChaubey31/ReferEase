export default function ProgramCTA() {
    return (
      <div className="bg-blue-600 text-white mt-32 rounded-lg p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto shadow-lg relative overflow-hidden min-h-[200px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-lg" />
  
        {/* Left Content */}
        <div className="flex items-center gap-4 relative z-10 text-center sm:text-left">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="help.webp" alt="Phone" className="w-14 sm:w-16" />
          </div>
  
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Want to delve deeper into the program?</h2>
            <p className="text-sm sm:text-base text-gray-200 mt-2">
              Share your details to receive expert insights from our program team!
            </p>
          </div>
        </div>
  
        {/* Button (Centered on Mobile) */}
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition relative z-10 mt-4 sm:mt-0">
          Get in touch →
        </button>
      </div>
    );
  }
  