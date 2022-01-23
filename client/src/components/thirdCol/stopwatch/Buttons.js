const Buttons = (props) => {
    const { handleWindow } = props;

    const handleClick = (e) => {
        handleWindow(e.target.value);
    };

    return (
        <div className="pomodoro-buttons d-flex justify-content-center">
            <button
                className="button-pomodoro btn btn-sm border-dark px-2"
                value="Pomodoro"
                onClick={handleClick}
            >
                Pomodoro
            </button>
            <button
                className="button-break btn btn-sm border-dark px-2  mx-4"
                value="Break"
                onClick={handleClick}
            >
                Break
            </button>
            <button
                className="button-long-break btn btn-sm border-dark px-2"
                value="Long Break"
                onClick={handleClick}
            >
                Long Break
            </button>
        </div>
    );
};

export default Buttons;
