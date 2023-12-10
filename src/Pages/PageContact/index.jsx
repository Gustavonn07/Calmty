import Contacts from "../../components/Contacts";
import Social from "../../components/Social";
import Header from "../../components/Header";
import Sedes from "../../components/Sedes";

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
        <Contacts />
        <Social />
        <Sedes />
    </>
  )
}

export default PageContact;
