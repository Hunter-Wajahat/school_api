import 'dotenv/config';
import express from 'express';
import ConnectDB from './connectDB.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
import admin_router from './routes/adminRoutes.js';
import publicRouter from './routes/publicRoutes.js';
import cors from 'cors';

const app = express()
const port = 3000
ConnectDB()
app.use(cookieParser())
const corsOption = {
  origin:process.env.front_end,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true

}
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRouter)
app.use('/admin', admin_router)
app.use('/public_routes',publicRouter )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})