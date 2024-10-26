import imgSponsors from "../../assets/SponsorsTemp.jpg";

const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[36px] text-[#4D4D4D] justify-center">
        Nossos Patrocinadores
      </p>
      <p className="text-[16px] text-[#717171]">
        Patrocinadores, que tornaram este evento, uma realidade.
      </p>
      <div className="flex space-x-[100px] pt-[16px] px-[136px]">
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
        <div className="flex items-center pt-[41px] h-[70px] w-[70px]">
          <img src={imgSponsors} alt="Sponsors" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
