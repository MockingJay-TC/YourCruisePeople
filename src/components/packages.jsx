import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Packages from "./section-components/packages";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const TourListPageV2 = () => {
  // let element = JSON.parse(localStorage.getItem("package"));
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Packages" />
      <Packages />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TourListPageV2;
