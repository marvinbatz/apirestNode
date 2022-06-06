const quesController = {};

quesController.list = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);

        conn.query('SELECT * FROM question', (err, rows) =>
        {
            if(err) return res.send(err);

            res.json(rows);
        })
    });
}

quesController.detail = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);

        conn.query('SELECT * FROM question WHERE idQuestion = ?', [req.params.idQuestion], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json(rows);
        })
    });
}

quesController.post = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('INSERT INTO question set ?', [req.body], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('question agregado');
        })
    });
}

quesController.delete = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('DELETE FROM question WHERE idQuestion = ?', [req.params.idQuestion], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('question eliminado');
        })
    });
}

quesController.put = (req, res) =>
{
    req.getConnection((err, conn) =>
    {
        if(err) return res.send(err);
        console.log(req.body);

        conn.query('UPDATE question set ? WHERE idQuestion = ?', [req.body, req.params.idQuestion], (err, rows) =>
        {
            if(err) return res.send(err);

            res.json('question modificado');
        })
    });
}

module.exports = quesController;