import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
    <div className="NavBar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Rules">Rules</Link>
        </li>
        <li>
            <Link to="/Scorecard">Scorecard</Link>
        </li>
    </div>
    );
}
export default NavBar;