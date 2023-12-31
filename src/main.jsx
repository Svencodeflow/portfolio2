import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root.jsx";
import Error from "./routes/Error.jsx";
import About from "./routes/About.jsx";
import Projekte from "./routes/Projekte.jsx";
import Kontakt from "./routes/Kontakt";
import Datenschutz from "./routes/Datenschutz";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },
    {
        path: "/projekte",
        element: <Projekte />,
        errorElement: <Error />,
    },
    {
        path: "/kontakt",
        element: <Kontakt />,
        errorElement: <Error />,
    },
    {
        path: "/datenschutz",
        element: <Datenschutz />,
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
