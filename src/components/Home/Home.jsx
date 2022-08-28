import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../action";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Home({ inputData, changeInputData, changeNoteIndex }) {
  const [addNoteVisibility, changeAddNoteVisibility] = useState(false);
  const [screenwidth, setScreenWidth] = useState(window.innerWidth);
  const list = useSelector((state) => state.noteReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const noteInput = (e) => {
    changeInputData(() => {
      return {
        ...inputData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addNotes = (e) => {
    e.preventDefault();
    dispatch(addNote(inputData));
    changeAddNoteVisibility(false);

    changeInputData({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="note-app-body ">
        <h1 className="title text-uppercase text-center ">notes app</h1>
        <div className="note-app-wrapper p-3">
          <div className="row h-100">
            {(addNoteVisibility || screenwidth > 576) && (
              <div className="left-div col-4 col-lg-3">
                <div className="add-note-container ">
                  <form
                    className="note-form d-flex flex-column"
                    onSubmit={addNotes}
                  >
                    <input
                      id="note-title"
                      className="inputField home-inputField"
                      name="title"
                      type="text"
                      placeholder="Title"
                      value={inputData.title}
                      onChange={noteInput}
                    />
                    <textarea
                      id="note-content"
                      className="inputField home-inputField"
                      name="content"
                      placeholder="type note here"
                      spellCheck="false"
                      value={inputData.content}
                      onChange={noteInput}
                      required
                    />
                    <input
                      id="add-note-btn"
                      className="inputField btn"
                      type="submit"
                      value="Add notes"
                    />
                  </form>
                  <CancelIcon
                    className="closeNoteIcon"
                    onClick={() => changeAddNoteVisibility(false)}
                  />
                </div>
              </div>
            )}

            <div className="right-div mx-auto col-12 col-sm-8 col-lg-9 h-100 mr-1">
              <div className="d-flex justify-content-start align-items-center mt-4 gap-5">
                <h1 className="text-uppercase mt-0 ">notes</h1>
                <AddCircleIcon
                  className="addnoteIcon"
                  onClick={() => changeAddNoteVisibility(true)}
                />
              </div>
              <div className="note-list px-3 mt-5 ">
                <div className="row gy-5 gx-md-3 gy-md-3 gx-lg-5 gy-lg-5">
                  {list.map((elem) => (
                    <Cards
                      key={elem.id}
                      elem={elem}
                      changeNoteIndex={changeNoteIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
