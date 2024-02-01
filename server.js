import express from 'express';
const app = express();

app.listen(process.env.PORT || 5000)
console.log("sever is Running on port 5000")