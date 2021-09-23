import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import MyPage from "./section-components/myPage";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const myPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="My Page" />
      <MyPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default myPage;
