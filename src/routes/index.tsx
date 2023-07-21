import { RouteObject } from "react-router-dom"
import { Dashboard } from "../layouts"
import { Clientes, Juego } from "../views"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                id: "Principal",
                element: <h1>Principal</h1>
            },
            {
                path: "clientes",
                id: "Clientes",
                element: <Clientes />
            },
            {
                path: "play",
                id: "Let's play!",
                element: <Juego />
            }
        ]
    },
]

export default routes
