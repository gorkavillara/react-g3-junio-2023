import Modal from "./components/Modal"
import NavBar from "./components/NavBar"

const Bootstrap = () => {
    return (
        <>
            <NavBar />
            <div className="">
                <p>Bootstrap</p>
                <button type="button" className="btn btn-primary">
                    Primary
                </button>
                <Modal />
                <div className="row">
                    <div className="col-sm-6 col-md-4">Columna 2</div>
                    <div className="col-sm-6 col-md-10">Columna 3</div>
                </div>
            </div>
        </>
    )
}

export default Bootstrap
