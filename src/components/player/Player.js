// Importing Font awesome Icon
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPlay, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range"/>
                <p>End time</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon className="play" icon={faPlay} size="2x"/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
        </div>
    )
}

export default Player