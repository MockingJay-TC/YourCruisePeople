import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import GalleryDetails from "./section-components/gallery-details";
import Footer from "./global-components/footer";

const GalleryDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Gallery" />
      <GalleryDetails />
      <Footer />
    </div>
  );
};

export default GalleryDetailsPage;
