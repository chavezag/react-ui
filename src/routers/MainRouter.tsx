import { Navigate, Route, Routes } from "react-router-dom";
import { MRouter } from "../interface/router";
import { MainPage } from "../modules/home/page/MainPage";
import { PorfilePage } from "../modules/home/page/PorfilePage";
import { LoginPage } from "../modules/auth/page/LoginPage";
import { RegisterPage } from "../modules/auth/page/RegisterPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faHouse from "@fortawesome/free-solid-svg-icons/faHouse";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { faHome, faIdBadge, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export const routes: MRouter[] = [
  {
    path: "/*",
    component: MainPage,
    exact: true,
    name: "Manage",
    children: [
      {
        path: "/home",
        component: MainPage,
        exact: true,
        icon: faHome,
        name: "Main Page",
        access: true,
        sidebar: true,
      },
      {
        path: "profile",
        component: PorfilePage,
        exact: true,
        name: "Porfile Page",
        icon: faUser,
        access: true,
        sidebar: true,
      },
      {
        path: "*",
        component: (<Navigate to="/home" />) as any,
        exact: true,
        name: "Main Page",
        access: true,
        sidebar: false,
      },
    ],
  },
  {
    path: "/auth/*",
    component: MainPage,
    exact: true,
    name: "Auth",
    children: [
      {
        path: "login",
        component: LoginPage,
        name: "Login Page",
        access: true,
        exact: true,
        sidebar: true,
        icon: faRightToBracket,
      },
      {
        path: "register",
        component: RegisterPage,
        name: "Register Page",
        access: true,
        exact: true,
        sidebar: true,
        icon:   faIdBadge,
      },
      {
        path: "*",
        component: (<Navigate to="/auth/login" />) as any,
        name: "Login Page",
        access: true,
        exact: true,
        sidebar: false,
      },
    ],
  },
];
export const MainRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={
                route.children ? (
                  <Routes key={route.path}>
                    {route.children.map((child) => {
                      return (
                        <Route
                          key={child.path}
                          path={child.path}
                          element={
                            typeof child.component === "function" ? (
                              <child.component />
                            ) : (
                              child.component
                            )
                          }
                        />
                      );
                    })}
                  </Routes>
                ) : (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              }
            />
          );
        })}
      </Routes>
    </>
  );
};
