// import "./Home.css"
import styles from "./Home.module.css"

const Home = () => {
    return (
        // <div className="home">
        <div className={`${styles.home} ${styles.dynamic}`}>
            <h2>Home</h2>
            <p style={{ backgroundColor: "rgba(200, 200, 200, 0.3)" }}>Esto es un texto auxiliar</p>
            <button>Click</button>
        </div>
    )
}

export default Home
