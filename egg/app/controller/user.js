/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const data = ctx.request.body
    const user = await ctx.service.user.select(data);
    ctx.body = user;
  }
  async show() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
  async create() {
    const {
      ctx,
    } = this;
    const data = ctx.request.body
    const res = await ctx.service.user.select(data);
    console.log(typeof (res))
    console.log(res)
    console.log(res.succeed)

    ctx.body = res;
  }
}

module.exports = UserController;