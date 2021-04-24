import { useState } from "react";
import API from "../api/API";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
  label {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    height: 10%;
    justify-content: space-between;
    align-items: center;
  }
`;
const CreateUser = ({ handleSubmit }) => {
  const history = useHistory();
  const [fields, setFields] = useState({});
  const handleInputChange = (event) => {
    let keyForm = event.target.name;
    let valueForm = event.target.value;
    setFields({ ...fields, [keyForm]: valueForm });
  };

  const handleUserSubmit = async () => {
    try {
      console.log("hi", fields);
      await API.post("", fields);
      history.push(`/accounts/${fields._id}/actions`);
      handleSubmit(fields._id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <h2>insert your details</h2>
      <label>
        {" "}
        name: <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        passport:{" "}
        <input type="number" name="_id" onChange={handleInputChange} />
      </label>
      <label>
        cash: <input type="number" name="cash" onChange={handleInputChange} />
      </label>
      <label>
        credit:{" "}
        <input type="number" name="credit" onChange={handleInputChange} />
      </label>
      <button onClick={handleUserSubmit}>Submit</button>
    </Wrapper>
  );
};
export default CreateUser;
