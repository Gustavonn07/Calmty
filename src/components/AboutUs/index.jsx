import styled from "styled-components";

const AboutUs = () => {

    return (
        <>
            <AboutUs__container>
                <div data-aos="fade-up" data-aos-duration="1200">
                    <AboutUs__heading>Sobre nós</AboutUs__heading>
                    <AboutUs__paragraph>Conheça mais sobre nossa missão</AboutUs__paragraph>
                </div>

                <AboutUs__box data-aos="fade-right" data-aos-duration="1200">
                    <AboutUs__title>Quem somos?</AboutUs__title>
                    <AboutUs__description>
                        Na Calmity, nos esforçamos para fornecer uma variedade de blends de chá que não apenas cativam o paladar, mas também promovem o bem-estar e a serenidade. Trabalhamos em parceria com produtores locais e internacionais para garantir a qualidade excepcional de nossos produtos, buscando ingredientes naturais e orgânicos sempre que possível.
                        <br />
                        <br />
                        Estamos comprometidos em cultivar uma comunidade em torno do amor pelo chá, promovendo eventos, workshops e degustações para compartilhar conhecimentos e nutrir um espaço onde as pessoas possam se reconectar consigo mesmas e com os outros. A missão da Calmity é ser mais do que uma loja de chá; é ser um refúgio de calma em meio à agitação do cotidiano.
                    </AboutUs__description>
                </AboutUs__box>
            </AboutUs__container>
        </>
    )
}

const AboutUs__container = styled.main`
    background-image: linear-gradient(to bottom, var(--color-secondary-2), var(--color-primary-1));
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const AboutUs__heading = styled.h2`
    width: fit-content;
    font-size: var(--font-heading-1);
    color: var(--color-primary-3);
    font-weight: 700;
    position: relative;
    transition: all .2s;
    text-shadow: 0 .2rem .6rem var(--shadow-20);
    margin-bottom: 1rem;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-heading-2);
    }

    &:hover {
        transform: scale(1.02) skewY(1deg);
        text-shadow: 0 .2rem .6rem var(--shadow-40);
    }

    &::before {
        content: "";
        width: 0;
        height: .8rem;
        background-color: var(--color-primary-3);
        border-radius: .8rem;
        position: absolute;
        top: 90%;
        left: -2rem;
        transition: all .5s;
        
        @media only screen and (max-width: 600px) {
            display: none;
        }
    }

    &:hover::before {
        width: calc(100% + 4rem);
        text-shadow: 0 .2rem .6rem var(--shadow-40);
    }
`;

const AboutUs__paragraph = styled.p`
    font-size: 3rem;
    text-align: center;
    color: var(--color-white);
    text-shadow: 0 .4rem .8rem var(--shadow-20);
    font-style: italic;
`;

const AboutUs__box = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 .6rem 1rem var(--shadow-40);
    background-color: var(--color-secondary-1);
    margin-top: 6rem;

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }

    @media only screen and (max-width: 600px) {
        width: 95%;
    }
`;

const AboutUs__title = styled.h3`
    font-size: var(--font-heading-3);  
    color: var(--color-secondary-4);
`;

const AboutUs__description = styled.p`
    font-size: 2.2rem;
    color: var(--color-black);

    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.6rem;
    }
`;

export default AboutUs;