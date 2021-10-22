import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import HomeV1 from "./components/home-v1";
import AboutUs from "./components/about";
import TourList from "./components/tour-list";
import Packages from "./components/packages";
import TourListV3 from "./components/tour-list-v3";
import TourDetails from "./components/tour-details";
import DestinationLIst from "./components/destination-list";
import DestinationLIstV2 from "./components/destination-list-v2";
import DestinationDetails from "./components/destination-details";
import Gallery from "./components/gallery";
import GalleryDetails from "./components/gallery-details";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Error from "./components/error";
import CommingSoon from "./components/comming-soon";
import MyPage from "./components/myPage";
import City from "./components/city";
import Vessel from "./components/vessel";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={HomeV1} />
            <Route path="/about" component={AboutUs} />
            <Route path="/tour-list" component={TourList} />
            <Route path="/packages" component={Packages} />
            <Route path="/tour-list-v3" component={TourListV3} />
            <Route path="/tour-details" component={TourDetails} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/vessel" component={Vessel} />
            <Route path="/destination-list" component={DestinationLIst} />
            <Route path="/destination-list-v2" component={DestinationLIstV2} />
            <Route path="/destination-details" component={DestinationDetails} />
            <Route path="/city" component={City} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/gallery-details" component={GalleryDetails} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/error" component={Error} />
            <Route path="/comming-soon" component={CommingSoon} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));
