import { Outlet, NavLink } from "react-router-dom"
import styles from "./MainLayout.module.scss"

const MainLayout = () => {
    return (
        <div className={styles.MainLayout}>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/alumnos"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Alumnos
                </NavLink>
                <NavLink
                    to="/formularios"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Formularios
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout
