import React from "react";

export default function Pagani({imgname, title}) {
  return (
    <div className="col-lg-3 col-sm-6 col-12 peegi align-items-center text-center rounded-4">
      <img className="mb-3" src={imgname} alt="" />
      <h3>{title}</h3>
    </div>
  );
}
