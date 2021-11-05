import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Intro from "./section-components/intro";
import Video from "./section-components/video";
import HolidayPlan from "./section-components/holiday-plan";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

const HomePage = () => {
  const [homepage, setHomePage] = useState("");
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/homepage";
    Axios.get(url).then((res) => {
      setHomePage(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro homepage={homepage} />
      <Video homepage={homepage} />
      <HolidayPlan homepage={homepage} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
