import app from './app';
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('\x1b[44m%s\x1b[0m', `App is running on PORT ${PORT} 🚀`);
});
