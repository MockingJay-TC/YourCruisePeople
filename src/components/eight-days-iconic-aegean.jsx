import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import EightDaysIconicAegean from "./section-components/eight-days-iconic-aegean";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const EightDaysIconicAegeanPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="8 Days Iconic Aegean" />
      <EightDaysIconicAegean />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default EightDaysIconicAegeanPage;
