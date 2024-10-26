import img from "../../assets/imgHome.svg";
import dashboarImg from "../../assets/dashboards.svg";
import Projections from "../../assets/Projections.svg";
import { Carousel } from "antd";

const Home = () => (
  <>
    <style>
      {`
        .ant-carousel .slick-next{
        color:black ;
        }
        .ant-carousel .slick-prev{
        color:black ;
        }
        .ant-carousel .slick-dots li.slick-active button{
        background: #000000;
        }
        .ant-carousel .slick-dots li button{
        background: #000000;
        }
      `}
    </style>

    <Carousel
      arrows
      infinite={true}
      autoplay
      autoplaySpeed={7000}
      draggable
      swipeToSlide
    >
      <div>
        <div className="flex justify-between items-center px-[144px] py-[80px] space-x-4 space-y-9 bg-[#F2E8CF] ">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#262626]">
                Transforme Sua Qualidade de Vida{" "}
                <p className="text-[#567A35]">com a Viver+</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Uma abordagem inovadora para alcançar o bem-estar que você
                merece. Vamos juntos explorar uma vida mais equilibrada e plena.
              </p>
            </div>
          </div>
          <a className="flex items-center cover">
            <img className="h-[400px] w-[400px]" src={img} alt="img" />
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center px-[144px] py-[80px] space-x-[300px] space-y-9 bg-[#FDF5E6]">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#262626]">
                Entenda como sua equipe
                <p className="text-[#567A35]"> se sente, com dados reais.</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Através de gráficos e indicadores de bem-estar e satisfação, é
                possível entender como se encontra sua equipe
              </p>
            </div>
          </div>
          <a className="flex items-center">
            <img className="h-[400px] w-[400px]" src={dashboarImg} alt="img" />
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center px-[144px] py-[80px] space-x-4 space-y-9 bg-[#E0E0DE]">
          <div className="flex flex-col">
            <div>
              <p className="text-[64px] text-[#262626]">
                Torne-se aquilo que
                <p className="text-[#567A35]">você se orgulha</p>
              </p>
              <p className="text-[16px] text-[#717171] pt-[16px] pb-[32px]">
                Através de auto-avaliações, será possível criar uma rotina de
                bem-estar e satisfação que se encaixe perfeitamente em sua vida.
              </p>
            </div>
          </div>
          <a className="flex items-center">
            <img className="h-[400px] w-[400px]" src={Projections} alt="img" />
          </a>
        </div>
      </div>
    </Carousel>
    <br />
  </>
);

export default Home;
