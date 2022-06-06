const controller = {};

controller.list = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);

        conn.query('SELECT * FROM test', (err, rows) =>
        {
            if(err) return res.send(err);

            res.json(rows);
        })
    });
}

controller.detail = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);

        conn.query('SELECT * FROM test WHERE idTest = ?', [req.params.idTest], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json(rows);
        })
    });
}

controller.post = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('INSERT INTO test set ?', [req.body], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('Test agregado');
        })
    });
}

controller.delete = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('DELETE FROM test WHERE idTest = ?', [req.params.idTest], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('Test eliminado');
        })
    });
}

controller.put = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('UPDATE test set ? WHERE idTest = ?', [req.body, req.params.idTest], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('Test modificado');
        })
    });
}

module.exports = controller;