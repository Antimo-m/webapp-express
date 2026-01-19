import express from "express"
import webapp from "./web.js"

const app = express ()
const port = 3000 

app.listen(port, (err) => {
    if(err) {
        return console.error("errore durante l'avvio",err)
    }else{
        console.log(`Benvenuto sulla porta ${port}`)
    }
})