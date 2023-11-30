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
                        <Slider__content>
                            
                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide id="slide02">
                        <Slider__content>

                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide id="slide03">
                        <Slider__content>

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
    height: 85vh;
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
        filter: brightness(90%);
    }

    &#slide03 {
        background-image: url(../../images/orientalTea.jpg);
        background-size: cover;
        background-position: 0 50%;
        filter: brightness(50%);
    }
`;

const Slider__content = styled.ul`
    font-size: 5rem;
`;

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