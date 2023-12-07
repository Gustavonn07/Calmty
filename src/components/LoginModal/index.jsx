/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const LoginModal = (props) => {
    const emailSalvoJSON = localStorage.getItem('email');
    const emailSalvo = emailSalvoJSON ? JSON.parse(emailSalvoJSON) : null;
    const senhaSalvadaJSON = localStorage.getItem('senha');
    const senhaSalvada = senhaSalvadaJSON ? JSON.parse(senhaSalvadaJSON) : null;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSubmitLogin = (e) => {
        handleSubmit(e);
        const email = document.getElementById('email');
        const senha = document.getElementById('password');
        const modal = document.getElementById('modal');
        const erros = document.querySelectorAll('.erro.erro');
    
        const emailSalvoJSON = localStorage.getItem('email');
        const emailSalvo = emailSalvoJSON ? JSON.parse(emailSalvoJSON) : null;
    
        const senhaSalvadaJSON = localStorage.getItem('senha');
        const senhaSalvada = senhaSalvadaJSON ? JSON.parse(senhaSalvadaJSON) : null;
    
        if (email.value === emailSalvo && senha.value === senhaSalvada) {
            modal.classList.add('closing');
    
            setTimeout(() => {
                props.handleCloseModal();
                props.setLogado(1);
    
                modal.classList.remove('closing');
            }, 250);
            
        } else {
            erros.forEach((erro) => {
                erro.classList.add('error');
            });
        }
    }

    const handleSubmitRegister = (e) => {
        handleSubmit(e);
        const email = document.getElementById('email'); 
        const senha = document.getElementById('password');
        const senhaConfirm = document.getElementById('passwordConfirm');
        const modal = document.getElementById('modal');
        const erros = document.querySelectorAll('.erro.erro');
    
        if (senha.value === senhaConfirm.value && email.value) {
            const emailSalvoJSON = JSON.stringify(email.value);
            localStorage.setItem('email', emailSalvoJSON);
    
            const senhaSalvadaJSON = JSON.stringify(senha.value);
            localStorage.setItem('senha', senhaSalvadaJSON);
    
            modal.classList.add('closing');
    
            setTimeout(() => {
                props.handleCloseModal();
                props.setLogado(1);
    
                modal.classList.remove('closing');
            }, 250);
    
        } else {
            erros.forEach((erro) => {
                erro.classList.add('error');
            });
        }
    }

    const handleRegister = () => {
        const modal = document.getElementById('modal');

        modal.classList.add('closing');

        setTimeout(() => {

            props.setIsRegister(true);
            modal.classList.remove('closing');
        }, 250);
    }

    const handleLogin = () => {
        const modal = document.getElementById('modal');

        modal.classList.add('closing');

        setTimeout(() => {

            props.setIsRegister(false);
            modal.classList.remove('closing');
        }, 250);
    }
    

    return (
        <>
            <Modal>
                <Modal__container id="modal">
                    <Modal__close onClick={() => props.handleCloseModal()}><GrClose color={props.isRegister ? "plain" : "white"} /></Modal__close>

                    {
                        props.isRegister ? (
                            <>
                                <Modal__image src="../../../images/tea-register.jpg" alt="uma imagem de um chá com um livro atrás e diversas folhas" />
                                <Modal__content>
                                    <Modal__heading>Criar Conta:</Modal__heading>

                                    <Modal__form>
                                        <Modal__label htmlFor="email">Email:</Modal__label>
                                        <Modal__inputEmail className="input" id="email" type="email" placeholder="Insira seu email"></Modal__inputEmail>

                                        <Modal__label htmlFor="password">Senha:</Modal__label>
                                        <Modal__inputSenha className="input" id="password" type="password" placeholder="Insira sua senha"></Modal__inputSenha>
                                        <Modal__erro className="erro">Senhas não compativeis</Modal__erro>

                                        <Modal__label htmlFor="password">Confirmar senha:</Modal__label>
                                        <Modal__inputSenha className="input" id="passwordConfirm" type="password" placeholder="Insira sua senha"></Modal__inputSenha>
                                        <Modal__erro className="erro">Senhas não compativeis</Modal__erro>

                                        <Modal__submit type="submit" onClick={handleSubmitRegister} value={"Resgistrar"} />
                                    </Modal__form>

                                    <Modal__text>Já possui uma conta? clique aqui para <Modal__span onClick={handleLogin}>Entrar</Modal__span>.</Modal__text>
                                </Modal__content>
                            </>
                        ) : (
                            <>
                                <Modal__content>
                                    <Modal__heading>Fazer Login:</Modal__heading>

                                    <Modal__form>
                                        <Modal__label htmlFor="email">Email:</Modal__label>
                                        <Modal__inputEmail className="input" id="email" type="email" placeholder="Insira seu email"></Modal__inputEmail>

                                        <Modal__label htmlFor="password">Senha:</Modal__label>
                                        <Modal__inputSenha className="input" id="password" type="password" placeholder="Insira sua senha"></Modal__inputSenha>
                                        <Modal__erro className="erro">Senha ou email não compativel</Modal__erro>

                                        <Modal__submit type="submit" onClick={handleSubmitLogin} value={"Fazer login"} />
                                    </Modal__form>

                                    <Modal__text>Não possui uma conta? clique aqui para <Modal__span onClick={handleRegister}>Criar conta</Modal__span>.</Modal__text>
                                </Modal__content>
                                <Modal__image src="../../../images/tea-login.jpg" alt="uma imagem de um chá com vários saquinhos de chá rodeando" />
                            </>
                        )
                    }
                </Modal__container>
            </Modal>
        </>
    )
}

const Modal = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: var(--shadow-40);
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        top: 0;
        left: 0;
        transform: translate(-21%, -90%);
        width: 120vw;
    }
`;

const Modal__container = styled.div`
    width: 65%;
    height: 90%;
    display: flex;
    position: relative;
    background-color: var(--color-secondary-1);
    overflow: hidden;
    border-radius: .8rem;

    animation: open forwards .3s;

    @media only screen and (max-width: 1200px) {
        width: 80%;
    }

    @media only screen and (max-width: 1200px) {
        width: 90%;
    }

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
    
    @media only screen and (max-width: 600px) {
        height: 100%;
        flex-direction: column;
        padding-top: 5rem;
    }

    @keyframes open {
        0% {
            left: -100%;
        }

        100% {
            left: 0%;
        }
    }

    &.closing {
        animation: close forwards .3s;
        
        @keyframes close {
            0% {
                left: 0%;
            }

            100% {
                left: -100%;
            }
        }
    }
`;

const Modal__close = styled.button`
    position: absolute;
    top: 4%;
    right: 2.5%;

    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        top: 15%;
        right: 5%;
    }
`;

const Modal__image = styled.img`
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const Modal__content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    padding: 5rem;
    gap: 4rem;
    flex-direction: column;
    
    @media only screen and (max-width: 1200px) {
        gap: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 50%;
    }
`;

const Modal__heading = styled.h2`
    color: var(--color-primary-2);
    font-size: 4.8rem;
    width: fit-content;
    position: relative;
    
    @media only screen and (max-width: 800px) {
        font-size: 3.5rem;
    }

    &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: .5rem;
            background-color: var(--color-primary-2);
            border-radius: 10rem;
            animation: inicializar forwards 1.5s;

            @keyframes inicializar {
                0% {
                    width: 0;
                }

                100% {
                    width: 100%;
                }
            }
        }
`;

const Modal__form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .input {
        padding: 0 1rem;
        height: 3.8rem;
        width: 90%;
        border-radius: .4rem;
        font-size: 1.6rem;
        box-shadow: 0 .4rem .6rem var(--shadow-20);
        margin-bottom: 1rem;
        transition: all .2s;

        &:hover,
        &:focus {
            outline: none;
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 .4rem .6rem var(--shadow-40);
        }
    }
`;

const Modal__label = styled.label`
    color: var(--color-primary-1);
    font-weight: 600;
    font-size: 2.8rem;
    text-shadow: 0 .2rem .4rem var(--shadow-20);
`;

const Modal__inputEmail = styled.input``;

const Modal__inputSenha = styled.input``;

const Modal__submit = styled.input`
    width: fit-content;
    padding: .8rem;
    border-radius: .4rem;
    font-size: 1.8rem;
    color: var(--color-white);
    background-color: var(--color-primary-1);
    cursor: pointer;
    box-shadow: 0 .4rem .6rem var(--shadow-40);
    transition: all .2s;

    &:hover,
    &:focus {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 .4rem .6rem var(--shadow-60);
    }

    &:active {
        transform: translateY(-.5px) scale(1.02);
        box-shadow: 0 .4rem .6rem var(--shadow-40);
    }
`;

const Modal__text = styled.p`
    color: var(--color-primary-2);
    font-size: 1.6rem;
    
    @media only screen and (max-width: 800px) {
        font-size: 1.3rem;
    }
`;

const Modal__span = styled.span`
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-primary-3);
    cursor: pointer;
`;

const Modal__erro = styled.p`
    opacity: 0;
    margin-top: -1.5rem;
    font-size: 1rem;
    color: red;

    &.error {
        opacity: 1;
    }
`;

export default LoginModal;