const templateIns = require('../utils/templateRender');
var fn_hello = async (ctx, next) => {
  var name = ctx.params.name;
  var resHtml = templateIns.render('hello.html', {name: 'xiao ming'});
  ctx.response.body = resHtml;
};

module.exports = {
  'GET /hello/:name': fn_hello
};