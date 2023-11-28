import { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = () => {
    
    const [linkSelecionado, setLinkSelecionado] = useState(0);
    const [logado, setLogado] = useState(0);
    
    useEffect(() => {
        const linkGuardadoSelecionado = localStorage.getItem('linkSelecionado');
        const estaLogado = localStorage.getItem('logado');

        if(estaLogado) {
            setLogado(parseInt(estaLogado, 10));
        }

        if(linkGuardadoSelecionado) {
            setLinkSelecionado(parseInt(linkGuardadoSelecionado, 10));
        }

    }, []);

    const handleLinkSelecionado = (index) => {
        setLinkSelecionado(index);
        localStorage.setItem('linkSelecionado', index.toString());
    }

    const handleLogar = (index) => {
        setLogado(index);
        localStorage.setItem('logado', index.toString())
    }

    return (
        <>
            <Navbar__container>
                <Navbar__ul>
                    
                    <Navbar__li>
                        <Navbar__link href="/" className={linkSelecionado == 0 && 'active'} onClick={() => handleLinkSelecionado(0)}> Home </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/about" className={linkSelecionado == 1 && 'active'} onClick={() => handleLinkSelecionado(1)}> Sobre nós </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/contact" className={linkSelecionado == 2 && 'active'} onClick={() => handleLinkSelecionado(2)}> Contato </Navbar__link>
                    </Navbar__li>

                    <Navbar__li>
                        <Navbar__link href="/quiz" className={linkSelecionado == 3 && 'active'} onClick={() => handleLinkSelecionado(3)}> Quiz </Navbar__link>
                    </Navbar__li>

                </Navbar__ul>

                <Navbar__login>
                    { 
                        logado == 0 ? (

                            <Navbar__btn onClick={() => handleLogar(1)}>Entrar</Navbar__btn>

                        ) : (

                            <Navbar__btn onClick={() => handleLogar(0)}>Sair</Navbar__btn>

                        )
                    }
                </Navbar__login>
            </Navbar__container>
        </>
    )
} 

const Navbar__container = styled.nav`
    height: 10vh;
`;

const Navbar__ul = styled.ul`
    display: flex;
`;

const Navbar__li = styled.li`
    
`;

const Navbar__link = styled.a`
    transition: all .2s;

    &.active {
        color: red;
    }
`;

const Navbar__login = styled.div`
    
`;

const Navbar__btn = styled.button`
    cursor: pointer;
`;

export default Navbar;