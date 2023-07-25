import { Link } from "react-router-dom";
import pokeding from "../images/pokedingneu.svg";
import moviebovie from "../images/moviebovie1.svg";
import "../css/projekte.css";
import Navbar from "./Navbar";

export default function Projekte() {
  return (
    <section className="Projekte">
      <Navbar />
      <h1>
        Meine<span className="skill-style">Projekte</span>
      </h1>
      <div className="Projekte_anzeige">
        <Link to="https://www.pokedex.svenschlaak.de">
          <img src={pokeding} alt="Pokemon api seite" />
        </Link>
        <Link to="http://moviebovie.svenschlaak.de/">
          <img src={moviebovie} alt="Movie Datenbank" />
        </Link>
      </div>
    </section>
  );
}
