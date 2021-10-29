const mongoose = require("mongoose");



require("dotenv").config({ path: "variables.env" })
const mongo = process.env.MONGO_URI;
mongoose
    .connect(mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongo connected"))
    .catch((err) => console.error(err));
