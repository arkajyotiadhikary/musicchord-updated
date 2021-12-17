import WeatherApp from "../weather/WeatherApp";
import Pomodoro from "./stopwatch/Pomodoro";

const ThirdCol = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-between">
            <WeatherApp />
            <Pomodoro />
        </div>
    );
};

export default ThirdCol;
