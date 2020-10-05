import React from "react";
import departure from "./departure.jpg";
import PacakageDetailCard from "./PacakageDetailCard";

export default function PacakageCard({ trek }) {
  return (
    <div className="col-md-6 mb-5 popular-trek-img ">
      <img className="img-fluid" src={departure} alt="Departure" className="w-100"/>
      <div className="popular-trek-rate">
        {trek.price ? <p>US ${trek.price} per person</p> : null}
      </div>
      <PacakageDetailCard trek={trek} />
    </div>
  );
}
