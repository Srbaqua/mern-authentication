const express = require('express');
const app = express();
const PORT  = process.env.port || 5000;
const bodyParser = require('body-parser');
const signupRoute = require('./routes/signup');

app.use(bodyParser.json());
app.use("/user",signupRoute);

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})