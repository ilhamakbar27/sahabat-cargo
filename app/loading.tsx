import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-700 inline-block animate-flash"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-700 inline-block animate-flash [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-700 inline-block animate-flash [animation-delay:0.4s]"></span>
    </div>
  );
};

export default loading;
