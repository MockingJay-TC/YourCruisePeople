import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TenDaysEclecticAegean from "./section-components/ten-days-3continents";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const TenDaysEclecticAegeanPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="10 Days Eclectic Aegean" />
      <TenDaysEclecticAegean />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TenDaysEclecticAegeanPage;
