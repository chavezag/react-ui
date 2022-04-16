import Backdrop from "@mui/material/Backdrop";

import { LoadingFarinter } from "./LoadingFarinter";

interface IProp {
  loading: boolean;
  close?: () => void;
  style?: React.CSSProperties;
}
export const BackdropFarinter = ({ loading, close, style }: IProp) => {
  return (
    <>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ...style,
        }}
        open={loading}
        onClick={close}
      >
        <LoadingFarinter loading={loading} />
      </Backdrop>
    </>
  );
};
