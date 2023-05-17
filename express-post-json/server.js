import express from 'express';

let nextId = 1;
const grades = {};

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };

  grades.push(grade);
  nextId++;
  console.log(grades);
  res.status(201);
  res.json(grade);
});

app.listen(8080, () => {
  console.log('Express server is listening on port 8080');
});
