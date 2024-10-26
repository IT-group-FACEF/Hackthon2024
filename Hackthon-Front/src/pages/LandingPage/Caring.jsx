/* eslint-disable react/no-unescaped-entities */
import person from "../../assets/person.svg";
import notebook from "../../assets/notebook.svg";
import notepad from "../../assets/notepad.svg";
import CardPage from "../../components/CardPage.jsx";

const Caring = () => {
  return (
    <div id="caring" className="flex flex-col justify-center pt-[48px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-[#4D4D4D] justify-center pb-[8px] items-center">
          Monitore e Melhore o Bem-Estar da Sua Equipe
        </p>
        <p className="text-[16px] text-[#717171] justify-center w-[628px] text-center pb-[16px]">
          Nosso software foi desenvolvido para oferecer uma visão clara e
          prática do nível de satisfação dos colaboradores em sua empresa. Com a
          Viver+, os gerentes podem acompanhar indicadores de bem-estar e
          satisfação, permitindo uma gestão mais próxima e humana. Ao entender
          as necessidades e o humor de sua equipe, sua empresa pode implementar
          estratégias de melhoria e criar um ambiente de trabalho mais saudável
          e produtivo.
        </p>
      </div>
      <div className="flex flex-col justify-center pt-[48px]">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <CardPage
            imageUrl={person}
            content="Descubra como sua equipe está"
          />
          <CardPage
            imageUrl={notebook}
            content="Analise seus indicadores através de gráficos"
          />
          <CardPage
            imageUrl={notepad}
            content="Permita que seus funcionários progridam"
          />
        </div>
      </div>
    </div>
  );
};

export default Caring;
