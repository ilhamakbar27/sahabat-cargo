import React from "react";

interface TitleIndustryProps {
  title: string;
}

const TitleName: React.FC<TitleIndustryProps> = ({ title }) => {
  return (
    <div className="flex items-center max-md:px-2 py-10 max-md:py-5 gap-3">
      <div
        className={`border-l md:border-4  border-4 border-[#174BA0] 
        }] h-10`}></div>
      <h1 className="text-3xl tracking-wide max-md:text-lg  font-bold">
        {title}
      </h1>
    </div>
  );
};

export default TitleName;
