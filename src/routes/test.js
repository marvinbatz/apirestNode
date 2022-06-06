const express = require("express");
const routes = express.Router();

// const testController = require('../controlles/testController');

// router.get('/', testController.list);
// router.get('/:idTest', (testController.detail));
// router.post('/', (testController.post));
// router.delete('/:idTest', (testController.delete));
// router.put('/:idTest', (testController.put));


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM test', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/:idTest', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM test WHERE idTest = ?', [req.params.idTest], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO test set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Agregado!')
        })
    })
})

routes.delete('/:idTest', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM test WHERE idTest = ?', [req.params.idTest], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Eliminado!')
        })
    })
})

routes.put('/:idTest', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE test set ? WHERE idTest = ?', [req.body, req.params.idTest], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Actualizado!')
        })
    })
})

// routes.get('/', (req, res)=>{
//     req.getConnection((err, conn) =>
//     {
//         if(err) return res.send(err);

//         conn.query('SELECT * FROM test', (err, rows) =>
//         {
//             if(err) return res.send(err);

//             res.json(rows);
//         })
//     });
// })

// controller.list = (req, res) =>
// {
    
// }



module.exports = routes;