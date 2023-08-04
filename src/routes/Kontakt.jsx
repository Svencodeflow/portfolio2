import Navbar from "./Navbar";
import React from "react";
import "../css/kontakt.css";

export default function Kontakt() {
    return (
        <div className="kontakt">
            <Navbar />
            <div className="form">
                <form className="container">
                    <h1>Get in touch</h1>
                    <div className="email block">
                        <label htmlFor="frm-email">Email</label>
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className="block phone">
                        <label htmlFor="frm-phone">Phone</label>
                        <input
                            id="frm-phone"
                            type="text"
                            name="phone"
                            autoComplete="tel"
                            required
                        />
                    </div>
                    <div className="name block">
                        <div>
                            <label htmlFor="frm-first">First Name</label>
                            <input
                                id="frm-first"
                                type="text"
                                name="first"
                                autoComplete="given-name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="frm-last">Last Name</label>
                            <input
                                id="frm-last"
                                type="text"
                                name="last"
                                autoComplete="family-name"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                    <div className="message block">
                        <label htmlFor="frm-message">Message</label>
                        <textarea
                            id="frm-message"
                            rows="6"
                            name="message"
                            placeholder="Ihre Nachricht an mich..."
                        ></textarea>
                    </div>
                    <div className="button block">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}