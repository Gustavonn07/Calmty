import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LiaHandshake, LiaMicrophoneAltSolid, LiaLaughWink, LiaCheckCircle, LiaHeartSolid, LiaMortarPestleSolid } from "react-icons/lia";

const Services = () => {

    const [services, setServices] = useState([]);

    try {
        useEffect(() => {
            axios.get('https://calmty-vercel-json.vercel.app/servicos')
                .then(response => setServices(response.data))
                .catch(err => console.log(`Erro encontrado: ${err}`))
        }, []);

    } catch (e) {
        console.log(e);
    }

    const renderIcon = (serviceId) => {
        switch (serviceId) {
            case 1:
                return <LiaLaughWink />;
            case 2:
                return <LiaMortarPestleSolid />;
            case 3:
                return <LiaHeartSolid />;
            case 4:
                return <LiaCheckCircle />;
            case 5:
                return <LiaMicrophoneAltSolid />;
            case 6:
                return <LiaHandshake />;
        }
    };

    return (
        <>
            <Services__container id="servicos">
                <div data-aos="fade-up" data-aos-duration="1200">
                    <Services__heading>Serviços</Services__heading>
                </div>
                
                <Services__services data-aos="fade-right" data-aos-duration="1200">
                    {
                        services.map(service => (
                            <Services__service key={service.id}>
                                <Services__icon>{renderIcon(service.id)}</Services__icon>
                                <Services__title>{service.titulo}</Services__title>
                                <Services__paragraph>{service.textoExplicativo}</Services__paragraph>
                            </Services__service>
                        ))
                    }
                </Services__services>
            </Services__container>
        </>
    )
}

const Services__container = styled.main`
    background-image: linear-gradient(to bottom, var(--color-primary-1) 20%, var(--color-primary-1));
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Services__heading = styled.h2`
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

const Services__services = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2.5rem;
    gap: 2.5rem;
    padding-top: 5rem;
    justify-items: center;

    @media only screen and (max-width: 1000px) { 
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 600px) { 
        grid-template-columns: repeat(1, 1fr);
    }
    
`;

const Services__service = styled.ul`
    padding: 3rem;
    height: 40rem;
    width: 80%;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary-2);
    border-radius: 1rem;
    box-shadow: 0 .6rem 1rem var(--shadow-40);
    transition: all .2s;

    @media only screen and (max-width: 1400px) { 
        width: 100%;
    }

    @media only screen and (max-width: 300px) {
        height: 45rem;
        padding: 1rem;
    }

    &:hover {
        box-shadow: 0 .6rem 1rem var(--shadow-60);
        transform: translateY(-2px) scale(1.02) rotate(2deg);
    }
`;

const Services__icon = styled.li`
    color: var(--color-secondary-2);
    font-size: 12rem;
    filter: drop-shadow(0 .6rem 1rem var(--shadow-20));

    @media only screen and (max-width: 1000px) {
        font-size: 10rem;
    }
`;

const Services__title = styled.h3`
    font-size: var(--font-heading-3);
    text-align: center;
    margin-top: -4rem;
    color: var(--color-secondary-1);

    @media only screen and (max-width: 1000px) {
        margin-top: -1rem;
        font-size: var(--font-heading-4);
    }
`;

const Services__paragraph = styled.p`
    margin-top: auto;
    font-size: 1.8rem;
    color: var(--color-white);
    text-align: center;

    @media only screen and (max-width: 1000px) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) { 
        margin-top: 4rem;
        font-size: 1.7rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
    }
`;

export default Services;