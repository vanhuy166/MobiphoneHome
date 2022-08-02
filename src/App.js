import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./router/combineRoutes";

function App() {
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

export default App;
