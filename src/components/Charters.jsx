import React from "react";
import Pagani from "./Pagani";

export default function Charters() {
  return (
    <div className="charter">
      <h1 className="fw-bold fs-1 d-flex justify-content-center mt-5 mb-5">
        Luxury Charters
      </h1>
      <div className="container">
        <div className="row d-flex justify-content-around text-lg-start text-center g-3">
          <Pagani imgname="./img/s1.png" title="Piaggio P.180 Avanti"/>
          <Pagani imgname="./img/s2.png" title="Pilatus PC-12"/>
          <Pagani imgname="./img/s3.png" title="piper pa27 aztec"/>
          <Pagani imgname="./img/s4.png" title="Beech BE100 King Air"/>
        </div>
      </div>
    </div>
  );
}
