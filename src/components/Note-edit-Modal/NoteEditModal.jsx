import React from "react";
import "./NoteEditModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { updateNote } from "../../action";

function NoteEditModal({ inputData, changeInputData, noteIndex }) {
  const dispatch = useDispatch();
  const inputDataUpdate = (e) => {
    changeInputData(() => {
      return {
        ...inputData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const closeModal = () => {
    document.getElementById("editNoteModal").classList.remove("noteEdit");
    changeInputData({
      title: "",
      content: "",
    });
  };
  return (
    <>
      {/* // <!-- Modal --> */}
      <div className="modal fade show" id="editNoteModal">
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <div className="modal-head d-flex justify-content-between align-items-center">
              <h5>Update Note</h5>
              <CloseIcon className="close-modal" onClick={closeModal} />
            </div>

            <div className="note-update-area d-flex flex-column mt-3">
              <input
                type="text"
                className="inputField update-input-field"
                id="note-title-update"
                name="title"
                spellCheck="false"
                onChange={inputDataUpdate}
              />
              <textarea
                className="inputField update-input-field"
                id="note-content-update"
                name="content"
                spellCheck="false"
                onChange={inputDataUpdate}
              />
            </div>
            <div className="note-update-footer d-flex justify-content-end gap-4 mt-3">
              <button
                type="button"
                className="btn  btn-lg submit-btn"
                onClick={() => {
                  dispatch(updateNote(noteIndex, inputData));
                  changeInputData({
                    title: "",
                    content: "",
                  });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteEditModal;
