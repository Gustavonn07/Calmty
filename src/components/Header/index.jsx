import Slider from "../Slider";

const Header = ({sliderOn}) => {

    return (
        <>
            {
                sliderOn && (
                    <Slider />
                )
            }
        </>
    )
}

export default Header;