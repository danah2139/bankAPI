import { useEffect, useState } from "react";
import API from "../api/API";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px;
  .accountRow {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: baseline;
  }

  .cellCategory {
    font-size: 0.8rem;
    color: rgb(51, 51, 51);
    margin-right: 5px;
  }
`;

const List = () => {
  let [accounts, setAccounts] = useState(null);
  useEffect(() => getAllAccounts(), []);
  const getAllAccounts = async () => {
    try {
      let { data } = await API.get("");
      console.log(data);
      setAccounts(
        data.map((account) => ({
          id: account._id,
          name: account.name,
          credit: account.credit,
          cash: account.cash,
          isActive: account.isActive,
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      {accounts &&
        accounts.map((account) => {
          return (
            <div className="accountRow" key={account.id}>
              <div className="cell">
                <span className="cellCategory">Passport ID:</span>
                {account.id}
              </div>
              <div className="cell">
                <span className="cellCategory">User Name:</span>
                {account.name}
              </div>
              <div className="cell">
                <span className="cellCategory">Active Status:</span>
                {account.isActive}
              </div>
              <div className="cell">
                <span className="cellCategory">Credit:</span>
                {account.credit}
              </div>
              <div className="cell">
                <span className="cellCategory">Cash:</span>
                {account.cash}
              </div>
            </div>
          );
        })}
    </Wrapper>
  );
};
export default List;
