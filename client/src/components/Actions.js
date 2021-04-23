import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled.a`
  align-items: center;
  padding: 10px 15px;
  color: white;
  background: ${color};
  border-radius: 3px;
`;

const Actions = () => {
  return (
    <div>
      <Link to="/accounts/:id/actions/withdraw">
        <Button color="red">Withdraw</Button>
      </Link>
      <Link to="/accounts/:id/actions/deposite">
        <Button color="green">Deposite</Button>
      </Link>
      <Link to="/accounts/:id/actions/transfer">
        <Button color="blue">Transfer</Button>
      </Link>
      <Link to="/accounts/:id/actions/updateCredit">
        <Button color="purple">Update Credit</Button>
      </Link>
    </div>
  );
};
export default Actions;
