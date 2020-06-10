'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg12312312';
  }
  async fal() {
    const { ctx } = this;
    ctx.body = 'hi, egg12312312';
  }

}

module.exports = HomeController;
