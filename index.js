import express from 'express';
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, in HOME');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;