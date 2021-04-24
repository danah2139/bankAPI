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
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [errrorMessage, setErrorMessage] = useState("");
  const [id, setId] = useState("");
  const handleIdSubmit = async (id) => {
    try {
      let user = await API.get({ id });
      setId(user._id);
      history.push(`/accounts/${id}/actions`);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };
  const handleUserSubmit = (id) => {
    setId(id);
    console.log("user created");
  };
  //TODO: refactoring to one func

  const handleWithdrawSubmit = async (cash) => {
    try {
      await API.put(`${id}/withdraw`, cash);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };
  const handleDepositeSubmit = async (cash) => {
    try {
      await API.put(`${id}/deposite`, cash);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };
  const handleCreditSubmit = async (cash) => {
    try {
      await API.put(`${id}/updateCredit`, cash);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Connect />
            <List />
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
            <Actions id={id} />
          </Route>
          <Route path={`/accounts/${id}/actions/deposite`} exact>
            <Form
              handleSubmit={handleDepositeSubmit}
              title="enter amount to deposite"
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path={`/accounts/${id}/actions/withdraw`} exact>
            <Form
              handleSubmit={handleWithdrawSubmit}
              title="enter amount to withdraw"
              errrorMessage={errrorMessage}
            />
          </Route>
          <Route path={`/accounts/${id}/actions/updateCredit`} exact>
            <Form
              handleSubmit={handleCreditSubmit}
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
