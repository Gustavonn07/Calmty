import Slider from "../Slider";

const Header = (props) => {

    return (
        <>
            {
                props.sliderOn && (
                    <Slider />
                )
            }
        </>
    )
}

export default Header;