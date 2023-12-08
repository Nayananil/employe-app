import Typography from "@mui/material/Typography";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import LinearProgress from "@mui/joy/LinearProgress";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ProjectCard = ({ info }) => {
  const {
    title,
    description,
    completed,
    openTask,
    projectLeader,
    team,
    deadLine,
  } = info;
  return (
    <div id="project-card-container">
      <div id="small-container">
        <Typography variant="h6" gutterBottom style={{ margin: 0, padding: 0 }}>
          {title}
        </Typography>
        {`${openTask} open tasks,${completed} tasks completed`}
      </div>
      <div id="small-container">
        <Typography
          variant="body2"
          gutterBottom
          style={{ margin: 0, padding: 0, textAlign: "justify" }}
        >
          {description}
        </Typography>
      </div>
      <div id="small-container">
        <Typography variant="p" gutterBottom style={{ margin: 0, padding: 0 }}>
          <b>Deadline:</b>
        </Typography>
        {deadLine}
      </div>
      <div id="small-container">
        <Typography variant="p" gutterBottom style={{ margin: 0, padding: 0 }}>
          <b>Project leader:</b>
        </Typography>
        <Avatar alt="Remy Sharp" src={projectLeader} />
      </div>
      <div id="small-container">
        <Typography variant="p" gutterBottom style={{ margin: 0, padding: 0 }}>
          <b>Team:</b>
        </Typography>
        <AvatarGroup>
          {team?.map((mem) => (
            <Avatar alt="Remy Sharp" src={mem} />
          ))}
        </AvatarGroup>
      </div>
      <div id="small-container">
        <Typography variant="p" gutterBottom style={{ margin: 0, padding: 0 }}>
          <b>Progress:</b>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
        </Typography>
        <LinearProgress determinate value={50} />
      </div>
      <div style={{ position: "absolute", top: "5px", right: "8px" }}>
        {" "}
        <IconButton aria-label="more" id="long-button" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};
