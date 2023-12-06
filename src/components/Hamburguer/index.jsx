import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuModal from "../MenuModal";

const Hamburguer = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        document.body.classList.add('modal-open');
    }

    return (
        <>
            <RxHamburgerMenu color="white" size={26} open={open} setOpen={setOpen} onClick={() => handleOpen()}/>

            {
                open && (
                    <MenuModal setOpen={setOpen} />
                )
            }
        </>
    )
}

export default Hamburguer;