import { Button as AntdButton, Flex } from "antd";

// eslint-disable-next-line react/prop-types
const Button = ({ buttonText, typeButton, style, onClick }) => (
  <Flex gap="small" wrap>
    <AntdButton type={typeButton} style={style} onClick={onClick}>
      {buttonText}
    </AntdButton>
  </Flex>
);

export default Button;
