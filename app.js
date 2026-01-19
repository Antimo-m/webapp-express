import express from "express"
import db from "./web.js"
import router from "./Routers/routes.js"
import notFound from "./Middlewears/notFound.js"
import errorHandler from "./Middlewears/ErrorHandler.js"

const app = express ()
const port = 3000 

app.use("/movies", router)

app.use(notFound)
app.use(errorHandler)
app.listen(port, (err) => {
    if(err) {
        return console.error("errore durante l'avvio",err)
    }else{
        console.log(`Benvenuto sulla porta ${port}`)
    }
})