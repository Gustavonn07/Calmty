import { useState } from "react";
import styled from "styled-components";

const Slider = () => {

    const [position, setPosition] = useState(0);

    return (
        <>
            <Slider__container>
                <Slider__slides $position={position}>
                    <Slider__slide>
                        <Slider__content>
                            
                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide>
                        <Slider__content>

                        </Slider__content>
                    </Slider__slide>

                    <Slider__slide>
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
    height: 92vh;
    background-color: var(--color-secondary-2);
    overflow: hidden;
    position: relative;
`
const Slider__slides = styled.div`
    width: 300%;
    display: flex;
    position: absolute;
    top: 0;
    left: calc(-100% * ${props => props.$position || 0});
    transition: all 500ms ease;
`

const Slider__slide = styled.div`
    width: 100%;
`

const Slider__content = styled.ul`
    font-size: 5rem;
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

    &.active {
        background-color: var(--color-primary-2);
    }
`;

export default Slider;