import React from "react";

const CommonCard = ({ children }) => {
  return (
    <div className=" bg-white rounded-3 commonCard overflow-hidden">
      {children}
    </div>
  );
};

export default CommonCard;
