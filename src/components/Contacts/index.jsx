import styled from "styled-components";

const Contacts = () => {

    return (
        <>
            <Contacts__container id="contato">
                <div data-aos="fade-up" data-aos-duration="1200">
                    <Contacts__heading>Contato</Contacts__heading>
                </div>

                <Contacts__box data-aos="fade-up" data-aos-duration="1200">
                    <Contacts__form>
                        <Contacts__label for="nome">Nome completo</Contacts__label>
                        <Contacts__input id="nome" type="text"></Contacts__input>

                        <Contacts__label for="email">Email</Contacts__label>
                        <Contacts__input id="email" type="email"></Contacts__input>

                        <Contacts__label for="tel">Número de telefone</Contacts__label>
                        <Contacts__input id="tel" type="tel"></Contacts__input>

                        <Contacts__submit onClick={(e) => e.preventDefault()} type="submit" value="Contactar" />
                    </Contacts__form>
                
                    <Contacts__img src="../../images/contactTea.jpg" alt="Imagem de um chá sendo colocado em uma xícara"/>
                </Contacts__box>
            </Contacts__container>
        </>
    )
}

const Contacts__container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 110vh;
    padding: 4rem 2rem;
    background-image: linear-gradient(to bottom, var(--color-primary-1) 20%, var(--color-primary-1));
    
    @media only screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const Contacts__heading = styled.h2`
    width: fit-content;
    font-size: var(--font-heading-1);
    color: var(--color-primary-3);
    font-weight: 700;
    position: relative;
    transform: scale(1) skewY(0);
    transition: all .2s;
    text-shadow: 0 .2rem .6rem var(--shadow-20);

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

const Contacts__box = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    margin: 4rem auto;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 .8rem 1.2rem var(--shadow-40);
    transition: all .2s;

    &:hover {
        transform: rotate(.1deg) scale(1.01);
    }

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }

    @media only screen and (max-width: 800px) {
        width: 90%;
    }
    
    @media only screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Contacts__form = styled.form`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    background-color: var(--color-secondary-2);
    
    @media only screen and (max-width: 600px) {
        width: 80%;
        margin: 0 auto;
    }
    
    @media only screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Contacts__label = styled.label`
    color: var(--color-black);
    font-weight: 600;
    font-size: 1.8rem;
    text-shadow: 0 .2rem .4rem var(--shadow-20);
    margin: 1rem 0;

    @media only screen and (max-width: 400px) {
        font-size: 1.6rem;
    }
`;

const Contacts__input = styled.input`
    width: 90%;
    padding: 0 1rem;
    height: 2.8rem;
    border-radius: .4rem;
    font-size: 1.6rem;
    box-shadow: 0 .4rem .6rem var(--shadow-20);
    margin-bottom: 1rem;
    transition: all .2s;

    @media only screen and (max-width: 400px) {
        font-size: 1.6rem;
    }

    &:hover,
    &:focus {
        outline: none;
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 .4rem .6rem var(--shadow-40);
    }
`;

const Contacts__submit = styled.input`
    width: fit-content;
    padding: 1rem;
    border-radius: .4rem;
    font-size: 1.8rem;
    color: var(--color-white);
    background-color: var(--color-black);
    margin-top: 5rem;
    cursor: pointer;
    box-shadow: 0 .4rem .6rem var(--shadow-40);
    transition: all .2s;

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 .4rem .6rem var(--shadow-60);
    }

    &:active {
        transform: translateY(-.5px) scale(1.02);
        box-shadow: 0 .4rem .6rem var(--shadow-40);
    }
`;

const Contacts__img = styled.img`
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export default Contacts;