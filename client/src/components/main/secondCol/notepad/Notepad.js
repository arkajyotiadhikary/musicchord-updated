import React, { useState, useEffect } from "react";

class NotePad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesText: "",
            noteList: [],
        };
    }

    onSaveNotes = () => {
        const notes = document.getElementById("notes-value").value;
        const obj = { notes };
        this.setState({
            notesText: "",
            noteList: this.state.noteList.concat(obj),
        });
        console.log("noteList", this.state.noteList);
    };

    onChangeValue = () => {
        const notes = document.getElementById("notes-value").value;
        this.setState({
            notesText: notes,
        });
    };

    onDeleteNote = (index) => {
        const deleteNotes = this.state.noteList.filter(index);
        this.setState({
            noteList: deleteNotes,
        });
    };

    render() {
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
                            value={this.state.notesText}
                            onChange={this.onChangeValue}
                        />
                        <button
                            className="save-button btn btn-sm btn-primary m-2"
                            onClick={this.onSaveNotes}
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
                    {this.state.noteList.length > 0
                        ? this.state.noteList.map((item, index) => (
                              <div
                                  key={index}
                                  className={`notes-item text-break border shadow-sm p-2 ${index}`}
                              >
                                  <div className="note-head d-flex justify-content-between align-items-center">
                                      <h5>Note {index}</h5>
                                      <button
                                          className="delete-note btn btn-sm"
                                          onClick={() =>
                                              this.onDeleteNote(index)
                                          }
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
    }
}

export default NotePad;
