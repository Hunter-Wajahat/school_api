import 'dotenv/config';
import express from 'express';
import ConnectDB from './connectDB.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';

const app = express()
const port = 3000
ConnectDB()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})