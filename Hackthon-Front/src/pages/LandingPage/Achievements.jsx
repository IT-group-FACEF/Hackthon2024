import { UserOutlined } from "@ant-design/icons";

const Achievements = () => {
  return (
    <div id="achievements" className="flex flex-row items-center justify-center py-[64px] px-[144px]">
      <div className="flex flex-col pr-[350px] pl-[100px]">
        <p className="text-[36px] text-[#4D4D4D] pb-[8 px] ">
          Ajudando você a alcançar o
          <p className="text-[#4CAF4F]">bem-estar que merece</p>
        </p>
        <p className="text-[16px] text-[#18191F] w-[550px]">
          Juntos, estamos construindo um caminho de autoconhecimento e
          satisfação.
        </p>
      </div>
      <div>
        <div className="flex">
          <div className="flex flex-row pb-[40px]">
            <UserOutlined
              className="text-[#4CAF4F] pr-[16px]"
              style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px] w-[300px]">
              1,234,567
              <p className="text-[16px] text-[#717171]">Usuários Satisfeitos</p>
            </p>
            <UserOutlined
              className="text-[#4CAF4F] pr-[16px]"
              style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px] w-[350px]">
              12,345
              <p className="text-[16px] text-[#717171]">
                Sessões de Acompanhamento
              </p>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <UserOutlined
              className="text-[#4CAF4F] pr-[16px]"
              style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[120px]">
              567,890
              <p className="text-[16px] text-[#717171]">
                Relatórios Personalizados
              </p>
            </p>
            <UserOutlined
              className="text-[#4CAF4F] pr-[16px]"
              style={{ fontSize: 40 }}
            />
            <p className="text-[28px] text-[#4D4D4D] pr-[100px]">
              2,345,678
              <p className="text-[16px] text-[#717171]">Interações Positivas</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
