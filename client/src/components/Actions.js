import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.a`
  align-items: center;
  padding: 10px 15px;
  color: white;
  background: ${(props) => props.theme.main};
  border-radius: 3px;
`;

const Actions = () => {
  // Define what main theme will look like
  const theme = {
    main: "mediumseagreen",
  };
  return (
    <Wrapper>
      <Link to="/accounts/:id/actions/withdraw">
        <Button theme={{ main: "red" }}>Withdraw</Button>
      </Link>
      <Link to="/accounts/:id/actions/deposite">
        <Button theme={{ main: "green" }}>Deposite</Button>
      </Link>
      <Link to="/accounts/:id/actions/transfer">
        <Button theme={{ main: "blue" }}>Transfer</Button>
      </Link>
      <Link to="/accounts/:id/actions/updateCredit">
        <Button theme={{ main: "purple" }}>Update Credit</Button>
      </Link>
    </Wrapper>
  );
};
export default Actions;
