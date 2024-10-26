import Button from "../../components/Button.jsx";
import logo from "../../assets/logo.png";
import {
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SendOutlined,
} from "@ant-design/icons";
// import { Input } from "../../components/input.tsx";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <div className="flex flex-col justify-center items-center bg-[#F2E8CF] w-full">
        <div className="flex justify-center items-center px-4 py-2 bg-[#F2E8CF] pt-[32px]">
          <p className="text-[64px] text-[#262626] text-center">
            Se você deseja se alcançar <p> caminhe conosco</p>
          </p>
        </div>
        <div className="py-[32px]">
          <Button
            buttonText="Register"
            typeButton="primary"
            href="/register"
            style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#C9D9A7] w-full px-[165px] py-[64px] ">
        <div className="flex flex-col pr-[300px]">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20" />
          </a>
          <p className="text-[16px] text-[#262626] pt-[40px]">
            Copyright © 2024 Hackaton. <p>All rights reserved.</p>
          </p>
          <div className="flex flex-row pt-[40px] space-x-[16px]">
            <InstagramOutlined style={{ fontSize: 32, color: "#262626" }} />
            <TwitterOutlined style={{ fontSize: 32, color: "#262626" }} />
            <YoutubeOutlined style={{ fontSize: 32, color: "#262626" }} />
          </div>
        </div>
        <div className="flex flex-col pr-[90px]">
          <p className="text-[20px] text-[#262626]">Company</p>
          <div className="flex flex-col pt-[24px]">
            <p className="text-[14px] text-[#262626] pb-[12px]">About us</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Blog</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Contact us</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Pricing</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Testimonials</p>
          </div>
        </div>
        <div className="flex flex-col pr-[80px]">
          <p className="text-[20px] text-[#262626]">Support</p>
          <div className="flex flex-col pt-[24px]">
            <p className="text-[14px] text-[#262626] pb-[12px]">Help center</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">
              Terms of service
            </p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Legal</p>
            <p className="text-[14px] text-[#262626] pb-[12px]">
              Privacy policy
            </p>
            <p className="text-[14px] text-[#262626] pb-[12px]">Status</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] text-[#262626] pb-[24px]">
            Stay up to date
          </p>
          {/* <Input
            placeholder="Enter your email"
          /> */}
          <div className="flex justify-right items-center w-[255px] h-[40px] bg-[#566573] rounded space-x-[90px] p-[12px]">
            <p className="text-[14px] text-[#D9DBE1] ">Your email address</p>
            <SendOutlined style={{ fontSize: 18, color: "#D9DBE1" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
