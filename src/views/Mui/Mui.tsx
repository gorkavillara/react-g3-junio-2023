import Button from "@mui/material/Button"
import MUIDialog from "./components/MUIDialog"

const Mui = () => {
    return (
        <div>
            <Button variant="contained" sx={{ backgroundColor: "red" }}>
                Mi botón
            </Button>
            <MUIDialog />
        </div>
    )
}

export default Mui
