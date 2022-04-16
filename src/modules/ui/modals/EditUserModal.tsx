import { UserForm } from "../../home/components/UserForm";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";

interface IProps {
  show: boolean;
  close: () => void;
}

export const EditUserModal = ({ show, close }: IProps) => {
  const handleClose = () => {
    close();
  };
  return (
    <>
      <Dialog
        open={show}
        onClose={handleClose}
        PaperComponent={Paper}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Editar usuario
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete los datos del usuario que desea editar
          </DialogContentText>
          <UserForm
            onSubmit={(values) => {
              console.log(values);
            }}
            close={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
