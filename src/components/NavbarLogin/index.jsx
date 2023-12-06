/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "../LoginModal";

const NavbarLogin = (props) => {

    useEffect(() => {
        const estaLogado = localStorage.getItem('logado');

        if(estaLogado) {
            setLogado(parseInt(estaLogado, 10));
        }

    }, []);
    
    const [logado, setLogado] = useState(0);
    const [modal, setModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    
    const handleOpenModal = () => {
        setModal(true);
        document.body.classList.add('modal-open');
    }

    const handleCloseModal = () => {
        const modal = document.getElementById('modal');

        modal.classList.add('closing');

        setTimeout(() => {

            setModal(false);
            document.body.classList.remove('modal-open');
            modal.classList.remove('closing');
        }, 250);
    }

    const handleLogar = (index) => {

        setLogado(index);
        localStorage.setItem('logado', index.toString())
        document.body.classList.remove('modal-open');
    }

    return (
        <>
            <Navbar__login className={props.classe == 'hamburguer' ? 'hamburguer' : ''}>
                {
                    logado == 0 ? (
                        <>
                            <Navbar__btn onClick={() => {handleOpenModal(); setIsRegister(true)}}>Cadastrar</Navbar__btn>
                            <Navbar__btn onClick={() => {handleOpenModal(); setIsRegister(false)}}>Entrar</Navbar__btn>
                            { 
                                modal && <LoginModal setIsRegister={setIsRegister} setLogado={setLogado} isRegister={isRegister} handleCloseModal={handleCloseModal} handleLogar={handleLogar}/> 
                            }
                            <Navbar__text><Navbar__span>Entre</Navbar__span> ou <br /> crie seu <Navbar__span>Cadastro</Navbar__span>.</Navbar__text>
                        </>
                    ) : (
                        <>
                            <Navbar__img src="" alt=""/>
                            <Navbar__btn onClick={() => handleLogar(0)}>Sair</Navbar__btn>
                        </>
                    )
                }
            </Navbar__login>
        </>
    )
}

const Navbar__login = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-left: auto;

    &.hamburguer {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);

        & button {
            width: 10rem;
            height: 3.6rem;
            font-size: 1.6rem;
        }
    }
`;

const Navbar__text = styled.p`
    font-size: 1.2rem;
    color: var(--color-white);

    @media only screen and (max-width: 1200px) {
        font-size: 1rem;
    }
    
    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const Navbar__span = styled.span`
    text-transform: uppercase;
    font-weight: bold;
`;

const Navbar__img = styled.img`

`;

const Navbar__btn = styled.button`
    cursor: pointer;
    background-color: var(--color-white);
    font-size: 1.6rem;
    height: 3.8rem;
    border-radius: .4rem;
    padding: 0 1rem;
    transition: all .2s;
    box-shadow: 0 .4rem .8rem var(--shadow-20);
    
    @media only screen and (max-width: 1200px) {
        font-size: 1.2rem;
        height: 3rem;
    }
    
    @media only screen and (max-width: 800px) {
        height: 2.6rem;
    }

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 .4rem 1rem var(--shadow-60);
    }

    &:active {
        box-shadow: 0 .4rem .8rem var(--shadow-40);
        transform: translateY(-.5px) scale(1.01);
    }
`;

export default NavbarLogin;