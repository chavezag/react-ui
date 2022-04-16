import { Avatar, Badge, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import farinter from "../../../assets/img/farinter.png";
import profile from "../../../assets/img/porfile.png";

export const NavBar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between ps-2 nav__container">
        <div className="nav__img">
          <img src={farinter} alt="img" width={150} className="p-1" />
        </div>
        <div>
          <Typography variant="h5" component="h1" className="nav__title">
            Niveles de reimpresion
          </Typography>
        </div>
        <div
          className="nav-link dropdown-toggle base__pointer d-flex align-items-center base__text-color"
          onClick={() => setopen(!open)}
        >
          <Badge badgeContent={4} color="default" className="me-3">
            <MailIcon className="base__text" />
          </Badge>
          Gabriel Chavez
          <Avatar
            className="mx-2"
            sx={{
              backgroundColor: "#fff",
            }}
            src={profile}
            alt="GC"
          />
        </div>
        {open && (
          <div
            className="dropdown-menu  nav__auth-options"
            style={{
              display: "block",
            }}
          >
            <a className="dropdown-item">Mi perfil</a>
            <a className="dropdown-item">Reportar un problema</a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              style={{
                color: "red",
              }}
            >
              Cerrar sesión
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
