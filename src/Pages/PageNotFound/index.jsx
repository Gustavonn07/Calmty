import styled from "styled-components";

function PageNotFound() {

    return (
      <>
        <NotFound__container>
            <NotFound__title>Oh não! <br /> Parece que ocorreu um erro.</NotFound__title>
            <NotFound__paragraph>Você está em um local que não deveria ser acessado.</NotFound__paragraph>
            <NotFound__btn href="/">Voltar ao início</NotFound__btn>
        </NotFound__container>
      </>
    )
  }

const NotFound__container = styled.main`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right bottom, var(--color-primary-0), var(--color-secondary-2));
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
`;

const NotFound__title = styled.h1`
  text-align: center;
  color: var(--color-white);
  font-size: var(--font-heading-1);
  text-shadow: 0 .4rem .8rem var(--shadow-40);

  @media only screen and (max-width: 600px){
    font-size: var(--font-heading-2);
  }
`;

const NotFound__paragraph = styled.p`
  text-align: center;
  color: var(--color-secondary-0);
  font-size: var(--font-heading-3);
  text-shadow: 0 .4rem .8rem var(--shadow-20);

  @media only screen and (max-width: 600px){
    font-size: var(--font-heading-4);
  }
`;

const NotFound__btn = styled.a`
  font-size: 3rem;
  border-radius: 1rem;
  color: var(--color-white);
  background-color: var(--color-primary-2);
  padding: 1.2rem 1.8rem;
  box-shadow: 0 .8rem 1.2rem var(--shadow-40);
  transition: all .2s;

  @media only screen and (max-width: 800px) {
      font-size: 2.5rem;
  }

  @media only screen and (max-width: 500px) {
      font-size: 2rem;
  }

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
  
export default PageNotFound;
  