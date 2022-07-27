import { DefaultLayout } from "../common";

import HomePage from "../modules/HomePage";
import RegisterPage from "../modules/RegisterPage";
import LoginPage from "../modules/LoginPage";

//Public Routes
const publicRoutes = [
  {
    path: "/",
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/number",
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/data",
    component: RegisterPage,
    layout: DefaultLayout,
  },
  {
    path: "/news",
    component: RegisterPage,
    layout: DefaultLayout,
  },
  {
    path: "/support",
    component: RegisterPage,
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
