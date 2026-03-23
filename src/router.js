import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./page/Home";
import Check from "./page/Check";
import Edit from "./page/Edit";
import NotFound from "./page/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: "Check", Component: Check},
            {path: "Edit", Component: Edit},
            {path: "*", Component:NotFound}
        ],
    },
]);

export default router;