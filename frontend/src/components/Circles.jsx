import React from 'react';

function Circles() {
  return (
    <div className="bg-blue-50 mt-24 flex flex-col items-center justify-center px-4 overflow-visible">
      <h1 className="text-center text-lg font-semibold">
        How do I <span className="text-blue-400">Refer?</span>
      </h1>

      <img 
        src="https://s3-alpha-sig.figma.com/img/f8bf/9271/2c05e77a4b76d26c35bb05a554cb6838?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eSwSiR102zJgx64U8dqPg0~wq4Dznn7HncaRvZAYnrpLz1yvlG90-EFd~5Q36JyvKPhy~gsqatYYnDRVYFG1xE42rdOJLnkNvpRfFQq35ODeBjE~vK7m4o3ah2Wjw1DUweuc1y0Ro89dbs~4M0dvq8-58XZ1dDLDmCsciA3aM1j2-X6DfX81UKO3jDtYdflqk1sGgYDSkTQeHBfflU13lqt3zXn-e8KHMGDs5i1T-Dv1u8gK2cpv7FZGcq~gHWQQczPwyGh8icWW9vFFWs3ItMXjk5PJoWSu2ssq95dQd~Mg6WZ7vlrfFcScwlXwk7rw4C7yFvL~j9FoXdGhJE2ntA__" 
        alt="Refer Image"
        className="object-contain origin-center mt-6
                   w-full h-auto min-h-[400px] 
                   sm:w-[500px] sm:h-[450px]
                   md:w-[500px] md:h-[300px] md:rotate-0 
                   rotate-90 sm:rotate-0"
      />
       <button className="bg-blue-600 text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4  ">
              Refer Now
            </button>
    </div>
  );
}

export default Circles;
