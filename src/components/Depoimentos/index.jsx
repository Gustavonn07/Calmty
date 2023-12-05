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

                            <Depoimentos__depoimento className={index % 2 === 0 ? 'right' : 'left'} key={depoimento.id}>
                                <Depoimentos__box>
                                    <Depoimentos__img src={depoimento.imagem} alt={depoimento.nome}/>
                                    <Depoimentos__data>{depoimento.data}</Depoimentos__data>
                                </Depoimentos__box>

                                <Depoimentos__box>
                                    <Depoimentos__heading__secondary>{depoimento.nome}</Depoimentos__heading__secondary>
                                    <Depoimentos__paragraph__depoimento>{depoimento.depoimento}</Depoimentos__paragraph__depoimento>
                                </Depoimentos__box>
                            </Depoimentos__depoimento>
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
    margin-top: 15rem;
`;

const Depoimentos__depoimento = styled.li`
    display: flex;

    &.left {
        flex-direction: row-reverse;
    }
`;

const Depoimentos__box = styled.div`
    
`;

const Depoimentos__img = styled.img`
    width: clamp(10rem, 16rem, 22rem);
    height: clamp(10rem, 16rem, 22rem);
    border-radius: 100%;
`;

const Depoimentos__data = styled.p`
    
`;

const Depoimentos__heading__secondary = styled.h3`
    font-size: var(--font-heading-3);
`;

const Depoimentos__paragraph__depoimento = styled.p`
    
`;

export default Depoimentos;