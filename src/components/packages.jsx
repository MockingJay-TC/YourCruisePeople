import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Package from "./section-components/package";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const Packages = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Packages" />
      <Package />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Packages;
