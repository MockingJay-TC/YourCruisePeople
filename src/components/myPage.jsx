import React, { useState } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import MyPage from "./section-components/myPage";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import Faq from './section-components/faq';

const MyPageDoc = () => {
  let element = JSON.parse(localStorage.getItem("package"));
  const [title, setTitle] = useState(element !== null ? element : []);
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={title.name} />
      <MyPage />
      <Faq/>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MyPageDoc;
