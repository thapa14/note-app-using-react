import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NoteEditModal from "./components/Note-edit-Modal/NoteEditModal";

function App() {
  const [noteIndex, changeNoteIndex] = useState(null);
  const [inputData, changeInputData] = useState({
    title: "",
    content: "",
  });

  // console.log(noteIndex);
  return (
    <>
      <NoteEditModal
        inputData={inputData}
        changeInputData={changeInputData}
        noteIndex={noteIndex}
      />
      <Home
        inputData={inputData}
        changeInputData={changeInputData}
        changeNoteIndex={changeNoteIndex}
      />
    </>
  );
}

export default App;
