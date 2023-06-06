import NavBar from "../Components/Navigation/NavBar";
// import PlayerName from "../Components/PlayerName";
import PlayerScore from "../Components/PlayerScore";
// import NumberOfPlayers from "../Components/NumberOfPlayers";

const Scorecard = () => {
    return (
        <div className="App-pages">
            <NavBar/>
            {/* <div>
                <NumberOfPlayers />
            </div>
            <div>
                <PlayerName />
            </div> */}
            <div className="flex-scorecards">
                <PlayerScore text="Player 1" />
                <PlayerScore  text="Player 2" />
                <PlayerScore text="Player 3" />
                <PlayerScore  text="Player 4" />
            </div>
        </div>
    );
};

export default Scorecard;