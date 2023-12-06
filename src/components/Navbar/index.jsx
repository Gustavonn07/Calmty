import { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburguer from "../Hamburguer";
import NavbarLogin from "../NavbarLogin";
import NavbarLinks from "../NavbarLinks";

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
    
    const [hamburguer, setHamburguer] = useState(false);

    return (
        <>
            <Navbar__container id="container">
                <Navbar__LOGO className="logo">Calmty</Navbar__LOGO>
                {
                    !hamburguer ? (          
                        <>
                            <NavbarLinks />
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
`;

export default Navbar;