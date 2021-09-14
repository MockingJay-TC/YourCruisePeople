import React, { useEffect, useState } from "react";
import Axios from "axios";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/about";
    Axios.get(url)
      .then((res) => {
        console.log(res.data.title);
        setAbout(res.data)
      });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  //   let imagealt = "image";
  return (
    <div className="about-section pd-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="section-title mb-lg-0">
              <h2 className="title">
                {about && about.title}
              </h2>
              <p>{about && about.message}</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="thumb about-section-right-thumb">
              <img src={publicUrl + "assets/img/others/9.png"} alt="img" />
              <img
                className="about-absolute-thumb"
                src={publicUrl + "assets/img/others/10.png"}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
