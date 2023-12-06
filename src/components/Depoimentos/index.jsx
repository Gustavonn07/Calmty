import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Depoimentos = () => {
    
    const [depoimentos, setDepoimentos] = useState([]);

    try {
        useEffect(() => {
        axios.get('https://calmty-vercel-json.vercel.app/depoimentos')
            .then(response => setDepoimentos(response.data))
            .catch(err => console.log(`Erro encontrado: ${err}`))
            
        }, []);
        
    } catch(e) {
        console.log(e);
    }

    return (
        <>
            <Depoimentos__container>
                <Depoimentos__texts data-aos="fade-up" data-aos-duration="1200">
                    <Depoimentos__heading__primary>Depoimentos de Clientes</Depoimentos__heading__primary>
                    <Depoimentos__paragraph>Veja a satisfação que nossos clientes tiveram!</Depoimentos__paragraph>
                </Depoimentos__texts>

                <Depoimentos__depoimentos>
                    {
                        depoimentos.map((depoimento, index) => ( 

                            <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-duration="1600"  key={depoimento.id}>
                                <Depoimentos__depoimento className={index % 2 === 0 ? 'right' : 'left'}>
                                    <Depoimentos__box>
                                        <Depoimentos__img src={depoimento.imagem} alt={depoimento.nome}/>
                                        <Depoimentos__data>{depoimento.data}</Depoimentos__data>
                                    </Depoimentos__box>
                                    <Depoimentos__box>
                                        <Depoimentos__heading__secondary>{depoimento.nome}</Depoimentos__heading__secondary>
                                        <Depoimentos__heading__tertiary>{depoimento.titulo}</Depoimentos__heading__tertiary>
                                        <Depoimentos__paragraph__depoimento>{depoimento.depoimento}</Depoimentos__paragraph__depoimento>
                                    </Depoimentos__box>
                                </Depoimentos__depoimento>
                            </div>
                        ))
                    }
                </Depoimentos__depoimentos>
            </Depoimentos__container>
        </>
    )
}

const Depoimentos__container = styled.section`
    overflow: hidden;
    background-color: var(--color-primary-1);
`;

const Depoimentos__texts = styled.div`
    width: 100%;
`;

const Depoimentos__paragraph = styled.p`
    text-align: center;
    font-size: 3.4rem;
    color: var(--color-white);
`;

const Depoimentos__heading__primary = styled.h2`
    width: fit-content;
    font-size: var(--font-heading-1);
    color: var(--color-primary-3);
    font-weight: 700;
    position: relative;
    left: 50%;
    transform: scale(1) skewY(0) translateX(-50%);
    transition: all .2s;
    text-shadow: 0 .2rem .6rem var(--shadow-20);

    @media only screen and (max-width: 1200px) {
        font-size: var(--font-heading-2);
    }

    &:hover {
        transform: scale(1.02) skewY(1deg) translateX(-50%);
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
    }

    &:hover::before {
        width: calc(100% + 4rem);
        text-shadow: 0 .2rem .6rem var(--shadow-40);
    }
`;

const Depoimentos__depoimentos = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
    gap: 3rem;
    padding-bottom: 12.5rem;
`;

const Depoimentos__depoimento = styled.li`
    display: flex;
    gap: clamp(1rem, 2rem, 2.5rem);
    background-color: var(--color-secondary-2);
    padding: 1.5rem;
    width: calc(clamp(40rem, 80rem, 90rem) + clamp(1rem, 2rem, 2.5rem));
    border-radius: 1.5rem;
    box-shadow: 0 .6rem 1rem var(--shadow-40);
    transition: all .2s;

    @media only screen and (max-width: 1200px) {
        width: 70rem;
    }

    @media only screen and (max-width: 800px) {
        width: 50rem;
    }

    &.left {
        flex-direction: row-reverse;
        transform: translateX(5rem);
    }

    &.right {
        transform: translateX(-5rem);
    }

    &:hover {
        box-shadow: 0 .6rem 1rem var(--shadow-60);

        &.left {
            transform: translate(5rem, -.5rem) scale(1.02) rotate(-1deg);
        }

        &.right {
            transform: translate(-5rem, -.5rem) scale(1.02) rotate(1deg);
        }
    }
`;

const Depoimentos__box = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 800px) {
        justify-content: center;
    }
`;

const Depoimentos__img = styled.img`
    width: clamp(10rem, 16rem, 22rem);
    height: clamp(10rem, 16rem, 22rem);
    border-radius: 100%;
    box-shadow: 0 .6rem 1rem var(--shadow-20);
    
    @media only screen and (max-width: 800px) {
        width: 10rem;
        height: 10rem;
    }
`;

const Depoimentos__data = styled.p`
    text-align: center;
    font-size: 1.4rem;
    color: var(--color-primary-3);
    font-weight: 700;
    margin-top: .5rem;
`;

const Depoimentos__heading__secondary = styled.h3`
    font-size: var(--font-heading-3);
    color: var(--color-primary-3);

    @media only screen and (max-width: 800px) {
        font-size: var(--font-heading-4);
    }
`;


const Depoimentos__heading__tertiary = styled.h4`
    font-size: var(--font-heading-4);
    color: var(--color-primary-3);
    font-style: italic;

    @media only screen and (max-width: 800px) {
        font-size: var(--font-heading-5);
    }
`;

const Depoimentos__paragraph__depoimento = styled.p`
    font-size: 1.8rem;
    color: var(--color-white);
    margin: auto 0;
    
    @media only screen and (max-width: 800px) {
        font-size: 1.3rem;
    }
`;

export default Depoimentos;