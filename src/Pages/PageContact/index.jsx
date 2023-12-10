import Header from "../../components/Header";

function PageContact() {

  return (
    <>
        <Header
          sliderOn={false} 
          imagem={'../../images/shop.jpg'}
          title={'Entre em contato conosco!'}
          text={'Estamos ansiosos para ouvir de você!'}
          btn={'Entrar em contato'}
          link={'#contato'}
        />
    </>
  )
}

export default PageContact;
