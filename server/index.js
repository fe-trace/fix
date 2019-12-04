const koa = require('koa');
const app = new koa();

app.use(async function(ctx, next) {
    ctx.body = "hello world ~~~"
});

app.listen(3001, function() {
    console.log("server started ~~~");
});