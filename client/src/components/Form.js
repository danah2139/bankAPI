const { useState } = require("react");

const Form = (title, handleSubmit) => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <h2>{title}</h2>
      <input type="text" onChange={() => setTerm(term)} value={term} />
      <input type="submit" onSubmit={handleSubmit(term)} />
    </div>
  );
};
export default Form;
