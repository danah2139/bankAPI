import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import API from "./api/API";
import Connect from "./components/Connect";
import Form from "./components/Form";
import CreateUser from "./components/CreatUser";
import List from "./components/List";
import Actions from "./components/Actions";
import "./App.css";
import { useState } from "react";

function App() {
  const [errrorMessage, setErrorMessage] = useState("");
  const [id, setId] = useState("");
  const handleIdSubmit = async (id) => {
    try {
      await API.get({ id });
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };
  const handleUserSubmit = (id) => {
    setId(id);
    console.log("user created");
  };

  const handleWithdrawSubmit = async (cash) => {};
  const handleDepositeSubmit = async (cash) => {};
  const handleCreditSubmit = async (cash) => {};
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Connect />
            {/* <List /> */}
          </Route>
          <Route path="/signup" exact>
            <CreateUser
              handleSubmit={handleUserSubmit}
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path="/login" exact>
            <Form
              handleSubmit={handleIdSubmit}
              title="enter your id"
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path={`/accounts/${id}/actions`} exact>
            <Actions />
          </Route>
          <Route path={`/accounts/${id}/actions/deposite`} exact>
            <Form
              handleSubmit={handleIdSubmit}
              title="enter amount to deposite"
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path={`/accounts/${id}/actions/withdraw`} exact>
            <Form
              handleSubmit={handleIdSubmit}
              title="enter amount to withdraw"
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path={`/accounts/${id}/actions/updateCredit`} exact>
            <Form
              handleSubmit={handleIdSubmit}
              title="enter credit to update"
              errrorMessage={errrorMessage}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
