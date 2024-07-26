import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBar from "./SearchBar"; // Import the SearchBar component

const NoteList = ({ notes, viewNote, editNote, deleteNote }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter notes based on the search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <List>
        {filteredNotes.map((note) => (
          <ListItem key={note.id} button onClick={() => viewNote(note)}>
            <ListItemText
              primary={note.title}
              secondary={new Date(note.timestamp).toLocaleString()}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from bubbling up
                  editNote(note);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from bubbling up
                  deleteNote(note.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NoteList;
