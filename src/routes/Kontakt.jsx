import Navbar from "./Navbar";
import React from "react";
import "../css/kontakt.css";
import { Link } from "react-router-dom";

export default function Kontakt() {
    return (
        <div className="kontakt">
            <Navbar />
            <div className="form">
                <form className="container">
                    <h1>Kontaktiere mich</h1>
                    <div className="name block">
                        <div>
                            <input
                                id="frm-first"
                                type="text"
                                name="first"
                                autoComplete="given-name"
                                placeholder="Vor und Nachname"
                                required
                            />
                        </div>
                    </div>
                    <div className="firma block">
                        <div>
                            <input
                                id="frm-last"
                                type="text"
                                name="last"
                                autoComplete="family-name"
                                placeholder="Firma"
                                required
                            />
                        </div>
                    </div>
                    <div className="block phone">
                        <input
                            id="frm-phone"
                            type="text"
                            name="phone"
                            autoComplete="tel"
                            placeholder="Telefonnummer"
                            required
                        />
                    </div>
                    <div className="email block">
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="message block">
                        <textarea
                            id="frm-message"
                            rows="6"
                            name="message"
                            width="400px"
                            height="500px"
                            placeholder="Ihre Nachricht an mich..."
                        ></textarea>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            required
                        />
                        <label htmlFor="checkbox">
                            Ich habe die{" "}
                            <Link to="/datenschutz">Datenschutzerklärung</Link>{" "}
                            gelesen und akzeptiere diese.
                        </label>
                    </div>
                    <div>
                        <button className="button" type="submit">
                            Senden
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
