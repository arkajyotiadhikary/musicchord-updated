import Button from "./Button";
import {
    faCloudRain,
    faWind,
    faFire,
    faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const ButtonBar = () => {
    return (
        <div className="card border-0">
            <div className="d-flex justify-content-between mb-3 mx-3">
                <Button font={faCloudRain} />
                <Button font={faWind} />
                <Button font={faFire} />
                <Button font={faSnowflake} />
            </div>
        </div>
    );
};

export default ButtonBar;
