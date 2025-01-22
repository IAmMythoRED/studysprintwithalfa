import { useEffect } from "react"
import { useState } from "react"

export function RandomImage({randomNumb}) {

    
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        import(`./assets/photos/${randomNumb}.jpg`).then((image) => {
            setImgSrc(image.default);
        }).catch((err) => console.error("Image loading error: ", err));
    }, [randomNumb]);

    return(
        <img src={imgSrc} alt="CuteBabyPic" className="w-60 h-[180px] m-auto mt-20 rounded-[5px] shadow-lg"/>
    )

}