import React from "react";

export default function Comfort({imgName, title, text}) {
  return (
    <div className=" col-12 mt-3 stol rounded-4 text-center">
      <img className="mt-5" src={imgName} alt="" />
      <h3 className="mt-3 mb-3 text-center">{title}</h3>
      <p>
{text}
      </p>
    </div>
  );
}
