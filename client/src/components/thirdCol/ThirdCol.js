import WeatherApp from "../weather/WeatherApp";
import StopwatchApp from "../stopwatch/Stopwatch";

const ThirdCol = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-between">
            <WeatherApp />
            <StopwatchApp />
        </div>
    );
};

export default ThirdCol;
