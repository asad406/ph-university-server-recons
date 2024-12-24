import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './middleware/globalErrorHandler'
import notFound from './middleware/notFound'
import router from './routes'
const app : Application = express()

//Middle ware
app.use(express.json())
app.use(cors())

app.use('/api/v1/',router)

app.get('/', (req : Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Live 🛫'
  })
})

app.use(globalErrorHandler)
app.use(notFound)
export default app