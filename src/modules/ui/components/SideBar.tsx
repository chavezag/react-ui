import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { routes } from "../../../routers/MainRouter";
import { Link, NavLink } from "react-router-dom";

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
                          {child.icon ? child.icon : <></>}
                        </div>
                        <div className="nav__sidebar-item-text">
                          {child.name}
                        </div>
                      </NavLink>
                    ) : null
                  )
                : null}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
