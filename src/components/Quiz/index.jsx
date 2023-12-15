import styled from "styled-components";
import QuizPopup from "../QuizPopup";
import { useState } from "react";

const Quiz = () => {
    let [numPerguntas, setNumPerguntas] = useState(0);
    const [resultados, setResultados] = useState({ a: 0, b: 0, c: 0 });
    const perguntas = [
        {
            pergunta: "Pergunta 01: Como você descreveria seu estado de espírito habitualmente?",
            respostas: [
                'A) Calmo e tranquilo.',
                'B) Energético e animado.',
                'C) Reflexivo e concentrado.'
            ]
        },
        {
            pergunta: "Pergunta 02: Qual é o seu cenário preferido para relaxar?",
            respostas: [
                'A) Sentado em um jardim tranquilo.',
                'B) Explorando a natureza em uma trilha.',
                'C) Em casa, lendo um livro ou ouvindo música.'
            ]
        },
        {
            pergunta: "Pergunta 03: Como você lida com o estresse?",
            respostas: [
                'A) Pratico técnicas de respiração e meditação.',
                'B) Faço exercícios físicos intensos.',
                'C) Procuro atividades criativas para me distrair.'
            ]
        }
    ];
    const retornoQuiz = [
        ' Chá de Camomila ou Chá de Lavanda para ajudar a relaxar.',
        ' Chá Verde ou Chá Preto para fornecer energia.',
        ' Chá de Erva-Cidreira ou Chá de Hortelã para promover a concentração e a calma.',
        ' Chá Mate com limão, pois ele é um chá doce e suave que todos gostam.'
    ];

    function handleClickRight() {
        if(numPerguntas < 3) {
            setNumPerguntas(numPerguntas + 1);
        }
    }

    function coletaIndex(index) {
        if (index === 0) {
            setResultados({ ...resultados, a: resultados.a + 1 });
        } else if (index === 1) {
            setResultados({ ...resultados, b: resultados.b + 1 });
        } else {
            setResultados({ ...resultados, c: resultados.c + 1 });
        }
    }

    return (
        <>
            <Quiz__container>
                <div>
                    <QuizPopup />
                </div>

                <Quiz__boxs key={numPerguntas}>
                    <Quiz__box>
                        {
                            numPerguntas != 3 ? (
                                <>
                                    <Quiz__pergunta>{perguntas[numPerguntas].pergunta }</Quiz__pergunta>
                        
                                    <Quiz__resposta>
                                        {
                                            perguntas[numPerguntas].respostas.map((resposta, index) => (
                                                <Quiz__span onClick={() => {handleClickRight(); coletaIndex(index);}} key={index}>{resposta}</Quiz__span>
                                            ))
                                        }
                                    </Quiz__resposta>
                                </>

                            ) : (
                                <Quiz__resposta>
                                    <Quiz__resultado>
                                        De acordo com as suas escolhas, recomendamos
                                        {
                                            (resultados.a >= 2 && retornoQuiz[0]) ||
                                            (resultados.b >= 2 && retornoQuiz[1]) ||
                                            (resultados.c >= 2 && retornoQuiz[2]) ||
                                            (resultados.a === resultados.b && resultados.b === resultados.c && retornoQuiz[3])
                                        }
                                    </Quiz__resultado>
                                </Quiz__resposta>
                            )
                        }
                    </Quiz__box>

                    <Quiz__box>
                        <Quiz__img src={'../../images/quiz.jpg'} alt={'Imagem de um chá verde com uma flor em cima'}/>
                    </Quiz__box>
                </Quiz__boxs>
            </Quiz__container>
        </>
    )
}

const Quiz__resultado = styled.p`
    font-size: 2.6rem;
    padding-top: 15%;
    color: var(--color-white);

    @media only screen and (max-width: 1000px) {
        
    }
`;

const Quiz__container = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary-3);
`;

const Quiz__boxs = styled.ul`
    width: 50%;
    height: 60%;
    display: flex;
    background-color: var(--color-primary-1);
    overflow: hidden;
    border-radius: 1rem;

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }

    @media only screen and (max-width: 600px) {
        width: 70%;
        height: 70%;
        margin-top: 5rem;
    }

    @media only screen and (max-width: 400px) {
        width: 95%;
        margin-top: 8rem;
    }
`;

const Quiz__box = styled.li`
    width: 40%;

    @media only screen and (max-width: 600px) {
        width: 0%;
    }

    &:nth-child(1) {
        width: 60%;
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media only screen and (max-width: 600px) {
            width: 100%;
            padding: 1rem;
        }
    }
`;

const Quiz__img = styled.img`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 600px) {
        display: none;
        width: 0;
    }
`;

const Quiz__pergunta = styled.h3`
    font-size: 2.8rem;
    color: var(--color-black);

    @media only screen and (max-width: 600px) {
        font-size: 2.4rem;
    }
`;

const Quiz__resposta = styled.p`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media only screen and (max-width: 400px) {
        gap: 2rem;
    }
`;

const Quiz__span = styled.button`
    cursor: pointer;
    width: fit-content;
    background-color: transparent;
    font-size: 2rem;
    color: var(--color-white);
    position: relative;
    transition: all .2s;

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
        text-align: start;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -.3rem;
        border-radius: .5rem;
        width: 0%;
        height: .3rem;
        background-color: var(--color-white);
        transition: all .4s;
    }

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.03);
        text-shadow: 0 .4rem .6rem var(--shadow-20);

        &::before {
            width: 100%;
            box-shadow: 0 .4rem .6rem var(--shadow-20);
        }
    }

    &:active {
        transform: translateY(-.5px) scale(1.01);
    }
`;

export default Quiz;