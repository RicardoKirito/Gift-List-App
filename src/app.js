import express from 'express'
import morgan from 'morgan';
import registerRoutes from './routes/guest_register.routes.js'
import giftRoutes from './routes/gift.routes.js'
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:  "https://e5f06a03.gift-list-sy1.pages.dev",
    credentials: true,
}))
app.use("/api", registerRoutes)
app.use("/api", giftRoutes)

export default app;