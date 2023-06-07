import { useState } from "react";
import Star from "./Star";

const labels = {
    [0]: "Not rated",
    [1]: "Terrible",
    [2]: "Bad",
    [3]: "Good",
    [4]: "Great",
    [5]: "Excellent"
};

function StarRating() {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <div className="rating">
            <div>
                {Array(5).fill(0).map((val, index) =>
                    <Star key={index} isActive={index+1 <= selectedStars} onClick={() => setSelectedStars(index+1)} />)}
            </div>
            <h2>{labels[selectedStars]}</h2>
        </div>
    );
}

export default StarRating;