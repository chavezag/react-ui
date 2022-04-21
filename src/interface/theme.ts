import { createTheme, styled } from "@mui/material/styles";
import { toast } from "react-toastify";
export const themeInput = createTheme({
  palette: {
    primary: {
      main: "#010066",
      dark: "#010066",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const notify = () =>
  toast.error("Your profile has been updated successfully", {
    position: "bottom-right",
    data: {
      time: new Date(),
      name: "React-Bootstrap",
    },
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
