import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { GiEcology } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";

const Records = () => {

    const [records, setRecords] = useState([]);

    try {
        useEffect(() => {
        axios.get('https://calmty-vercel-json.vercel.app/records')
            .then(response => setRecords(response.data))
            .catch(err => console.log(`Erro encontrado: ${err}`))
            
        }, []);
        
    } catch(e) {
        console.log(e);
    }

    return (
        <>
            <Records__container>
                <Records__texts data-aos="fade-up" data-aos-duration="1200">
                    <Badge>
                        <span>Aprovado <br /> 100%</span>
                    </Badge>
                    <Records__heading__primary>Nossos Prestígios</Records__heading__primary>
                </Records__texts>

                    <Records__box data-aos="fade-up" data-aos-duration="1600">
                        {
                            records.map(record => (
                                <Records__record key={record.id}>
                                    <Records__heading__secundary className="heading">{record.record}</Records__heading__secundary>
                                    <Records__icon className="icon">
                                        {
                                            record.imagem == 'variedade' ? (
                                                <BiSelectMultiple />
                                            ) : record.imagem == 'sabor' ? (
                                                <BiHappyHeartEyes />
                                            ) : record.imagem == 'eco' ? (
                                                <GiEcology />
                                            ) : (
                                                <FaShippingFast />
                                            )
                                        }
                                    </Records__icon>
                                    <Records__paragraph>{record.texto}</Records__paragraph>
                                </Records__record>
                            ))
                        }
                    </Records__box>
            </Records__container>
        </>
    );
};

const Records__container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to bottom, var(--color-secondary-2) 30%, var(--color-primary-1));
    gap: 10rem;
    position: relative;
    overflow: hidden;
`;

const Records__texts = styled.div`
    display: flex;
    width: 100%;
    margin: 5rem 0;
`

const Records__box = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    margin-bottom: 15rem;
`

const Records__record = styled.div`
    height: 34rem;
    width: calc(25% - 12rem);
    min-width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    position: relative;

    background-color: var(--color-secondary-3);
    border-radius: 1rem;

    box-shadow: 0 .6rem 1rem var(--shadow-60);
    transition: all .2s;

    &:hover {
        box-shadow: 0 .6rem 1rem var(--shadow-80);
        transform: translateY(-1rem) scale(1.05) rotate(1deg);
    }

    &:hover .icon {
        transform: rotate(-2deg) scale(1.02);
    }

    &:hover .heading {
        transform: skewY(-5deg) rotate(5deg) scale(1.05);
    }
`;

const Records__icon = styled.div`
    font-size: 8rem;
    color: var(--color-primary-4);
    position: absolute;
    top: 30%;
    transition: all .2s;
`;

const Records__heading__primary = styled.h2`
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

const Records__heading__secundary = styled.h3`
    font-size: var(--font-heading-3);
    text-align: center;
    color: var(--color-primary-4);
    font-weight: 600;
    position: absolute;
    top: 10%;
    transition: all .2s;
`;

const Records__paragraph = styled.p`
    position: absolute;
    color: var(--color-white);
    margin: 0 auto;
    font-size: 1.4rem;
    top: 60%;
    text-align: center;
    padding: 0 1rem;
`;

const Badge = styled.div`
    --size: 10rem;
    position: absolute;
    background: var(--color-primary-2);
    height: var(--size);
    width: var(--size);
    border-radius: 5rem;
    left: 10%;
    color: var(--color-white);
    box-shadow:  0 3rem 8rem var(--color-primary-0);
    transition: all .2s;
    transform: scale(1) translateY(0px) rotate(-3deg);

    & span {
        position: absolute;
        text-align: center;
        z-index: 20;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.8rem;
    }

    &:hover {
        transform: scale(1.1) translateY(-1px) rotate(-10deg);
        box-shadow:  0 3rem 10rem var(--color-primary-0);
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        border-bottom: calc(var(--size) * 0.7) solid var(--color-primary-2);
        border-left: calc(var(--size) * 0.4) solid transparent;
        border-right: calc(var(--size) * 0.4) solid transparent;
        top: calc(var(--size) * 0.7);
        left: calc(var(--size) * -0.1);
        transform: rotate(-140deg);
        z-index: 10;
    }
    
    &:after {
        left: auto;
        right: calc(var(--size) * -0.1);
        transform: rotate(140deg);
    }
    
`;

export default Records;
