import styled from "styled-components";

const Records = () => {

    const record = async function() {
        const response = fetch('http://localhost:3000/records');
        const json = await response.json;

        return {
            id: json.id,
            record: json.record,
            imagem: json.imagem,
            texto: json.texto
        }
    }

    console.log(record.texto);

    return (
        <>
            <Records__container>
                <Records__heading></Records__heading>
                    
                <Records__Grid>
                    {record.texto}
                </Records__Grid>
            </Records__container>
        </>
    );
}

const Records__container = styled.section`
  height: 100vh;
  display: flex;
  background-color: red;
`;

const Records__heading = styled.section`

`;

const Records__Grid = styled.section`

`;

export default Records;