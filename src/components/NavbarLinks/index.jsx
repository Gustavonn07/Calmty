/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

const NavbarLinks = (props) => {

    let urlCompleta = window.location.href;

    const [classe, setClasse] = useState(false)

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth <= 600) {
                setClasse(false);

            } else {
                setClasse(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Navbar__ul className={props.classe == 'hamburguer' ? 'coluna' : ''}>
            <Navbar__li>
                <Navbar__link href="/" className={urlCompleta == 'https://calmty.vercel.app/' && classe ? 'active' : ''}> Home </Navbar__link>
            </Navbar__li>
            <Navbar__li>
                <Navbar__link href="/product" className={urlCompleta == 'https://calmty.vercel.app/product' && classe ? 'active' : ''}> Produtos </Navbar__link>
            </Navbar__li>
            <Navbar__li>
                <Navbar__link href="/about" className={urlCompleta == 'https://calmty.vercel.app/about' && classe ? 'active' : ''}> Sobre nós </Navbar__link>
            </Navbar__li>
            <Navbar__li>
                <Navbar__link href="/contact" className={urlCompleta == 'https://calmty.vercel.app/contact' && classe ? 'active' : ''}> Contato </Navbar__link>
            </Navbar__li>
            <Navbar__li>
                <Navbar__link href="/quiz" className={urlCompleta == 'https://calmty.vercel.app/quiz' && classe ? 'active' : ''}> Quiz </Navbar__link>
            </Navbar__li>
        </Navbar__ul>
    )
}

const Navbar__ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;

    &.coluna {
        flex-direction: column;
        margin-top: 4rem;
        gap: 5rem;
        
        & li {
            width: 100%;
            text-align: center;
            padding-bottom: 1rem;
            border-bottom: .4rem solid var(--color-secondary-1);
        }

        & a {
            font-size: 2rem;
        }
    }
    
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

export default NavbarLinks;