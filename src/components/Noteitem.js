import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNotes } = context;
  const { note, updateNote } = props;

  return (
    <div style={{margin : "10px", flexWrap:"wrap"}}>
      <Card sx={{ width: 250 }}>
        <CardContent>
          <Typography  color="text.secondary" variant="h5" gutterBottom>
            Note item
          </Typography>
          <hr></hr>
          <Typography variant="h5" gutterBottom >
            {note.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">{note.description}</Typography>
        </CardContent>
        <CardActions >
          <Button sx={{width : "5px" }}
            color="error"
            onClick={() => {
              deleteNotes(note._id);
              props.showAlert("Deleted Successfully", "success");
            }}
          >
            {" "}
            <DeleteForeverIcon />
          </Button>
          <Button  sx={{width : "5px" }}
            color="warning"
            onClick={() => {
              updateNote(note);
            }}
          >
            {" "}
            <EditIcon />{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Noteitem;
