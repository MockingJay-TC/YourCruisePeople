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
import Packages from "./components/packages";
import GalleryDetails from "./components/gallery-details";
import Faq from "./components/faq";
import Contact from "./components/contact";
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
            <Route path="/packages" component={Packages} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/vessel" component={Vessel} />
            <Route path="/city" component={City} />
            <Route path="/gallery-details" component={GalleryDetails} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));
