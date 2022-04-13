import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import { Provider } from "react-redux";
import Store from "./store";
import './css/styles.css';
import './css/responsive.css';
import HomePageHeader from "./pages/NavBar/homepage-header";
import HomePageMain from "./pages/NavBar/homepage-main";
import HomePageFooter from "./pages/NavBar/homepage-footer";

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <HomePageHeader />
        <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={Search} />
          <Route path="/">
            <HomePageMain />
          </Route>
        </Switch>
        <HomePageFooter />
      </Router>
    </Provider>
  );
}