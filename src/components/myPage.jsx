import React, { useState } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import MyPage from "./section-components/myPage";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import Faq from "./section-components/faq";
import Video from "./section-components/video";

const MyPageDoc = () => {
  let element = JSON.parse(localStorage.getItem("package"));
  const [packa, setPackage] = useState(element !== null ? element : []);
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={packa.name} />
      <MyPage />
      <Faq />
      {/* <Video image={packa.banner_image[0].url} video_url={packa.video_url} /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MyPageDoc;
