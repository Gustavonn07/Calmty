import Depoimentos from "../../components/Depoimentos";
import Header from "../../components/Header";
import Records from "../../components/Records";

function PageHome() {

  return (
    <>
        <Header sliderOn={true} />
        <Records />
        <Depoimentos />
    </>
  )
}

export default PageHome;
