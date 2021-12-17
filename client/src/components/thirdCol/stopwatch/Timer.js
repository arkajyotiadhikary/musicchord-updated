const Timer = () => {
    return (
        <div className="pomodoro-timer ">
            <div className="time text-center">12:00</div>
            <div className="button-stop d-flex justify-content-center text-center w-100">
                <button className="pomodoro-stop btn border-dark w-50">
                    Stop
                </button>
            </div>
        </div>
    );
};

export default Timer;
