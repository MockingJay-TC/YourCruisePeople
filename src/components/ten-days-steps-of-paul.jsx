import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TenDaysStepsOfPaul from "./section-components/ten-days-3continents";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const TenDaysStepsOfPaulPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="10 Days Steps Of Paul" />
      <TenDaysStepsOfPaul />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TenDaysStepsOfPaulPage;
