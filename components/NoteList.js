import { useState } from "react";
import { List, Box } from "@mui/material";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";

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
          <NoteItem
            key={note.id}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
            viewNote={viewNote}
          />
        ))}
      </List>
    </Box>
  );
};

export default NoteList;
