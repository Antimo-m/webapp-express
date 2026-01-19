import express from "express"

const app = express ()
const port = 3000 

app.listen(port, (err) => {
    if(err) {
        return console.err
    }
})