import { FaStar } from "react-icons/fa";

function Star(props) {
    return (
        <FaStar className={"star" + (props.isActive ? " active" : "")} onClick={props.onClick}/>
    );
}

export default Star;