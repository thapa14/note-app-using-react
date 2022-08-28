import React, { useState } from "react";
import "./Cards.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { deleteNote, openNote } from "../../action";

function Cards({ elem, changeNoteIndex }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const dispatch = useDispatch();
  const { id, title, content } = elem;

  return (
    <>
      <div className="col-10 col-md-4 col-lg-3 mx-auto mx-md-0">
        <div id="notes-wrapper">
          <div className="notes">
            <h4>{title}</h4>
            <p
              id="note-content-id"
              onClick={() => {
                document
                  .getElementById("note-content-id")
                  .classList.add("overflowx");
                document
                  .getElementById("note-content-id")
                  .classList.remove("overflow");
              }}
            >
              {content}
            </p>
          </div>
          <div className="details-menu-section d-flex justify-content-end align-items-center">
            <MoreHorizIcon
              className="note-menu-icon"
              onClick={() => setMenuVisibility(!menuVisibility)}
            />
            {menuVisibility && (
              <div className="menu d-flex flex-column">
                <button
                  type="button"
                  className="btn menu-btn text-capitalize"
                  onClick={() => {
                    document
                      .getElementById("editNoteModal")
                      .classList.add("noteEdit");
                    dispatch(openNote(id));
                    setMenuVisibility(false);
                    changeNoteIndex(id);
                  }}
                >
                  edit
                </button>
                <button
                  className="btn menu-btn text-capitalize"
                  onClick={() => {
                    dispatch(deleteNote(id));
                    setMenuVisibility(false);
                  }}
                >
                  delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
