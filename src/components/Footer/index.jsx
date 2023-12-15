import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

    return (
        <>
            <Footer__container>
                
                    <div>
                        <Footer__logo>Calmty</Footer__logo>
                        <Footer__paragraph>Acalmando seus sentimentos</Footer__paragraph>
                    </div>

                    <Footer__ul>
                        <Footer__li>
                            <Footer__link href="#">Contato</Footer__link>
                        </Footer__li>
                        <Footer__li>
                            <Footer__link href="#">Termo</Footer__link>
                        </Footer__li>
                        <Footer__li>
                            <Footer__link href="#">Privacidade</Footer__link>
                        </Footer__li>
                    </Footer__ul>

                    <div>
                        <Footer__paragraph>Redes sociais:</Footer__paragraph>
                        <Footer__icons>
                            <Footer__link href="#">
                                <Footer__icon><FaFacebook/></Footer__icon>
                            </Footer__link>
                            <Footer__link href="#">
                                <Footer__icon><FaInstagram/></Footer__icon>
                            </Footer__link>
                            <Footer__link href="#">
                                <Footer__icon><FaSquareXTwitter/></Footer__icon>
                            </Footer__link>
                        </Footer__icons>
                    </div>
            </Footer__container>
        </>
    )
}

const Footer__container = styled.footer`
    padding: 0 20rem;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--color-black);
    padding: 5rem 0;
    gap: 6rem;
    justify-content: center;
    align-items: center;
    position: relative;

    & div:nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        
        & p {
            font-size: 1.8rem;
        }
    }
`;

const Footer__logo = styled.h2`
    font-size: 3.5rem;
    color: var(--color-white);
    font-weight: 800;
    transition: all .2s;

    &:hover {
        transform: translateY(-3px) scale(1.01) skewY(-5deg) rotate(5deg);
    }
`;

const Footer__paragraph = styled.p`
    color: var(--color-white);
    font-size: 1.4rem;
`;

const Footer__ul = styled.ul`
    display: flex;
    gap: 2rem;
`;

const Footer__li = styled.li`
    font-size: 1.8rem;
    transition: all .2s;
    text-shadow: 0 .4rem .6rem var(--shadow-20);

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.02);
        text-shadow: 0 .4rem .6rem var(--shadow-40);
    }
`;

const Footer__link = styled.a`
    color: var(--color-white);
    cursor: pointer;
`;

const Footer__icons = styled.div`
    font-size: 2.5rem;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    color: var(--color-white);
`;

const Footer__icon = styled.div`
    transition: all .2s;
    filter: drop-shadow(0 .4rem 06.6rem var(--shadow-40));
    
    &:hover,
    &:focus {
        transform: translateY(-2px) scale(1.02);
        filter: drop-shadow(0 .4rem .6rem var(--shadow-60));
    }
`;

export default Footer;