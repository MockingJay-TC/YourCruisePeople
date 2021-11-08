import React, { useEffect, useState } from "react";
import Axios from "axios";

const GalleryDetails = () => {
  const [gallery, setGallery] = useState(
    JSON.parse(localStorage.getItem("gall")) !== null
      ? JSON.parse(localStorage.getItem("gall"))
      : " "
  );
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/galleries";
    Axios.get(url).then((res) => {
      localStorage.setItem("gall", JSON.stringify(res.data));
      setGallery(res.data);
      console.log(res.data);
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
              <h2 className="title">LIFE is BETTER at SEA. EXPERIENCE it!</h2>
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
