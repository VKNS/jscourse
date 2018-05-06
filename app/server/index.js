import app from './app';

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`listening to the http://localhost:${port}`);
