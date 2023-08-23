import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import expenseRouter from './routes/expenseRoute.js'
import connectDb from './connectDb.js'
import 'express-async-errors'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/expense', expenseRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
