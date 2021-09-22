import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import EightDaysIconicDiscovery from "./section-components/eight-days-iconic-discovery";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const EightDaysIconicDiscoveryPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="8 Days Iconic Discovery" />
      <EightDaysIconicDiscovery />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default EightDaysIconicDiscoveryPage;
