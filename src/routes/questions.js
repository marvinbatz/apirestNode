const express = require("express");
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM question', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/:idQuestion', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM question WHERE idQuestion = ?', [req.params.idQuestion], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO question set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Agregado!')
        })
    })
})

routes.delete('/:idQuestion', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM question WHERE idQuestion = ?', [req.params.idQuestion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Eliminado!')
        })
    })
})

routes.put('/:idQuestion', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE question set ? WHERE idQuestion = ?', [req.body, req.params.idQuestion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Actualizado!')
        })
    })
})

module.exports = routes;