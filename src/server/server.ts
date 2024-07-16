import express, {json, urlencoded} from "express";
import cors from 'cors'
import { loginController } from "../JustiOpos/infrastructure/Routes/loginController";
import { appRouter } from "../JustiOpos/infrastructure/Routes/appRouter";

const app = express()

let port = process.env.PORT ?? 3001

app.use(cors())
app.use(urlencoded({extended:true}))
app.use(json())
app.use('/', appRouter)

app.listen(port, () => {
    console.log(`Server running at: ${process.env.PORT}`)
})
