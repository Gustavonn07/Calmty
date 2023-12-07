/* eslint-disable react/prop-types */
import styled from "styled-components";

const HeaderContent = (props) => {

    return (
        <>
            <Header__container imagem={props.imagem}>
                <Header__box>
                    <Header__title>{props.title}</Header__title>    
                    <Header__paragraph>{props.text}</Header__paragraph>
                </Header__box>

                <Header__btn href={props.link}>{props.btn}</Header__btn>
            </Header__container>
        </>
    )
}

const Header__container = styled.header`
    background-image: linear-gradient(to left, #00000030, #00000030), url(${props => props.imagem});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 10%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`;

const Header__box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header__title = styled.h2`
    font-size: var(--font-heading-0);
    color: var(--color-white);
    text-shadow: 0 .4rem .8rem var(--shadow-60);
    transition: all .2s;
    
    position: relative;

    &:hover {
        transform: translateY(-2px) scale(1.02);

        &::before {
            content: '';
            position: absolute;
            bottom: 0%;
            width: 100%;
            height: .8rem;
            border-radius: 4rem;
            background-color: var(--color-white);

            animation: hover .6s;
        }
    }

    @keyframes hover {
        0% {
            width: 0;
        }

        100% {
            width: 100%;
        }
    }
`;

const Header__paragraph = styled.p`
    font-size: var(--font-heading-2);
    color: var(--color-secondary-0);
    font-weight: bold;
    font-style: italic;
    transition: all .2s;
    text-shadow: 0 .4rem .8rem var(--shadow-60);

    &:hover {
        transform: scale(1.02);
    }
`;

const Header__btn = styled.a`
    font-size: 3rem;
    border-radius: 1rem;
    color: var(--color-white);
    background-color: var(--color-primary-2);
    padding: 1.2rem 1.8rem;
    box-shadow: 0 .8rem 1.2rem var(--shadow-40);
    transition: all .2s;

    &:hover,
    &:focus {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 .8rem 1.2rem var(--shadow-80);
    }

    &:active {
        transform: translateY(-1px) scale(1.01);
        box-shadow: 0 .8rem 1.2rem var(--shadow-60);
    }
`;

export default HeaderContent;