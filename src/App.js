import "./App.scss";
import React from "react";
// import { default as React, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes/combineRoutes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout ? route.layout : React.Fragment;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
