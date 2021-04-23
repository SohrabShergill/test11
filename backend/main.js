import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config.js';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'

dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
});