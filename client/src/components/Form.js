import styled from "styled-components";
const { useState } = require("react");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  margin-bottem: 10px;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 10px;
    height: 50px;
    font-size: 1rem;
    width: 30vw;
  }
`;

const Form = ({ title, handleSubmit }) => {
  const [term, setTerm] = useState("");
  const handleClick = () => {
    handleSubmit(term);
  };
  return (
    <Wrapper>
      <h2>{title}</h2>
      <input type="number" value={term} onChange={() => setTerm(term)} />
      <button onClick={handleClick}>Submit</button>
    </Wrapper>
  );
};
export default Form;
