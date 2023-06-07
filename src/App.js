import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
    const [isDialogVisible, setDialogVisible] = useState(false);

    return (
        <>
            <main>
                <StarRating />
            </main>
            <Dialog isVisible={isDialogVisible} closeHandler={setDialogVisible} />
            <button 
                id="dialog-toggle-btn" 
                onClick={() => setDialogVisible(!isDialogVisible)}
            >{isDialogVisible ? "Hide Dialog" : "Show Dialog"}</button>
        </>
    );
}

export default App;
