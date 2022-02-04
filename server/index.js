const express = require("express");
const app = express();
const morgan = require("morgan");
const farhangestan = require("./routes/farhangestan");
const ganjvar = require("./routes/ganjvar");
const motaradef = require("./routes/motaradef");
const sereh = require("./routes/sereh");
const teyfi = require("./routes/teyfi");

// middleware
app.use(morgan("dev"));

// routes
app.use("/api/farhangestan", farhangestan);
app.use("/api/ganjvar", ganjvar);
app.use("/api/motaradef", motaradef);
app.use("/api/sereh", sereh);
app.use("/api/teyfi", teyfi);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
