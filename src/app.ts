import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './module/student/student.route'
import { UserRoutes } from './module/user/user.route'
import globalErrorHandler from './middleware/globalErrorHandler'
const app : Application = express()

//Middle ware
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', UserRoutes)
app.use('/api/v1/student', StudentRoutes)

app.get('/', (req : Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Live 🛫'
  })
})

app.use(globalErrorHandler)
export default app