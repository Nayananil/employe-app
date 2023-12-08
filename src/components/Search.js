import { Button } from "@mui/material";
import "../App.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Search = () => {
  return (
    <div class="container">
      <div class="box">
        <TextField
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
        />
      </div>
      <div class="box">
        <TextField
          id="outlined-basic"
          label="Employee Name"
          variant="outlined"
        />
      </div>
      <div class="box">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Designation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Designation"
            value={1}
          >
            <MenuItem value={1}>Select Designation</MenuItem>
            <MenuItem value={10}>Front-End</MenuItem>
            <MenuItem value={20}>Back-End</MenuItem>
            <MenuItem value={30}>Full-Stack</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div class="box">
        <Button color="success" variant="contained" style={{ width: "100%" }}>
          Search
        </Button>
      </div>
    </div>
  );
};
