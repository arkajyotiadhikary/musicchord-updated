import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";

const InputPanel = (prop) => {
    const inputField = useRef(null);
    const { handleUserMessages } = prop;

    const [input, setInput] = useState("");

    const handleInput = () => {
        setInput(inputField.current.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.length) {
            handleUserMessages(input, localStorage.getItem("username"));
            setInput("");
        }
    };

    return (
        <div>
            <form className="chat-input d-flex" onSubmit={handleSubmit}>
                <input
                    ref={inputField}
                    onChange={handleInput}
                    value={input}
                    className="form-control rounded-pill"
                    placeholder="Write a message"
                    autoFocus
                />
                <button
                    type="submit"
                    className="btn rounded-pill ms-3 answer-btn"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        </div>
    );
};

export default InputPanel;
