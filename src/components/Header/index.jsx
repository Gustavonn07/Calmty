/* eslint-disable react/prop-types */
import HeaderContent from "../HeaderContent";
import Slider from "../Slider";

const Header = (props) => {

    return (
        <>
            {
                props.sliderOn ? (
                    <Slider />
                ) : (
                    <HeaderContent
                        imagem={props.imagem}
                        title={props.title}
                        text={props.text}
                        btn={props.btn}
                        link={props.link}
                    />
                )
            }
        </>
    )
}

export default Header;