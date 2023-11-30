import { useEffect, useState } from "react";
import styled from "styled-components";

const Slider = () => {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition(position => (position + 1) % 3);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [position]);

    return (
        <>
            <Slider__container>
                <Slider__slides $position={position}>
                    <Slider__slide id="slide01">
                        <Slider__content className="left">
                            <Slider__heading>Conheça nossa <br /> coleção <Slider__span className="mel">Chá de Mel</Slider__span></Slider__heading>
                            <Slider__paragraph>
                                Imagine-se imerso em um mundo encantador onde a suavidade do mel encontra a sofisticação do chá, criando uma coleção única que desperta os sentidos e eleva a experiência sensorial a um novo nível.
                            </Slider__paragraph>
                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide id="slide02">
                        <Slider__content className="right">
                            <Slider__heading>Coleção EXCLUSIVA: <br /> <Slider__span className="limao">Manhã de limão</Slider__span></Slider__heading>
                            <Slider__paragraph>
                                Embarque em uma jornada sensorial única, onde o frescor vibrante do limão se encontra com a serenidade aromática do chá. Esta coleção temática é um convite para explorar a fusão única entre o cítrico revigorante do limão e a profundidade calmante do chá. 
                            </Slider__paragraph>
                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide id="slide03">
                        <Slider__content className="left">
                            <Slider__heading>Novo Conjunto: <br /> <Slider__span className="combinado">Paz e Serenidade</Slider__span></Slider__heading>
                            <Slider__paragraph>
                                Delicie-se em um conjunto de xícaras meticulosamente elaborado para envolver seus momentos de pausa com serenidade. Cada xícara desta coleção é mais do que uma peça de cerâmica; é uma expressão tangível da tranquilidade.
                            </Slider__paragraph>
                        </Slider__content>
                    </Slider__slide>
                </Slider__slides>

                <Slider__dots>
                    <Slider__dot className={position == 0 && 'active'} onClick={() => setPosition(0)}></Slider__dot>
                    <Slider__dot className={position == 1 && 'active'} onClick={() => setPosition(1)}></Slider__dot>
                    <Slider__dot className={position == 2 && 'active'} onClick={() => setPosition(2)}></Slider__dot>
                </Slider__dots>
            </Slider__container>
        </>
    )
}

const Slider__container = styled.section`
    width: 100%;
    height: 95vh;
    overflow-x: hidden;
    position: relative;
`;
const Slider__slides = styled.div`
    width: 300%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: calc(-100% * ${props => props.$position || 0});
    transition: all 500ms ease;
`;

const Slider__slide = styled.div`
    width: 100%;
    height: 100%;

    &#slide01 {
        background-image: url(../../images/honeyTea.jpg);
        background-size: cover;
        background-position: 0 25%;
    }

    &#slide02 {
        background-image: url(../../images/lemonTea.jpg);
        background-size: cover;
        background-position: 0 70%;
    }

    &#slide03 {
        background-image: url(../../images/orientalTea.jpg);
        background-size: cover;
        background-position: 0 50%;
        filter: brightness(90%);
    }
`;

const Slider__content = styled.ul`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    &.left {
        background-image: linear-gradient(to right, #00000070 70%, #00000000 100%);
    }

    &.right {
        background-image: linear-gradient(to left, #00000070 35%, #00000000 50%);
        width: 100%;
        align-items: end;
        padding-right: 10rem;

        & p {
            width: 35%;
        }
    }

`;

const Slider__heading = styled.h2`
    font-size: 5rem;
    color: var(--color-white);
    font-weight: 600;
`;

const Slider__paragraph = styled.p`
    font-size: 3rem;
    color: var(--color-white);
    width: 70%;
`;

const Slider__span = styled.span`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 6rem;
    font-weight: bold;
    
    &.mel {
        color: #f3a334;
    }

    &.limao {
        color: #e1cb27;
    }

    &.combinado {
        color: #ffffff;
    }
`

const Slider__dots = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
`;

const Slider__dot = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--color-white);
    border-radius: 100%;
    transition: all .28s;
    cursor: pointer;

    &.active {
        background-color: var(--color-primary-2);
    }
`;

export default Slider;