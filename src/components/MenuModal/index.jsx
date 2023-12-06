/* eslint-disable react/prop-types */
import styled from "styled-components";
import NavbarLinks from "../NavbarLinks";
import NavbarLogin from "../NavbarLogin";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const MenuModal = (props) => {
    const modal = document.getElementById('modalMenu');
    const [xClicked, setXClicked] = useState(false);

    const handleCloseModal = () => {
        document.body.classList.remove('modal-open');
        setXClicked(true);
    }

    if (xClicked == true) {
        modal.classList.add('closing');
        
        setTimeout(() => {
            modal.classList.remove('closing');
            props.setOpen(false)
            setXClicked(false)
        }, 650);
    }

    return (
        <>
            <Menu__container id="modalMenu">
                <Modal__close onClick={() => handleCloseModal()}><GrClose color="white"/></Modal__close>
                <NavbarLogin classe={'hamburguer'}/>
                <NavbarLinks classe={'hamburguer'}/>
            </Menu__container>
        </>
    )
}

const Menu__container = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-primary-2);
    width: 80%;
    height: 100%;
    animation: open forwards .6s;

    @keyframes open {
        0% {
            right: -100%;
        }

        100% {
            right: 0%;
        }
    }

    &.closing {
        animation: close forwards .6s;
        
        @keyframes close {
            0% {
                right: 0%;
            }

            100% {
                right: -100%;
            }
        }
    }
`;

const Modal__close = styled.button`
    position: absolute;
    top: 2%;
    right: 2.5%;

    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
`;

export default MenuModal;