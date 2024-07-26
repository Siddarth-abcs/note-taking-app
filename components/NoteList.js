import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteList = ({ notes, viewNote, editNote, deleteNote }) => {
  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id} button onClick={() => viewNote(note)}>
          <ListItemText
            primary={note.title}
            secondary={new Date(note.timestamp).toLocaleString()}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => editNote(note)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteNote(note.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default NoteList;
