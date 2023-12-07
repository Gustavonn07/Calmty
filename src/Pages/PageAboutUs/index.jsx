import Header from "../../components/Header";

function PageAboutUs() {

  return (
    <>
        <Header 
          sliderOn={false}
          imagem={'../../images/Equipe.jpg'}
          title={'Conheça nossos serviços'}
          text={'Trabalhando sempre com a melhor qualidade'}
          btn={'Serviços'}
          link={'#servicos'}
        />
    </>
  )
}

export default PageAboutUs;
