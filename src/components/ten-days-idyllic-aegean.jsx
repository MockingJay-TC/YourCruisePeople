import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TenDaysIdyllicAegean from "./section-components/ten-days-3continents";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const TenDaysIdyllicAegeanPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="10 Days Idyllic Aegean" />
      <TenDaysIdyllicAegean />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TenDaysIdyllicAegeanPage;
