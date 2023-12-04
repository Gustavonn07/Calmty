import styled from "styled-components";

const Depoimentos = () => {

    return (
        <>
            <Depoimentos__container>
                <Depoimentos__texts data-aos="fade-up" data-aos-duration="1200">
                    <Depoimentos__heading__primary>Depoimentos de Clientes</Depoimentos__heading__primary>
                </Depoimentos__texts>
            </Depoimentos__container>
        
        </>
    )
}

const Depoimentos__container = styled.section`
    overflow: hidden;
`;


const Depoimentos__texts = styled.div`
    width: 100%;
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

export default Depoimentos;