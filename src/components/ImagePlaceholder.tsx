import { useState, useEffect } from "react"

interface IProps {
    src: string
    alt?: string
}

const placeHolderUrl = "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg"

const ImagePlaceholder = ({ src, alt }: IProps) => {
    const [imageUrl, setImageUrl] = useState("")
    useEffect(() => {
        setImageUrl(src)
    }, [src])
    const handleError = () => {
        // A través de la ref -> cambiar la src -> IMPERATIVO
        setImageUrl(placeHolderUrl)
    }
    return <img onError={handleError} src={imageUrl} alt={alt || ""} />
}

export default ImagePlaceholder
