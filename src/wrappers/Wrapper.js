import React from "react";

function Wrapper({ children }) {
  return (
    <div className="mx-auto h-3/4 md:w-5/6 px-2">
      {children}
    </div>
  );
}

export default Wrapper;
