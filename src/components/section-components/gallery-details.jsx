import React, { useEffect, useState } from "react";
import Axios from "axios";

const GalleryDetails = () => {
  const [gallery, setGallery] = useState(
    JSON.parse(localStorage.getItem("gall")) !== null
      ? JSON.parse(localStorage.getItem("gall"))
      : []
  );
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/galleries";
    Axios.get(url).then((res) => {
      localStorage.setItem("gall", JSON.stringify(res.data[0].images));
      setGallery(res.data[0].images);
      console.log(res.data[0].images);
    });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  return (
    <div className="gallery-area pd-top-108">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="title">Beautiful Beach of Greece</h2>
              <p>
                Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate. Sed eleifend lacus eu posuere
                viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit
              </p>
            </div>
          </div>
        </div>
        {/* Gallery area start */}
        <div className="gallery-area">
          <div className="container">
            <div className="gallery-filter-area row">
              <div className="gallery-sizer col-1" />
              {/* gallery-item */}
              {gallery &&
                gallery.map((pic) => (
                  <div className="tp-gallery-item col-md-4 col-12" key={pic.id}>
                    <div className="tp-gallery-item-img">
                      <a
                        className="popup-thumb"
                        href={pic.url}
                        data-effect="mfp-zoom-in"
                      >
                        <img src={pic.url} alt="image" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Gallery area end */}
      </div>
    </div>
  );
};

export default GalleryDetails;