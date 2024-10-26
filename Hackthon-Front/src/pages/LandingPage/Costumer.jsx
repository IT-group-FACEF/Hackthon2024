import imgSponsors from "../../assets/SponsorsTemp.jpg";
import Tesla from "../../assets/tesla.svg";

const Costumer = () => {
  return (
    <div className="flex justify-center items-center bg-[#F5F7FA] py-[48px] px-[144px] ">
      <div className="pr-[50px]">
        <img
          className="object-cover w-[200px] h-[200px]"
          src={Tesla}
          alt="Desktop"
        />
      </div>
      <div className="flex flex-col max-w-[900px]">
        <p className="text-[16px] text-[#4D4D4D] pb-[16px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-[20px] text-[#4CAF4F] pb-[8px]">Tim Smith</p>
        <p className="text-[16px] text-[#89939E]">
          British Dragon Boat Racing Association
        </p>
        <div className="flex items-center pt-[41px] space-x-[16px]">
          <img
            src={imgSponsors}
            alt="Sponsors"
            className="w-[40px] h-[40px] object-cover"
          />
          <img
            src={imgSponsors}
            alt="Sponsors"
            className="w-[40px] h-[40px] object-cover"
          />
          <img
            src={imgSponsors}
            alt="Sponsors"
            className="w-[40px] h-[40px] object-cover"
          />
          <img
            src={imgSponsors}
            alt="Sponsors"
            className="w-[40px] h-[40px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Costumer;
