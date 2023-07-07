const Nieto = ({ ajustes }: any) => {
    return (
        <div>
            <h4>Nieto</h4>
            <button
                style={{
                    backgroundColor: ajustes.modoOscuro ? "#02E8AF" : "#121212",
                }}
            >
                Botón
            </button>
        </div>
    )
}

export default Nieto
