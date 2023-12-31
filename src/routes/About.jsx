import Navbar from "./Navbar";
import sven from "../images/IMG_3907.jpeg";
import "../css/about.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

const longText = `Ich Sven Schlaak, 33 Jahre alt alleinerziehender Vater und komme aus Wesel. Ich
habe im Winter 2021 meine Ausbildung zum Berufskraftfahrer
erfolgreich abgeschlossen. Ich merkte jedoch schnell, dass
mir dieser Beruf zwar Spaß macht, aber nicht das ist, was
ich mein Leben lang machen möchte. Deshalb habe ich mich
dazu entschlossen, mich beruflich umzuorientieren und habe
die möglichkeiten die mir das Internet gab genutzt und
mich in dem Thema Programmierung zu informieren. Meine
affinität zu Computern und Technik hat mich schon immer
begleitet und ich habe mich schon immer für die Themen
interessiert. Ich habe mich dann dazu entschlossen, mich
bei Supercode zu bewerben. Ich habe mich für Supercode
entschieden, da ich die Möglichkeit habe, in einem
Bootcamp zu lernen und mich mit anderen Teilnehmern
auszutauschen. Leider wurde mir die Teilnahme an dem
Bootcamp verwehrt, da ich meine Ausbildung erst
abgeschlossen hatte. Durch einen Herzinfakt im Winter 2021
konnte mein Beruf als Berufskraftfahrer nicht mehr ausüben
und ich habe mich dazu entschlossen, mich weiterhin mit
dem Thema Programmierung zu beschäftigen. Ich habe mich
dann dazu entschlossen, mich in dem Thema Webentwicklung
zu vertiefen und bin ende 2022 dann zu Supercode gegangen
und habe dort das Bootcamp besucht.`;

const shortText = `Mein Bootcamp bei Supercode hat am 28.01.2023 begonnen und endete
am 10.07.2023. In dem Bootcamp habe ich HTML, CSS, JavaScript und
React im Frontend gelernt. Im Backend habe ich Node.js, Express.js
und MongoDB gelernt. In dem Bootcamp haben wir 3 Projekte
erstellt. Das erste Projekt war ein PokeDex welche über die
PokeAPI läuft. Dies wurde mit React erstellt. Das zweite Projekt
war eine MovieApp welche über die MovieDB läuft. Dies wurde
ebenfalls mit React erstellt. Beim dritten Projekt handelt es sich
um eine Finanz App welche mit React und MongoDB erstellt wurde. Im
Backend wurde Node.js und Express.js verwendet. Alle Projekte sind
auf GitHub und hier auf der Seite zu finden.`;

export default function About() {
  return (
    <div>
      <Navbar />
      <article className="header_about">
        <div className="header-text">
          <section className="header_text_one">
            <article>
              <h2>Meine Vergangenheit</h2>
              <ReactReadMoreReadLess
                charLimit={450}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
              >
                {longText}
              </ReactReadMoreReadLess>
            </article>
          </section>
          <section className="header_text_one">
            <article>
              <h2>Bootcamp</h2>
              <ReactReadMoreReadLess
                charLimit={450}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {shortText}
              </ReactReadMoreReadLess>
            </article>
          </section>
        </div>
        <div className="header-img">
          <img src={sven} alt="Sven Schlaak" />
        </div>
      </article>
    </div>
  );
}
