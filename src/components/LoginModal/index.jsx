/* eslint-disable react/prop-types */
import styled from "styled-components";
import { GrClose } from "react-icons/gr";


const LoginModal = (props) => {

    return (
        <>
            <Modal>
                <Modal__container id="modal">
                    <Modal__close onClick={() => props.handleCloseModal()}><GrClose /></Modal__close>
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
`;

const Modal__container = styled.div`
    width: 90%;
    height: 95%;
    background-color: red;
    position: relative;

    animation: open forwards .3s;

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
`;

export default LoginModal;