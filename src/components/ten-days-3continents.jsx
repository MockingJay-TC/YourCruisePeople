import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TenDays3Continents from "./section-components/ten-days-3continents";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const TenDays3ContinentsPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="10 Days 3 Continents" />
      <TenDays3Continents />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TenDays3ContinentsPage;
