import { Card } from "antd";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 500 }}>
      <p>{value}</p>
    </Card>
  );
};

export default DashboardCard;
