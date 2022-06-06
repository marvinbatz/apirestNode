const express = require("express");
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM answer', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/:idAnswer', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM answer WHERE idAnswer = ?', [req.params.idAnswer], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO answer set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Agregado!')
        })
    })
})

routes.delete('/:idAnswer', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM answer WHERE idAnswer = ?', [req.params.idAnswer], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Eliminado!')
        })
    })
})

routes.put('/:idAnswer', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE answer set ? WHERE idAnswer = ?', [req.body, req.params.idAnswer], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Actualizado!')
        })
    })
})

module.exports = routes;