import React from "react";

const CommonCard = ({ children }) => {
  return (
    <div className=" bg-white rounded-3 commonCard overflow-hidden w-100 h-100">
      {children}
    </div>
  );
};

export default CommonCard;
