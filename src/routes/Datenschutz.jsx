import Navbar from "./Navbar";
import "../css/datenschutz.css";

export default function Datenschutz() {
    return (
        <div>
            <Navbar />
            <div className="datenschutz">
                <h1>Datenschutzerklärung</h1>
                <div>
                    <h2>
                        Die im Kontaktformular gesendeten Daten werden an meine
                        E-Mail Adresse (contact@svenschlaak.de) weitergeleitet.
                        Die Nachrichten werden nur von mir gelesen und
                        beantwortet.
                    </h2>
                </div>
            </div>
        </div>
    );
}
