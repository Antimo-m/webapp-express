import connection from "../web.js";

const index = (req,res) => {
    const sql = `SELECT * FROM MOVIES`
    connection.query(sql, (err, result) => {
        if(err) {
        return res.status(500).json("Errore interno, riprova tra poco uaglio")
        }res.json({
            result :result
        })
    })
}



export default index