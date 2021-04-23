require("./db/mongoose");
const express = require("express");
const app = express();

const userRouter = require("./routers/user");

app.use(express.json());
app.use(cors());

app.use(userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
