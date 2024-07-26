import { useState, useEffect } from "react";
import { TextField, Button, Box, Modal } from "@mui/material";

const NoteForm = ({ open, handleClose, note, saveNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);

  const handleSubmit = () => {
    saveNote({
      ...note,
      title,
      content,
      timestamp: new Date().toISOString(),
    });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="p-4 bg-white mx-auto max-w-md">
        <h2>{note ? "Edit Note" : "New Note"}</h2>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          rows={4}
          className="mt-2"
        />
        <Button variant="contained" onClick={handleSubmit} className="mt-2">
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default NoteForm;
