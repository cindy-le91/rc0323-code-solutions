import express from 'express';
import pg from 'pg';
var app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    console.log(gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    const { name, course } = req.body;
    const score = Number(req.body.score);
    if (!name || !course || Number.isNaN(score)) {
      res.status(400).json({ error: '"name", "course", and "score" are required fields' });
    }
    if (score < 0 || score > 100) {
      res.status(400).json({ error: '"score" must be between 0 and 100' });
    }
    const sql = `
      update "grades"
        set "name"   = $1,
            "course" = $2,
            "score"  = $3
        where "gradeId" = $4
        returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      res.status(404).json({ error: `cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    const sql = 'delete from "grades" where "gradeId"=$1';
    const params = [gradeId];
    const result = await db.query(sql, params);
    console.log(result);
    console.log(result.rowCount);
    if (result.rowCount === 1) {
      res.status(204).json({ message: 'grade successfully deleted' });
    } else {
      res.status(404).json({ error: `cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (error) {
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
