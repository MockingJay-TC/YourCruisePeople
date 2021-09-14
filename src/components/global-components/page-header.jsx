import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Page_header = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://your-cruise-people-cms.herokuapp.com/contact-info")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          console.log("doing this")
        console.log(data);
        console.log(data.banner_image.url);
        setImage(data);
      });
  }, []);

  let HeaderTitle = props.headertitle;
  let publicUrl = process.env.PUBLIC_URL + "/";
  let Subheader = props.subheader ? props.subheader : HeaderTitle;

  return (
    <div
      className="breadcrumb-area jarallax"
      style={{ backgroundImage: "url(`{image && image.banner_image.url}`)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <h1 className="page-title">{HeaderTitle}</h1>
              <ul className="page-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{Subheader}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_header;
