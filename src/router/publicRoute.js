import React from "react";

import { DefaultLayout } from "../layouts";

import HomePage from "../modules/home";
import RegisterPage from "../modules/register";
import LoginPage from "../modules/login";
import DetailsPage from "../modules/details";
import ProfilePage from "../modules/profile";

//Public Routes
const publicRoutes = [
  {
    path: "/",
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/number",
    component: React.Fragment,
    layout: DefaultLayout,
  },
  {
    path: "/data",
    component: React.Fragment,
    layout: DefaultLayout,
  },
  {
    path: "/news",
    component: React.Fragment,
    layout: DefaultLayout,
  },
  {
    path: "/support",
    component: React.Fragment,
    layout: DefaultLayout,
  },
  {
    path: "/details",
    component: DetailsPage,
    layout: DefaultLayout,
  },
  {
    path: "/profile",
    component: ProfilePage,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
    layout: DefaultLayout,
  },
];

export default publicRoutes;
