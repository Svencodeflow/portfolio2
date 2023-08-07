import Imap from "imap";

const imap = new Imap({
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    tls: process.env.MAIL_TLS,
});

const openInbox = (callback) => {
    imap.openBox("INBOX", true, callback);
};

const getEmails = () => {
    return new Promise((resolve, reject) => {
        imap.once("ready", () => {
            openInbox((error, box) => {
                if (error) {
                    reject(error);
                }

                searchEmail((error, results) => {
                    if (error) {
                        reject(error);
                    }

                    let emails = [];

                    if (results.length > 0) {
                        const f = imap.fetch(results, { bodies: "" });

                        f.on("message", (msg, seqno) => {
                            msg.on("body", (stream, info) => {
                                let buffer = "";

                                stream.on("data", (chunk) => {
                                    buffer += chunk.toString("utf8");
                                });

                                stream.once("end", () => {
                                    emails.push(
                                        parseEmail(Imap.parseHeader(buffer))
                                    );
                                });
                            });
                        });

                        f.once("error", (error) => {
                            reject(error);
                        });

                        f.once("end", () => {
                            resolve(emails);
                        });
                    } else {
                        resolve(emails);
                    }
                });
            });
        });

        imap.once("error", (error) => {
            reject(error);
        });

        imap.once("end", () => {
            closeInbox();
        });

        imap.connect();
    });
};

const searchEmail = (callback) => {
    imap.search(["ALL"], callback);
};

export default getEmails;
