const express = require("express");

//added cors
const cors = require("cors");

//import my mainrouter
const mainrouter = require("./routes/index");

const app = express()

//use CORS middleware
app.use(cors());
app.use(express.json());

//added body parser
const rootRouter = require("./routes/index");



app.use("/api/v1", mainrouter)
// app.use("/api/v2", v2Router)

// module.exports = router;

app.listen(3000);

 