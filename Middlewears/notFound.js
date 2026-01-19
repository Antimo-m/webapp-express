const notFound =  (req, res, next) => {
    res.status(404).json({Error: "film non trovato"})
}

export default notFound