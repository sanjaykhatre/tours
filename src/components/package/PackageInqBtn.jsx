import React from "react";
import { Link } from "react-router-dom";

export default function PackageInqBtn({ title, packageId }) {
  return (
    <div className="inq-btn">
      <Link to={"/package/" + packageId}>{title}</Link>
    </div>
  );
}
