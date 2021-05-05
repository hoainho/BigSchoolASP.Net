import React, { useEffect, useState } from 'react';
import Notifications from 'react-notify-toast';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import routes from './routes';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer/Footer';
function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [social, setSocial] = useState(false);
  const handleStatusSocial = (status) => {
    setSocial(status);
  }
  function showContentMenu(routes) {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
    return result
  }
  console.log(social);
  return (
    <Router>
      <Notifications />
      <Header handleStatusSocial={handleStatusSocial} />
      <Navbar statusSocial={social} />
      <Switch>
        {showContentMenu(routes)}
      </Switch>
      <ScrollToTop />
    </Router>
  );
}

export default App;
