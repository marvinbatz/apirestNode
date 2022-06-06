const express = require("express");
const routes = express.Router();

routes.get('/:idTest', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT test.code, question, answer1, answer2, answer3 FROM answer LEFT JOIN question ON answer.idQuestion=question.idQuestion LEFT JOIN test ON question.idTest=test.idTest WHERE test.idTest = ?', [req.params.idTest], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes;