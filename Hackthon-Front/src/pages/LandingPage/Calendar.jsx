import Mobile from "../../assets/Mobile.svg";

const Calendar = () => {
  return (
    <div className="flex flex-row items-center justify-center py-[48px] px-[144px]">
      <div className="flex flex-col w-[601px] pr-[50px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[20px]">
          Encontre o equilíbrio e a satisfação que você merece
        </p>
        <p className="text-[14px] text-[#717171] pb-[32px]">
          Descubra como pequenos passos diários podem levar a uma vida de
          bem-estar e plenitude. Na Viver+, oferecemos ferramentas e orientações
          que ajudam você a entender e melhorar sua qualidade de vida, com foco
          em seu bem-estar subjetivo. Venha explorar maneiras de se conectar
          consigo mesmo, encontrar paz e satisfação em cada momento.
        </p>
      </div>
      <div className="pl-[50px] pr-[60px]">
        <img src={Mobile} alt="Mobile" />
      </div>
    </div>
  );
};

export default Calendar;
