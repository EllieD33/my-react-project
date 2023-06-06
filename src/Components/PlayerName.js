import Button from "../Components/Button";

function PlayerName(){
    return (
    <div>
        <div>
            <p>Add player names</p>
            <input type="text" maxlength="15" id="player-name"></input>
        <Button text="Add" />
        </div>
    </div>
    );
}

export default PlayerName;