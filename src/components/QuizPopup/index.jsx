import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import styled from "styled-components";

const QuizPopup = () => {
    const pop = document.getElementById('popup');
    const [xClickedPop, setXClickedPop] = useState(false);
    const [isOpenPop, setIsOpenPop] = useState(false);

    const handleOpenModalPop = () => {
        document.body.classList.add('pop-open');
        setIsOpenPop(true);
    }

    const handleCloseModalPop = () => {
        document.body.classList.remove('pop-open');
        setXClickedPop(true);
    }

    if (xClickedPop == true) {
        pop.classList.add('closing');
        
        setTimeout(() => {
            pop.classList.remove('closing');
            setIsOpenPop(false)
            setXClickedPop(false)
        }, 650);
    }

    return (
        <>
            <Popup__tutorial onClick={handleOpenModalPop}><FaRegQuestionCircle /></Popup__tutorial>
            {
                isOpenPop && (
                    <Popup__container id="popup">
                        <Popup__close onClick={() => handleCloseModalPop()}><GrClose color="white"/></Popup__close>

                        <Popup__text>
                            Para que serve o quiz? O quiz é uma forma divertida para clientes que querem descobrir um novo estilo de chá com base nas suas escolhas, você terá 3 items para escolher o qual mais se parece com você. Serão no total 3 perguntas e no final aparecerá o chá compativel com a sua vibe! (Lembrando o quiz é meramente uma forma descontraida de encontrar um chá interessante para você que quer experimentar novos sabores, não quer dizer que ele seja 100% do seu agrado ao experimentar.)
                        </Popup__text>
                    </Popup__container>
                ) 
            }
        </>
    )
}

const Popup__container = styled.section`
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-primary-2);
    width: 60%;
    height: 70%;
    animation: openpop forwards .6s;
    border-radius: 1rem;
    box-shadow: 0 .8rem 1.4rem var(--shadow-40);

    @media only screen and (max-width: 800px) {
        padding: 2rem;
    }
    
    @media only screen and (max-width: 400px) {
        width: 100%;
    }

    @keyframes openpop {
        0% {
            left: -50%;
        }

        100% {
            left: 50%;
        }
    }

    &.closing {
        animation: closepop forwards .6s;
        
        @keyframes closepop {
            0% {
                left: 50%;
            }

            100% {
                left: 150%;
            }
        }
    }
`;

const Popup__text = styled.p`
    font-size: 2.5rem;
    color: var(--color-white);
    line-height: 3.8rem;

    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
        line-height: 3rem;
    }

    @media only screen and (max-width: 800px) {
        font-size: 1.4rem;
        line-height: 2.3rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 2.3rem;
    }
`;

const Popup__tutorial = styled.button`
    position: absolute;
    top: 17.5%;
    right: 5%;
    color: var(--color-white);
    font-size: 3.5rem;
    background-color: transparent;
    transition: all .2s;
    cursor: pointer;

    @media only screen and (max-width: 1000px) {
        position: absolute;
        top: 15%;
        right: 3%;
        font-size: 3rem;
    }

    @media only screen and (max-width: 400px) {
        position: absolute;
        top: 13.5%;
        right: 10%;
    }

    &:hover,
    &:focus {
        transform: scale(1.03) translateY(-2px);
    }

    &:active {
        transform: scale(1.02) translateY(-1px);
    }
`;

const Popup__close = styled.button`
    position: absolute;
    top: 2%;
    right: 2.5%;
    transition: all .2s;

    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
        top: 5%;
        right: 5%;
    }

    &:hover,
    &:focus {
        transform: scale(1.05) translateY(-1px);
    }

    &:active {
        transform: scale(1.03) translateY(-.5px);
    }
`;

export default QuizPopup;