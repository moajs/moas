/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

// 支持跨域
module.exports = function (req, res, next) {
  console.dir('支持跨域');
  require('cors')();
  next();
};