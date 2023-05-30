const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(serve(__dirname + '/static'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
