import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/common/Banner";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

import Packge1 from "../json/1.json";
import Packge2 from "../json/2.json";
import Packge3 from "../json/3.json";
import Packge4 from "../json/4.json";

export default function Package(props) {
  console.log(props);
  const { id } = useParams();
  const [trek, setTrek] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getPackageModuleById = () => {
      switch (id) {
        case "2":
          return Packge2;
        case "3":
          return Packge3;
        case "4":
          return Packge4;
        default:
          return Packge1;
      }
    };

    const fetchData = async () => {
      try {
        // let res = await fetch(
        //   `https://sanjaykhatre.github.io/${id}`
        // );
        // let data = await res.json();

        let trip = getPackageModuleById(id);
        setTrek(trip);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {!loading ? (
        <>
          {trek && (
            <>
              <Header />
              <Banner imageUrl={trek.bannerImage} imageAlt={trek.bannerAlt} />
              <h2 className="text-center">{trek.title}</h2>
              <p className="text-center">{trek.description}</p>
              <Footer />
            </>
          )}
        </>
      ) : (
        <div className="d-flex vh-100 justify-content-center align-items-center">
          Loading...
        </div>
      )}
    </div>
  );
}
