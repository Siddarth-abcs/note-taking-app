"use client"; // Add this line at the top

import { useState, useEffect } from "react";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";
import ViewNote from "../components/ViewNote";

const IndexPage = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [openView, setOpenView] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if (savedNotes.length === 0) {
      // Initialize with dummy data if local storage is empty
      const dummyNotes = [
        {
          id: 1,
          title: "Note 1",
          content: "This is the content of the first note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 2,
          title: "Note 2",
          content: "This is the content of the second note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 3,
          title: "Note 3",
          content: "This is the content of the third note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 4,
          title: "Note 4",
          content: "This is the content of the fourth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 5,
          title: "Note 5",
          content: "This is the content of the fifth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 6,
          title: "Note 6",
          content: "This is the content of the sixth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 7,
          title: "Note 7",
          content: "This is the content of the seventh note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 8,
          title: "Note 8",
          content: "This is the content of the eighth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 9,
          title: "Note 9",
          content: "This is the content of the ninth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 10,
          title: "Note 10",
          content: "This is the content of the tenth note.",
          timestamp: new Date().toISOString(),
        },
        {
          id: 11,
          title: "Note 11",
          content: "This is the content of the eleventh note.",
          timestamp: new Date().toISOString(),
        },
      ];
      localStorage.setItem("notes", JSON.stringify(dummyNotes));
      setNotes(dummyNotes);
    } else {
      setNotes(savedNotes);
    }
  }, []);

  const saveNote = (note) => {
    const updatedNotes = note.id
      ? notes.map((n) => (n.id === note.id ? note : n))
      : [...notes, { ...note, id: Date.now() }];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setOpenForm(true);
  };

  const viewNote = (note) => {
    setCurrentNote(note);
    setOpenView(true);
  };

  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold mt-10 mb-4">Simple Note Taking App</h1>
      <NoteList
        notes={notes}
        viewNote={viewNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpenForm(true)}
        className="fixed bottom-4 right-4"
      >
        <AddIcon />
      </Fab>
      <NoteForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        note={currentNote}
        saveNote={(updatedNote) => {
          saveNote(updatedNote);
          setOpenForm(false);
        }}
      />
      <ViewNote
        open={openView}
        handleClose={() => setOpenView(false)}
        note={currentNote}
        editNote={(updatedNote) => {
          saveNote(updatedNote);
          setOpenView(false);
        }}
        deleteNote={deleteNote}
      />
    </Container>
  );
};

export default IndexPage;
