const express = require("express");
const mainrouter = require("./routes/index");

//added cors
const cors = require("cors");
app.use(cors());

//added body parser
const rootRouter = require("./routes/index");

const app = express()

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainrouter)
// app.use("/api/v2", v2Router)

// module.exports = router;

app.listen(3000);

 