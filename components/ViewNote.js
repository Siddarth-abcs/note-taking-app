import { Box, Modal, Button } from "@mui/material";
import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";

const ViewNote = ({ open, handleClose, note, editNote, deleteNote }) => {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!open) {
      setEditMode(false);
    }
  }, [open]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    deleteNote(note.id);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        className="p-4 bg-white max-w-md max-h-screen overflow-auto"
        style={{
          width: "90%",
          height: "80%",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
        }}
      >
        {editMode ? (
          <NoteForm
            open={open}
            handleClose={handleClose}
            note={note}
            saveNote={(updatedNote) => {
              editNote(updatedNote);
              setEditMode(false);
              handleClose();
            }}
          />
        ) : (
          <>
            <h2 className="text-center">View Note</h2>
            <p>
              <strong>Title:</strong> {note?.title}
            </p>
            <p>
              <strong>Content:</strong>
            </p>
            <Box
              className="max-h-96 overflow-y-auto p-2 border rounded"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              <p>{note?.content}</p>
            </Box>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(note?.timestamp).toLocaleString()}
            </p>
            <div className="text-center">
              <Button variant="contained" onClick={handleEdit} className="mt-2">
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                className="mt-2 ml-2"
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ViewNote;
