import StarRating from "./StarRating";

function Dialog(props) {
    return (
        props.isVisible &&
        <div className="dialog">
            <h1>Rate this dialog</h1>
            <StarRating />
            <button onClick={() => props.closeHandler(false)}>Close</button>
        </div>
    );
}

export default Dialog;