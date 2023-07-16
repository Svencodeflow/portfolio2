import Navbar from "./Navbar";
import "../css/main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//logos
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import react from "../images/react.svg";
import node from "../images/nodedotjs.svg";
import express from "../images/express.svg";
import maria from "../images/mariadb-color.svg";
import mongo from "../images/mongodb.svg";
import mongoos from "../images/mongoose.svg";
import pokeding from "../images/pokedingneu.svg";
import moviebovie from "../images/moviebovie1.svg";

export default function Root() {
    const [hover, setHover] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const onHover = (index) => {
        setHover((prevHover) =>
            prevHover.map((h, i) => (i === index ? !h : h))
        );
    };

    const onLeave = (index) => {
        setHover((prevHover) =>
            prevHover.map((h, i) => (i === index ? !h : h))
        );
    };

    return (
        <div>
            <Navbar />
            <article className="header">
                <p>Hallo</p>
                <h2>Willkommen auf meinem</h2>
                <h1 className="tech_stack skill-style">Portfolio</h1>
            </article>

            <main id="main">
                <section className="Skills">
                    <h1>
                        <span className="tech_stack skill-style">
                            Techstack
                        </span>
                    </h1>
                    <div className="skill">
                        <ul>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(0)}
                                onMouseLeave={() => onLeave(0)}
                            >
                                <img src={html} alt="html logo" />
                                {hover[0] && (
                                    <p className="skill-style">HTML</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(1)}
                                onMouseLeave={() => onLeave(1)}
                            >
                                <img src={css} alt="css logo" />
                                {hover[1] && <p className="skill-style">CSS</p>}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(2)}
                                onMouseLeave={() => onLeave(2)}
                            >
                                <img src={js} alt="js logo" />
                                {hover[2] && (
                                    <p className="skill-style">JavaScript</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(3)}
                                onMouseLeave={() => onLeave(3)}
                            >
                                <img src={react} alt="react logo" />
                                {hover[3] && (
                                    <p className="skill-style">React</p>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="skill_two">
                        <ul>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(4)}
                                onMouseLeave={() => onLeave(4)}
                            >
                                <img src={node} alt="node logo" />
                                {hover[4] && (
                                    <p className="skill-style">Node</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(5)}
                                onMouseLeave={() => onLeave(5)}
                            >
                                <img src={express} alt="express logo" />
                                {hover[5] && (
                                    <p className="skill-style">Express</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(6)}
                                onMouseLeave={() => onLeave(6)}
                            >
                                <img src={maria} alt="maria logo" />
                                {hover[6] && (
                                    <p className="skill-style">MariaDB</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(7)}
                                onMouseLeave={() => onLeave(7)}
                            >
                                <img src={mongo} alt="mongo logo" />
                                {hover[7] && (
                                    <p className="skill-style">MongoDB</p>
                                )}
                            </li>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => onHover(8)}
                                onMouseLeave={() => onLeave(8)}
                            >
                                <img src={mongoos} alt="mongoos logo" />
                                {hover[8] && (
                                    <p className="skill-style">Mongoose</p>
                                )}
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer id="footer">
                <div className="footer_text">
                    <Link to="https://www.pokedex.svenschlaak.de">
                        <img src={pokeding} alt="Pokemon api seite" />
                    </Link>
                    <h2>
                        <span className="skill-style">Projekte</span>
                    </h2>
                    <Link to="http://moviebovie.svenschlaak.de/">
                        <img src={moviebovie} alt="Movie Datenbank" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}
