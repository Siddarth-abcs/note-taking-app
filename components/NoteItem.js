import { ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteItem = ({ note, editNote, deleteNote }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => editNote(note)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => deleteNote(note.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
      className="border-b"
    >
      <ListItemText
        primary={note.title}
        secondary={`Last modified: ${new Date(
          note.timestamp
        ).toLocaleString()}`}
      />
    </ListItem>
  );
};

export default NoteItem;
