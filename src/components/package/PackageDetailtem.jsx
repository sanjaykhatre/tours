import React from "react";
import altitude from "./altitude.png";
import time from "./time.png";
import level from "./level.png";
import group from "./group.png";
import accomodation from "./accomodation.png";

export default function PackageDetailItem({ title, value }) {
  switch (title) {
    case "altitude":
      return (
        <li>
          <img src={altitude} alt="icon" />
          {value}
        </li>
      );
    case "time":
      return (
        <li>
          <img src={time} alt="icon" />
          {value}
        </li>
      );
    case "accomodation":
      return (
        <li>
          <img src={accomodation} alt="icon" />
          {value}
        </li>
      );
    case "level":
      return (
        <li>
          <img src={level} alt="icon" />
          {value}
        </li>
      );
    case "group":
      return (
        <li>
          <img src={group} alt="icon" />
          {value}
        </li>
      );
    default:
      return null;
  }
}
