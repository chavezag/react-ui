import { Link, Navigate, Route, Routes } from "react-router-dom";
import { MRouter } from "../interface/router";
import { MainPage } from "../modules/home/page/MainPage";
import { PorfilePage } from "../modules/home/page/PorfilePage";
import { LoginPage } from "../modules/auth/page/LoginPage";
import { RegisterPage } from "../modules/auth/page/RegisterPage";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

export const routes: MRouter[] = [
  {
    path: "/*",
    component: MainPage,
    exact: true,
    name: "Main Page",
    children: [
      {
        path: "/home",
        component: MainPage,
        exact: true,
        icon: <HomeOutlinedIcon />,
        name: "Main Page",
        access: true,
        sidebar: true,
      },
      {
        path: "profile",
        component: PorfilePage,
        exact: true,
        name: "Porfile Page",
        icon: <AccountCircleOutlinedIcon />,
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
    name: "Auth Page",
    children: [
      {
        path: "login",
        component: LoginPage,
        name: "Login Page",
        access: true,
        exact: true,
        sidebar: true,
        icon: <ExitToAppOutlinedIcon />,
      },
      {
        path: "register",
        component: RegisterPage,
        name: "Register Page",
        access: true,
        exact: true,
        sidebar: true,
        icon: <HowToRegOutlinedIcon />,
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
