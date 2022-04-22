import {
  Avatar,
  Button,
  Container,
  Divider,
  Typography,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider } from "@mui/system";
import profile from "../../../assets/img/porfile.png";
import { notify, themeInput } from "../../../interface/theme";
import { EditUserModal } from "../../ui/modals/EditUserModal";
import { useState } from "react";
import { BackdropFarinter } from "../../ui/components/BackdropFarinter";
import { toast } from "react-toastify";
export const PorfilePage = () => {
  const [modal, setmodal] = useState({
    open: false,
    loading: false,
  });

  const handleDelete = () => {
  }

  return (
    <>
      <BackdropFarinter
        loading={modal.loading}
        close={() => setmodal({ ...modal, loading: false })}
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      />
      <ThemeProvider theme={themeInput}>
        <Container
          maxWidth="md"
          className="
         mt-3
      "
        >
          <Typography variant="h6" component="h2">
            Información de usuario
          </Typography>
          <div className="row porfile__container">
            <div className="col-md-12 d-flex justify-content-center">
              <Avatar alt="AC" src={profile} sx={{ width: 120, height: 120 }}>
                AC
              </Avatar>
            </div>
            <div className="col-md-4 mt-3">
              <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Nombre:
              </Typography>
              <Divider />
              <Typography variant="body1" component="h2">
                Gabriel Chavez
              </Typography>
            </div>
            <div className="col-md-8 mt-3">
              <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Correo:
              </Typography>
              <Divider />
              <Typography variant="body1" component="h2">
                agchavez@unah.hn
              </Typography>
            </div>
            <div className="col-md-4 mt-3">
              <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Numero de telefono:
              </Typography>
              <Divider />
              <Typography variant="body1" component="h2">
                +504 99937753
              </Typography>
            </div>
            <div className="col-md-4 mt-3">
              <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Nivel del usuario:
              </Typography>
              <Divider />
              <Chip
                className="mt-1"
                label="Administrador"
                color="primary"
                variant="outlined"
              />
            </div>
            <div className="col-md-4 mt-3">
              <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Fecha de registro:
              </Typography>
              <Divider />
              <Typography variant="body1" component="h2">
                01/01/2020
              </Typography>
            </div>
            
            <div
              className="col-md-12 mt-3 d-flex justify-content-end
            "
            >
              <Button
                variant="contained"
                color="primary"
                endIcon={<EditIcon />}
                onClick={notify}
              >
                Editar
              </Button>
            </div>
            <div
                className="col-md-12 mt-3"
            >
            <Typography
                variant="body1"
                component="h2"
                className="base__text-primary"
              >
                Lista de accesos:
              </Typography>
              <Divider />
              <div className="mt-2 justify-content-center">
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deleasdadastable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletaasdasdble" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletasdasdasdsaable" variant="outlined" color="primary" onDelete={handleDelete} />
              <Chip className="m-1" label="Deletable" variant="outlined" color="primary" onDelete={handleDelete} /> 
              </div>
            </div>
          </div>
        </Container>
        <EditUserModal
          show={modal.open}
          close={() =>
            setmodal({
              loading: true,
              open: false,
            })
          }
        />
      </ThemeProvider>
    </>
  );
};
