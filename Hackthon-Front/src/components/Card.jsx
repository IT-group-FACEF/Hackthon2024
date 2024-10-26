import PropTypes from "prop-types";
import { Card } from "antd";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300 }}>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {value.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired, // Espera um array de strings
};

export default DashboardCard;
