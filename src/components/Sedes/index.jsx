
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Sedes = () => {

    const [sedes, setSedes] = useState([]);

    try {
        useEffect(() => {
            axios.get('https://calmty-vercel-json.vercel.app/sedes')
                .then(response => setSedes(response.data))
                .catch(err => console.log(`Erro encontrado: ${err}`))
        }, []);

    } catch (e) {
        console.log(e);
    }

    return (
        <>
            <Sedes__container>
                <div data-aos="fade-up" data-aos-duration="1200">
                    <Sedes__heading>Nossas Sedes</Sedes__heading>
                </div>

                <div className="cards" data-aos="fade-up" data-aos-duration="1200">
                    {
                        sedes.map(sede => (
                            <>
                                <Sedes__card key={sede.id}>
                                    <Sedes__img src={sede.imagem} alt={sede.sede}/>
                                    <Sedes__title>{sede.sede}</Sedes__title>
                                    <Sedes__description>{sede.endereco}</Sedes__description>
                                </Sedes__card>
                            </>
                        ))
                    }
                </div>
                
            </Sedes__container>
        </>
    )
}

const Sedes__container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 120vh;
    padding: 4rem 2rem;
    background-image: linear-gradient(to bottom, var(--color-secondary-2) 20%, var(--color-primary-1));
    
    @media only screen and (max-width: 1000px) {
        padding: 1rem;
        height: 140vh;
    }
    
    @media only screen and (max-width: 400px) {
        padding: 1rem;
    }

    & .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20rem;
        width: 100%;
        height: 100%;
        margin-bottom: 10rem;

        @media only screen and (max-width: 1000px) {
            gap: 10rem;
        }

        @media only screen and (max-width: 800px) {
            gap: 5rem;
        }

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            margin-top: 8rem;
        }
    }
`;

const Sedes__heading = styled.h2`
    width: fit-content;
    text-align: center;
    font-size: var(--font-heading-1);
    color: var(--color-primary-3);
    font-weight: 700;
    position: relative;
    transform: scale(1) skewY(0);
    transition: all .2s;
    text-shadow: 0 .2rem .6rem var(--shadow-20);
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

const Sedes__card = styled.div`
    height: 70%;
    width: 28%;
    background-color: var(--color-secondary-2);
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 .8rem 1.2rem var(--shadow-40);
    transition: all .2s;

    &:hover {
        transform: translateY(-1px) scale(1.01) rotate(1deg);
    }

    @media only screen and (max-width: 1000px) {
        width: 35%;
    }

    @media only screen and (max-width: 800px) {
        width: 40%;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
    }

    @media only screen and (max-width: 400px) {
        width: 95%;
    }
`;

const Sedes__img = styled.img`
    height: 60%;
    width: 100%;
`;

const Sedes__title = styled.h3`
    font-size: 2.5rem;
    text-align: center;
    color: var(--color-black);
    padding-top: 5rem;
    font-weight: bold;

    @media only screen and (max-width: 800px) {
        padding-top: 1rem;
        font-size: 2rem;
    }
`;

const Sedes__description = styled.p`
    font-size: 1.8rem;
    color: var(--color-secondary-0);
    text-align: center;
    padding: .8rem 3rem 0 3rem;

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
        padding: .8rem 1.5rem 0 1.5rem;
    }
`;

export default Sedes;