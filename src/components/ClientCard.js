import { Avatar, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ClientCard = ({ info }) => {
  const { name, ceo, image } = info;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        border: "1px solid silver",
        boxShadow: "1px 1px 3px silver",
        padding: "12px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
      }}
    >
      <Avatar src={image} />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="p">{ceo}</Typography>
      <Typography variant="p">{"CEO"}</Typography>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: "4px" }}
      >
        <Button variant="outlined">Message</Button>
        <Button variant="outlined">View Profile</Button>
      </div>
      <div style={{ position: "absolute", top: "5px", right: "8px" }}>
        <IconButton aria-label="more" id="long-button" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};
