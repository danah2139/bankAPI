import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import API from "./api/API";
import Form from "./components/Form";
import Actions from "./components/Actions";
import "./App.css";
import { useState } from "react";

function App() {
  const [errrorMessage,setErrorMessage] = useState('')
  const handleIdSubmit = (id)=>{
    try {
      await API.post({id});
    } catch (e) {
      setErrorMessage(e.message)
      console.log(e);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Form handleSubmit={handleIdSubmit} title="enter your id" errrorMessage={errrorMessage} />
          </Route>
          <Route path="/accounts/:id/actions">
            <Actions />
          </Route>
          <Route path="/accounts/:id/actions/deposite">
            <Form handleSubmit={handleIdSubmit} title="enter amount to deposite" errrorMessage={errrorMessage} />
          </Route>
          <Route path="/accounts/:id/actions/withdraw">
            <Form handleSubmit={handleIdSubmit} title="enter amount to withdraw" errrorMessage={errrorMessage} />
          </Route>
          <Route path="/accounts/:id/actions/updateCredit">
            <Form handleSubmit={handleIdSubmit} title="enter credit to update" errrorMessage={errrorMessage} />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
