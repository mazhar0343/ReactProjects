import express from 'express';
import {connectDB} from "./config/db.js";
import Product from "./models/product_model.js";
import {mongoose} from "mongoose";
import productRoutes from "./routes/product_routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log('Server is running on port 5000');
});
