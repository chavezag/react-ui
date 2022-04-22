import { Button, DialogActions, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface valuesForm {
  name: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

interface IProps {
  intialValues?: valuesForm;
  close?: () => void;
  onSubmit: (values: valuesForm) => void;
}

export const UserForm = ({ intialValues, close, onSubmit }: IProps) => {
  const handleClose = () => {
    close && close();
  };
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik<valuesForm>({
      initialValues: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Campo requerido"),
        lastName: Yup.string().required("Campo requerido"),
        email: Yup.string()
          .email("Correo no valido")
          .required("Campo requerido"),
        password: Yup.string()
          .min(6, "Minimo 6 caracteres")
          .required("Campo requerido"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
          .required("Campo requerido"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <>
      <div className="user__form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mt-3">
              <TextField
                label="Nombre"
                name="name"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name ? true : false}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
            </div>
            <div className="col-md-6 mt-3">
              <TextField
                label="Apellido"
                name="lastName"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName ? true : false}
                helperText={
                  errors.lastName && touched.lastName ? errors.lastName : ""
                }
              />
            </div>
            <div className="col-md-12 mt-3">
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email ? true : false}
                helperText={errors.email && touched.email ? errors.email : ""}
              />
            </div>
            <div className="col-md-6 mt-3">
              <TextField
                label="Contraseña"
                name="password"
                type={"password"}
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                error={errors.password && touched.password ? true : false}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
              />
            </div>
            <div className="col-md-6 mt-3">
              <TextField
                label="Confirmar contraseña"
                name="confirmPassword"
                type={"password"}
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
                value={values.confirmPassword}
                onChange={handleChange}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
                helperText={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
              />
            </div>
            <div className="col-md-12 mt-3">
              <DialogActions>
                <Button color="error" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="contained" color="primary" type="submit"
                >
                  Actualizar
                </Button>
              </DialogActions>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
