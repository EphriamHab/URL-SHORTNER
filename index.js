import express from 'express';
import { connectToMongodb } from './connect.js';
import urlRoute from './routes/url.js';
import URL from "./models/Url.js";
import router from './routes/url.js';


const app = express();
const PORT = 8001;

connectToMongodb(`mongodb://127.0.0.1:27017/short-url`)
    .then(() => console.log("Mongodb connected"));


app.use(express.json())
app.use('/url', urlRoute);

app.get('/:shortId', async(req,res)=>{
 const shortId = req.params.shortId
 const entry = await URL.findOneAndUpdate({
    shortId
 },{$push:{
    visitHistory: {
        timestamp: Date.now()
    }
 },
}
);
res.redirect(entry.redirectURL)
})


app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));