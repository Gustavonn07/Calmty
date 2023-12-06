import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburguer = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <RxHamburgerMenu color="white" size={26} onClick={() => handleOpen()}/>

            {
                open && (
                    
                )
            }
        </>
    )
}

export default Hamburguer;