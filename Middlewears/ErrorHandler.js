const errorHandler = (err, req, res, next) =>{
  console.error(err.stack)
  res.status(500).json({error:"errore interno gestito da me"})
}


export default errorHandler