import { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburguer from "../Hamburguer";
import NavbarLogin from "../NavbarLogin";

const Navbar = () => {

    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById('container');

            if (window.innerWidth <= 600) {
                setHamburguer(true);
                container.classList.add('hamburguer');

            } else {
                setHamburguer(false);
                container.classList.remove('hamburguer');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    let urlCompleta = window.location.href;
    const [hamburguer, setHamburguer] = useState(false);

    return (
        <>
            <Navbar__container id="container">
                <Navbar__LOGO className="logo">Calmty</Navbar__LOGO>
                {
                    !hamburguer ? (          
                        <>
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

                            <NavbarLogin />
                        </>
                    ) : (
                        <Hamburguer setHamburguer={setHamburguer}/>
                    )
                }
            </Navbar__container>
        </>
    )
} 

const Navbar__container = styled.nav`
    width: 100%;
    height: 12vh;
    display: flex;
    gap: 6rem;
    align-items: center;
    padding: 0 2rem;
    background-color: #90b48f85;
    box-shadow: 0 .8rem 1rem var(--shadow-20);
    position: absolute;
    z-index: 10;

    &.hamburguer {
        justify-content: end;
        padding: 0 4rem;

        & .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    @media only screen and (max-width: 1000px) {
        gap: 4rem;
    }

    @media only screen and (max-width: 800px) {
        gap: 3rem;
    }
`;

const Navbar__LOGO = styled.h2`
    font-size: 3.5rem;
    color: var(--color-white);
    font-weight: 800;

    @media only screen and (max-width: 1200px) {
        font-size: 3rem;
    }
    
    @media only screen and (max-width: 1000px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 800px) {
        gap: 2rem;
    }
`

const Navbar__ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    
    @media only screen and (max-width: 1000px) {
        gap: 1.5rem;
    }
    
    @media only screen and (max-width: 800px) {
        gap: 1.2rem;
    }
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

    @media only screen and (max-width: 1200px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 1000px) {
        font-size: 1.8rem;
    }
    
    @media only screen and (max-width: 800px) {
        font-size: 1.4rem;
    }

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

export default Navbar;