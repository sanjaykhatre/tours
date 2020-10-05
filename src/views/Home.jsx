import React from "react";
import Map from "../components/category/Map";
import Banner from "../components/common/Banner";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import TreakItem from "../components/miscellaneous/TreakItem";
import PacakageCard from "../components/package/PacakageCard";
import categories from "../json/category.json";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // let res = await fetch(`https://jsonkeeper.com/b/SE3T`);
        // console.log(res);
        // let data = await res.json();
        setCategory(categories);
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
          {category && (
            <>
              <div className="main">
                <Header />
                <Banner
                  imageUrl={category.bannerImage}
                  imageAlt={category.bannerAlt}
                />
                <Map />
                <div className="mt-5 popular-trek">
                  <div className="container">
                    <h2>{category.title}</h2>
                    <div className="mt-4 pb-5 row">
                      {category.packages.map((item, index) => (
                        <PacakageCard trek={item} key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 similar-treks">
                  <div className="container">
                    <h2>SIMILAR treks</h2>
                    <div className="row">
                      {category.similarTreks.map((item, index) => (
                        <TreakItem trek={item} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
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
