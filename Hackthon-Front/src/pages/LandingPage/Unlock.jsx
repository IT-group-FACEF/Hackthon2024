/* eslint-disable react/no-unescaped-entities */
import UnlockImg from "../../assets/Unlock.svg";

const Unlock = () => {
  return (
    <div id="unlock" className="flex flex-row items-center justify-center px-[144px] py-[100px]">
      <img src={UnlockImg} alt="Unlock" />
      <div className="flex flex-col w-[661px] pe-[49px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[16px]">
          Benefícios que Vão Transformar sua Vida
        </p>
        <p className="text-[14px] text-[#717171] pb-[32px]">
          <p className="pb-[16px]">
            Autoconhecimento: "Entenda melhor suas emoções e os fatores que
            impactam sua satisfação."
          </p>
          <p className="pb-[16px]">
            Equilíbrio Emocional: "Descubra práticas e insights que ajudam você
            a encontrar um ponto de equilíbrio diário."
          </p>
          <p className="pb-[16px]">
            Crescimento Pessoal: "Ferramentas para ajudá-lo a estabelecer metas
            e a alcançar uma vida mais feliz e plena."
          </p>
        </p>
      </div>
    </div>
  );
};

export default Unlock;
