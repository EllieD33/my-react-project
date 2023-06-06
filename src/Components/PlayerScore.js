import { useState } from "react";
import './PlayerScore.css';

function PlayerScore({text}){
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function handleAsaf() {
        setCount(count + 25);
    }

    const handleOnChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddQuantity = () => {
        if (quantity) setCount(count + parseInt(quantity, 10));
    };

    const handleResetCounter = () => {
        setCount(0);
        setQuantity(0);
    };

    return (
        <div className="Player-scorecard">
            <h1>{text}</h1>
            <div>
                <div className="Text-Container">
                    <p>{count}</p>
                </div>
                <div className="Score-btns" >
                    <input
                        type="text"
                        value={quantity}
                        onChange={handleOnChange}
                        className={"input"}
                    />
                    <button className={"Btn-small"} onClick={handleAddQuantity}>
                        Add
                    </button>                
                    <button  name="Asaf" className={"Btn-small"} onClick={handleAsaf}>Asaf!</button>
                </div>
                <button name="Reset" className={"Btn-reset"}  onClick={handleResetCounter}>
                Reset
                </button>
            </div>
        </div>
    );
}

export default PlayerScore;