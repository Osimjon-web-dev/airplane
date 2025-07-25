import React from "react";
import Comfort from "./Comfort";

export default function Comf() {
  return (
    <div className="comf">
      <h1 className="mt-5 fs-1 d-flex justify-content-center">
        Private Jet Performance and Specifications
      </h1>
      <div className="container">
        <div className="row align-items-center text-lg-start text-center">
          <div className="col-lg-4 col-12">
            <Comfort imgName="./img/stol.png " title="Luxury And Comfort" text="It is a long established fact that a reader will be distracted by the readable" />
            <Comfort imgName="./img/taqvim.png" title="Personal schedule & booking" text="It is a long established fact that a reader will be distracted by the readable"  />
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <img className="" src="./img/fort.png" alt="" />
          </div>
          <div className="col-lg-4 col-12">
            <Comfort imgName="./img/xavfsiz.png" title="SAFETY AND SECURITY" text="It is a long established fact that a reader will be distracted by the readable" />
            <Comfort imgName="./img/pilot.png" title="EXPERIENCED CREW" text="It is a long established fact that a reader will be distracted by the readable" />
          </div>
        </div>
      </div>
    </div>
  );
}
