import connection from "../web.js";

export const index = (req,res) => {
    const sql = `SELECT * FROM MOVIES`
    connection.query(sql, (err, result) => {
        if(err) {
        return res.status(500).json({message: "Errore interno, riprova tra poco..."})
        }res.json({
            result :result
        })
    })
}



export const show = (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM MOVIES WHERE ID = ?`
    connection.query(sql, [id], (err, result) => {
        if (err) {
          return  res.status(500).json({message: "error: errore interno"})
        }if (result.length === 0) {
          return  res.status(404).json({error:"film non trovato"})
        }
        const movies = result[0]
        
        const review = `SELECT * FROM reviews WHERE reviews.movie_id = ?`
        connection.query(review, [id], (err, resultReview) => {
            if (err) {
                return res.status(500).json({error: "errore interno"})
            }
            const risultato ={
                ...movies, 
                reviews : resultReview
            }
            res.json(risultato)
        })
    })} 


