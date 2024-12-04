import { ChevronLeft } from "lucide-react";
import React from "react";

const AppPage = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-16">
        <ChevronLeft className="absolute left-2" />
        <p className="text-center font-bold">Apply to Request Name</p>
      </div>
    </div>
  );
};

export default AppPage;
