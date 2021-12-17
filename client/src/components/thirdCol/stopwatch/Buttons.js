const Buttons = () => {
    return (
        <div className="pomodoro-buttons d-flex justify-content-center">
            <button className="button-pomodoro btn border-dark px-2">
                Pomodoro
            </button>
            <button className="button-break btn border-dark px-2  mx-4">
                Break
            </button>
            <button className="button-long-break btn border-dark px-2">
                Long Break
            </button>
        </div>
    );
};

export default Buttons;
