import { ThemeProvider, Typography } from "@mui/material";
import { BackdropFarinter } from "../../ui/components/BackdropFarinter";
import { useState } from "react";
import Container from "@mui/material/Container";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { themeInput } from "../../../interface/theme";
import { useFormik } from "formik";

export const LoginPage = () => {
  const [loading, setloading] = useState(true);
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Correo no valido")
          .required("Campo requerido"),
        password: Yup.string()
          .min(6, "Minimo 6 caracteres")
          .required("Campo requerido"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  if (loading) {
    return (
      <div>
        <BackdropFarinter
          loading={loading}
          close={() => setloading(false)}
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            left: "179px",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Container maxWidth="lg">
        <div className="auth__container mt-3">
          <div className="row">
            <div className="col-md-6 auth__container-form">
              <div className="row">
                <div className="col-md-12"></div>
                <div className="col-md-12">
                  <Typography variant="h4" component="h1">
                    Inicio de sesión
                  </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="col-md-12 mt-5">
                    <ThemeProvider theme={themeInput}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        color="primary"
                        size="small"
                        autoComplete="off"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email && touched.email ? true : false}
                        helperText={
                          errors.email && touched.email ? errors.email : ""
                        }
                      />
                    </ThemeProvider>
                  </div>
                  <div className="col-md-12 mt-3">
                    <ThemeProvider theme={themeInput}>
                      <TextField
                        label="password"
                        name="password"
                        type={"password"}
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={values.password}
                        onChange={handleChange}
                        error={
                          errors.password && touched.password ? true : false
                        }
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : ""
                        }
                      />
                    </ThemeProvider>
                  </div>
                  <div className="col-md-12 mt-5 d-flex flex-row-reverse">
                    <Button
                      variant="contained"
                      type="submit"
                      className="base__button"
                      disableElevation
                      style={{
                        width: "50%",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 auth__container-info">
              <Typography
                variant="h6"
                component="h1"
                style={{
                  color: "#fff",
                }}
              >
                Sistema
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Niveles de reimpresion
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
