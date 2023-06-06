import Button from "./Button";

function NumberOfPlayers () {
    return (
        <div>
            <p>How many players?</p>
            <input type="number" 
            inputmode="numeric" 
            pattern="[0-9]*"
            ></input>
            <Button text="Add" />
        </div>
    );
}

export default NumberOfPlayers;