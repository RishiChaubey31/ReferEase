import React, { useState } from 'react';

function Motives() {
  const [activeTab, setActiveTab] = useState('Refer');
  
  const navItems = ['Refer', 'Benefits', 'FAQs', 'Support'];

  return (
    <div className="flex justify-center mt-32 px-4">
      <div className="mx-auto w-fit px-6 sm:px-12 md:px-16 py-2 border border-gray-300 rounded-full bg-blue-50">
        <div className="flex gap-4 sm:gap-8 md:gap-16">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`relative px-1 sm:px-2 py-1 text-sm sm:text-base transition-colors duration-200
                ${activeTab === item ? 'text-blue-600' : 'hover:text-blue-400'}
                after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px]
                after:h-1.5 after:w-1.5 after:bg-blue-600 after:rounded-full
                after:transform after:-translate-x-1/2
                ${activeTab === item ? 'after:opacity-100' : 'after:opacity-0'}
                after:transition-opacity after:duration-200
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Motives;