import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "../LoginModal";

const Navbar = () => {
    
    useEffect(() => {
        const estaLogado = localStorage.getItem('logado');

        if(estaLogado) {
            setLogado(parseInt(estaLogado, 10));
        }

    }, []);
    
    let urlCompleta = window.location.href;
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
            <Navbar__container>
                <Navbar__LOGO>Calmty</Navbar__LOGO>

                <Navbar__ul>
                    <Navbar__li>
                        <Navbar__link href="/" className={urlCompleta == 'https://calmty.vercel.app/' && 'active'}> Home </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/product" className={urlCompleta == 'https://calmty.vercel.app/product' && 'active'}> Produtos </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/about" className={urlCompleta == 'https://calmty.vercel.app/about' && 'active'}> Sobre nós </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/contact" className={urlCompleta == 'https://calmty.vercel.app/contact' && 'active'}> Contato </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/quiz" className={urlCompleta == 'https://calmty.vercel.app/quiz' && 'active'}> Quiz </Navbar__link>
                    </Navbar__li>

                </Navbar__ul>

                <Navbar__login>
                    { 
                        logado == 0 ? (
                            <>
                                <Navbar__btn onClick={() => {handleOpenModal(); setIsRegister(true)}}>Cadastrar</Navbar__btn>
                                <Navbar__btn onClick={() => {handleOpenModal(); setIsRegister(false)}}>Entrar</Navbar__btn>

                                { modal && <LoginModal setIsRegister={setIsRegister} setLogado={setLogado} isRegister={isRegister} handleCloseModal={handleCloseModal} handleLogar={handleLogar}/> }

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
            </Navbar__container>
        </>
    )
} 

const Navbar__container = styled.nav`
    width: 100%;
    height: 12vh;
    display: flex;
    gap: 8rem;
    align-items: center;
    padding: 0 2rem;
    background-color: #90b48f85;
    /* background-color: transparent; */
    box-shadow: 0 .8rem 1rem var(--shadow-20);
    position: absolute;
    z-index: 10;
`;

const Navbar__LOGO = styled.h2`
    font-size: 3.5rem;
    color: var(--color-white);
    font-weight: 800;
`

const Navbar__ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const Navbar__li = styled.li`
    transition: all .2s;
    text-shadow: 0 .2rem .5rem var(--shadow-20);

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.02);
        text-shadow: 0 .3rem .6rem var(--shadow-40);
    }

    &:active {
        text-shadow: 0 .3rem .6rem var(--shadow-20);
        transform: translateY(-.5px) scale(1.01);
    }
`;

const Navbar__link = styled.a`
    font-size: 2.8rem;
    color: var(--color-white);

    &.active {
        position: relative;
        animation: colorir forwards .3s;

        @keyframes colorir {
            0% {
                color: var(--color-white);
            }

            100% {
                color: var(--color-black);
            }
        }

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: .3rem;
            background-color: var(--color-black);
            border-radius: 10rem;
            animation: inicializar forwards .3s;

            @keyframes inicializar {
                0% {
                    width: 0;
                }

                100% {
                    width: 100%;
                }
            }
        }
    }
`;

const Navbar__login = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-left: auto;
`;

const Navbar__text = styled.p`
    font-size: 1.2rem;
    color: var(--color-white);
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

export default Navbar;