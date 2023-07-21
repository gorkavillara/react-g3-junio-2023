import React from "react"
import styles from "./CustomButton.module.scss"

interface IProps extends React.PropsWithChildren {
    onClick: () => void
}

const CustomButton = ({ children, onClick }: IProps) => {
    return (
        <button onClick={onClick} className={styles.CustomButton}>
            {children}
        </button>
    )
}

export default CustomButton
