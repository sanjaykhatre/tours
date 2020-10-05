import React from "react";
import PackageInqBtn from "./PackageInqBtn";
import PackageDateBtn from "./PackageDateBtn";
import PackageDetailItem from "./PackageDetailtem";

export default function PacakageDetailCard({ trek }) {
  const { id, title, date, altitude, time, group, level, accomodation } = trek;
  const packageDetailIcons = [
    { title: "altitude", value: altitude },
    { title: "time", value: time },
    { title: "group", value: group },
    { title: "level", value: level },
    { title: "accomodation", value: accomodation },
  ];

  return (
    <div className="p-4 popular-trek-img-info">
      <h3>{title}</h3>
      <ul>
        {packageDetailIcons.map((item, index) => (
          <PackageDetailItem title={item.title} value={item.value} key={index} />
        ))}
      </ul>
      <div className="popular-trek-btn">
        <PackageInqBtn title="Inquiry" packageId={id} />
        <PackageDateBtn date={date} />
      </div>
    </div>
  );
}
