import { RouteObject, Navigate } from "react-router-dom"
import App from "../App"
import { Alumnos, Contact, DetalleAlumno, FormularioFormik, RickMorty } from "../views"
import MainLayout from "../layouts/MainLayout"

const checkIsAdmin = (): boolean => Math.random() > 0.5

const protectRoute = (element: JSX.Element): JSX.Element => {
    if (checkIsAdmin()) return element
    return <Navigate to="/" />
}

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "alumnos",
                element: <Alumnos />,
            },
            {
                path: "formularios",
                element: <FormularioFormik />,
            },
            {
                path: "alumnos/:id",
                element: <DetalleAlumno />,
            },
            {
                path: "contacto",
                element: <Contact />,
                children: [
                    {
                        path: "hola",
                        element: <h1>Hola mundo!</h1>,
                    },
                ],
            },
            {
                path: "rickmorty",
                element: <RickMorty />
            },
            {
                path: "protegida",
                element: protectRoute(<h3>Ruta protegida</h3>),
            },
            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
]

export default routes
