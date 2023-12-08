import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import "../App.css";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageTitle = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "8px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div id="page-title">
        <h2>{title}</h2>
        <div>
          <Breadcrumbs aria-label="breadcrumbs">
            <Link to={`/`}>{"Dashboard"}</Link>
            <Typography>{title}</Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div id="title-right">
        <Button
          style={{ backgroundColor: "f3ecec" }}
          onClick={() => navigate("/clients")}
        >
          <GridOnIcon />
        </Button>
        <Button style={{ backgroundColor: "f3ecec" }}>
          <TableRowsIcon />
        </Button>
        <div>
          <Button color="warning" variant="contained">
            + Create Project
          </Button>
        </div>
      </div>
    </div>
  );
};
