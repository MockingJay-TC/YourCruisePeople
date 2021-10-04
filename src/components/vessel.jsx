import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Vessel from "./section-components/vessel";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const VesselPage = () => {
  const vesselName = JSON.parse(localStorage.getItem("package"));
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={vesselName.vessel.name} />
      <Vessel />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default VesselPage;
