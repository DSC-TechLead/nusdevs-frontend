import { Heart } from "lucide-react";
import React from "react";

const ProjectBox: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border-none h-52 p-5 m-5 shadow-md flex items-start">
      <div className="bg-transparent p-2 border w-12 h-12"></div>
      <div className="ml-5 flex flex-col text-left flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="m-0">Role Title</h3>
          <div className="flex items-center ml-auto">
            <Heart className="mr-2" />
            <button className="text-blue-600 bg-white border border-blue-600 rounded-full px-4 py-1">
              Apply
            </button>
          </div>
        </div>
        <p className="m-0">Company name / Host name</p>
        <p className="m-0">Time period: xx/xxxx - xx/xxxx</p>
        <p className="m-0">Description, description, description</p>
      </div>
    </div>
  );
};

export default ProjectBox;
