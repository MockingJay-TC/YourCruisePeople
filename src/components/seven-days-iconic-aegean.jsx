import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import SevenDaysIconicAegean from "./section-components/seven-days-iconic-aegean";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const SevenDaysIconicAegeanPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="7 Days Iconic Aegean" />
      <SevenDaysIconicAegean />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SevenDaysIconicAegeanPage;
