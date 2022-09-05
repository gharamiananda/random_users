const express = require('express');
require('dotenv').config()
const userRoute = require("./routes/user.routes")

const app = express()
app.use(express.json());
const port = process.env.PORT || 5000

app.use("/api/user", userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})