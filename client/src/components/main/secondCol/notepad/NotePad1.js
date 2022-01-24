import React, { useState, useEffect } from "react";

const Notepad1 = () => {
    const [notesText, setNotesText] = useState("");
    const [notesList, setNotesList] = useState([]);

    const handleSave = () => {
        const notes = document.getElementById("notes-value").value;
        const obj = { notes };

        setNotesList([...notesList, obj]);
        setNotesText("");
        console.log("noteList", notesList);
    };
    const handleChange = () => {
        const notes = document.getElementById("notes-value").value;
        setNotesText(notes);
    };

    // Have to fix this later
    const handleDelete = (index) => {};

    return (
        <div className="Note-pad mt-4">
            <div className="some-test">
                <div>
                    <textarea
                        className="form-control"
                        style={{ resize: "none" }}
                        rows="3"
                        cols="35"
                        placeholder="Enter Notes here"
                        id="notes-value"
                        value={notesText}
                        onChange={handleChange}
                    />
                    <button
                        className="save-button btn btn-sm btn-primary m-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
            <p>Notes</p>
            <div
                className="display-notes mt-2 overflow-auto border"
                style={{ height: "16rem" }}
            >
                {notesList.length > 0
                    ? notesList.map((item, index) => (
                          <div
                              key={index}
                              className={`notes-item text-break border shadow-sm p-2 ${index}`}
                          >
                              <div className="note-head d-flex justify-content-between align-items-center">
                                  <h5>Note {index}</h5>
                                  <button
                                      className="delete-note btn btn-sm"
                                      onClick={handleDelete}
                                  >
                                      X
                                  </button>
                              </div>
                              {item.notes}
                          </div>
                      ))
                    : ""}
            </div>
        </div>
    );
};
export default Notepad1;
