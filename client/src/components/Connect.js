import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled.a`
  align-items: center;
  padding: 10px 15px;
  color: white;
  background: ${color};
  border-radius: 3px;
`;
const Connect = () => {
  return (
    <div>
      <Link to="/login">
        <Button color="red">LOGIN</Button>
      </Link>
      <Link to="/signUp">
        <Button color="blue">SIGNUP</Button>
      </Link>
    </div>
  );
};
export default Connect;
