const nunjucks = require('nunjucks');
const path = require('path');

function createEnv(viewPath, opts) {
  var
    autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    noCache = opts.noCache || false, // 用opts.noCache || false这样的代码给每个参数加上默认值
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
      // 使用new nunjucks.FileSystemLoader('views')创建一个文件系统加载器，从views目录读取模板。
      new nunjucks.FileSystemLoader(path.resolve(__dirname, viewPath), { // __dirname = /utils
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      });
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

// 变量env就表示Nunjucks模板引擎对象，它有一个render(view, model)方法，正好传入view和model两个参数，并返回字符串。
const env = createEnv('../views', {
  watch: true,
  filters: {
    hex: function (n) {
      return '0x' + n.toString(16);
    }
  }
});



module.exports = env