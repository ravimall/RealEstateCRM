import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Real Estate CRM backend listening on port ${PORT}`);
});