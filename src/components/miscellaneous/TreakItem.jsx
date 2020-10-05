import React from "react";
import similar from "./similar.jpg";

export default function TreakItem({ trek }) {
  const { title } = trek;

  return (
    <div className="col-md-3 similar-treks-img">
      <img className="img-fluid" src={similar} alt="" />
      <div className="treks-img-name">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
