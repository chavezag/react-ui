import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { routes } from "../../../routers/MainRouter";
import { Link, NavLink } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

interface ItemList {
  id: number;
  name: string;
  icon: React.ReactElement;
  path: string;
}
export const SideBar = () => {
  return (
    <>
      <div className="nav__sidebar-container">
        <div className="nav__sidebar-header">
          {routes.map((item) => (
            <>
              <div className="nav__sidebar-module">
                <Typography
                  variant="body1"
                  component="p"
                  className="nav__sidebar-module-title"
                >
                  {item.name}
                </Typography>
                <Divider className="base__divider" />
                {item.children
                  ? item.children.map((child) =>
                      child.access && child.sidebar ? (
                        <NavLink
                          key={child.path}
                          to={(item.path.split("*")[0] + child.path).replace(
                            "//",
                            "/"
                          )}
                          className={({ isActive }) =>
                            isActive ? "nav__active" : "nav__sidebar-item"
                          }
                        >
                          <div className="nav__sidebar-item-icon">
                            {child.icon ? (
                              <FontAwesomeIcon size="xs" icon={child.icon} />
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="nav__sidebar-item-text">
                            {child.name}
                          </div>
                        </NavLink>
                      ) : null
                    )
                  : null}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
