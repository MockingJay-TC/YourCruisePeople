import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import SevenDaysIconicDiscovery from "./section-components/seven-days-iconic-discovery";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const SevenDaysIconicDiscoveryPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="7 Days Iconic Discovery" />
      <SevenDaysIconicDiscovery />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SevenDaysIconicDiscoveryPage;
