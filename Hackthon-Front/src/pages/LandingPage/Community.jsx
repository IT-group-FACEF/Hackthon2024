import { UserOutlined } from "@ant-design/icons";
const Community = () => {
  return (
    <div id="community" className="flex flex-col justify-center items-center py-[70px]">
      <div className="flex flex-col pt-[100px] items-center">
        <div className="flex items-center">
          <p className="text-[36px] text-[#4D4D4D] text-center">
            Manage your entire community
            <span className="block text-center">in a single system</span>
          </p>
        </div>
        <p className="text-[16px] text-[#717171] text-center pt-[8px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center items-center pt-[40px] space-x-[128px]">
        <div className="flex flex-col items-center h-[299px] w-[299px]">
          <p className="flex flex-col items-center">
            <UserOutlined style={{ fontSize: 65 }} />
            <p className="text-[28px] text-[#4D4D4D] text-center">
              Membership
              <span className="block text-center">Organisations</span>
            </p>
            <p className="text-[14px] text-[#717171] text-center pt-[8px]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </p>
        </div>
        <div className="flex flex-col items-center h-[299px] w-[299px]">
          <p className="flex flex-col items-center">
            <UserOutlined style={{ fontSize: 65 }} />
            <p className="text-[28px] text-[#4D4D4D] text-center">
              National
              <span className="block text-center">Associations</span>
            </p>
            <p className="text-[14px] text-[#717171] text-center pt-[8px]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </p>
        </div>
        <div className="flex flex-col items-center h-[299px] w-[299px]">
          <p className="flex flex-col items-center">
            <UserOutlined style={{ fontSize: 65 }} />
            <p className="text-[28px] text-[#4D4D4D] text-center">
              Clubs And
              <span className="block text-center">Groups</span>
            </p>
            <p className="text-[14px] text-[#717171] text-center pt-[8px]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
