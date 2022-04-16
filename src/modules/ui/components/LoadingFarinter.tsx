import { CircularProgress } from "@mui/material";
import farinter from "../../../assets/img/farinter.png";

interface IProps {
  loading: boolean;
}

export const LoadingFarinter = ({ loading }: IProps) => {
  return (
    <>
      {loading && (
        <div className="ui__loading">
          <CircularProgress
            style={{
              color: "#010066",
            }}
          />

          <div className="ui__loading-img">
            <img src={farinter} alt="loading" width={120} />
          </div>
        </div>
      )}
    </>
  );
};
