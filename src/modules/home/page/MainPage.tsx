import { Chip, Container, ThemeProvider, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarExport,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { themeInput } from "../../../interface/theme";

export const MainPage = (): JSX.Element => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "  lastName",
      headerName: "Last Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params: GridRenderCellParams<boolean>) => {
        console.log(params);

        return (
          <Chip
            variant="outlined"
            label={params.value ? "Active" : "Inactive"}
            color={params.value ? "primary" : "secondary"}
          />
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      age: "30",
      lastName: "Doe",
      name: "John",
      email: "adsadas@gmail.com",
      status: false,
    },
    {
      id: 2,
      age: "25",
      lastName: "Doe",
      name: "Jane",
      email: "adsadas@gmail.com",
      status: true,
    },
  ];
  return (
    <>
      <ThemeProvider theme={themeInput}>
        <Typography variant="h4" component="h1">
          Main Page
        </Typography>

        <Container maxWidth="xl">
          <DataGrid
            style={{
              height: "500px",
              width: "100%",
              padding: "10px",
            }}
            rows={rows}
            columns={columns}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </Container>
      </ThemeProvider>
    </>
  );
};

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
