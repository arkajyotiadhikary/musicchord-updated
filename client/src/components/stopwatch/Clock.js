import "./clock.css";
const Clock = (props) => {
    return (
        <>
            <div className="timer d-flex justify-content-center my-1">
                <svg viewBox="0 0 100 100" width="200" height="195">
                    <g transform="translate(50 50)">
                        <circle
                            id="dial"
                            cx="0"
                            cy="0"
                            r="42"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeDasharray="0.3 1.898"
                        ></circle>
                        <use href="#dial" transform="scale(-1 1)"></use>

                        <g
                            className={!props.isPause ? "" : "rotate"}
                            transform="rotate(0)"
                        >
                            <g transform="translate(0 -50)">
                                <path
                                    d="M -2.25 0 h 4.5 l -2.25 2.5 l -2.25 -2.5"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </g>
                        </g>
                        <g transform="rotate(45)">
                            <g
                                className="mark"
                                transform="translate(0 0)"
                                opacity="0"
                            >
                                <g transform="translate(0 -1)">
                                    <circle r="1" fill="currentColor"></circle>
                                </g>
                            </g>
                        </g>

                        <g transform="translate(0 20)">
                            <g
                                className={
                                    !props.isPause ? "small-rotation" : ""
                                }
                                transform="rotate(0)"
                            >
                                <path
                                    d="M 0 -1 v -4.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.4"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </g>
                            <circle
                                r="7"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.4"
                            ></circle>
                            <circle
                                r="1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.4"
                            ></circle>
                        </g>

                        <text
                            textAnchor="middle"
                            fill="currentColor"
                            dominantBaseline="middle"
                            fontSize="10"
                        >
                            {props.times.hours}:{props.times.minutes}:
                            {props.times.seconds}
                        </text>
                    </g>
                </svg>
            </div>
        </>
    );
};

export default Clock;
