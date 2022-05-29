import React, { useState } from "react";


function NotFound(props) {
  return (
    <div>
      <h1 className="text-white text-4xl">NotFound</h1>
      {/* {typeof props.inputResultFromApp === "string" && ( */}
        <h1>{props.inputResultFromApp}</h1>
      {/* )} */}


      
    </div>
  );
}
export default NotFound;