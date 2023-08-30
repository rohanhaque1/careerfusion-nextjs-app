import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      {children}
    </div>
  );
};

export default Container;
