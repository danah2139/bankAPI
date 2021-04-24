import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.a`
  cursor: pointer;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 2rem 1rem;
  font-weight: bold;
  color: white;
  background: ${(props) => props.theme.main};
  border-radius: 3px;
`;
const Connect = () => {
  return (
    <Wrapper>
      <h2>Please choose way to connect: </h2>
      <Link to="/login">
        <Button theme={{ main: "blue" }}>LOGIN</Button>
      </Link>
      <Link to="/signUp">
        <Button theme={{ main: "purple" }}>SIGN UP</Button>
      </Link>
    </Wrapper>
  );
};
export default Connect;
