import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import City from "./section-components/city";
import Footer from "./global-components/footer";

const CityPage = () => {
  const cityName = JSON.parse(localStorage.getItem("city"));
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={cityName.name} />
      <City />
      <Footer />
    </div>
  );
};

export default CityPage;
