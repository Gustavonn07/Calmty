import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import Services from "../../components/Services";

function PageAboutUs() {

  return (
    <>
        <Header 
          sliderOn={false}
          imagem={'../../images/Equipe.jpg'}
          title={'Conheça nossos serviços'}
          text={'Trabalhando sempre com a melhor qualidade'}
          btn={'Ver serviços'}
          link={'#servicos'}
        />
        <AboutUs />
        <Services />
    </>
  )
}

export default PageAboutUs;
