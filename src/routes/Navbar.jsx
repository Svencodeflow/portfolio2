import { Link } from "react-router-dom";
import github from "../images/github-original.svg";
import linkedin from "../images/linkedin-plain.svg";

import "../css/navbar.css";

export default function Navbar() {
    return (
        <div id="navbar">
            <ul>
                <li>
                    <h1>SVEN SCHLAAK</h1>
                    <div id="description">
                        <div className="line">
                            <Link to="/">HOME</Link>
                            <Link to="/projekte">PROJEKTE</Link>
                            <Link to="/about">ÜBER MICH</Link>
                        </div>
                        <div className="logos">
                            <Link to="https://github.com/Svencodeflow">
                                <img src={github} alt="Github Logo" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/sven-schlaak">
                                <img src={linkedin} alt="linkedin Logo" />
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
