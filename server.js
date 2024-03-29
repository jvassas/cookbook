const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//Bodyparser mw
app.use(
    bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;
//Connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

//Passport mw
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);


const port = process.env.PORT || 6000;

app.listen(port, () => console.log("Server is running on port", port ));