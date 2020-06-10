/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
'use strict';

const Service = require('egg').Service;
const res = {
  succeed: false,
  msg: ""
}
class UserService extends Service {

  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', {
      id: uid
    });
    return {
      user
    };
  }
  async cerate(data) {
    const user = await this.app.mysql.insert('user', data)
    return {
      user
    };
  }

  async select(data) {
    console.log(data)
    const user = await this.app.mysql.get('user', {
      username: data.username,
    });
    if (user) {
      if (user.password === data.password) {
        res.succeed = true;
        res.msg = "登录成功";
        res.userinfo = user
      } else {
        res.succeed = false;
        res.msg = "密码不正确";
      }
      console.log(user)
    } else {
      res.succeed = false;
      res.msg = "用户不存在";
    }
    return res;
  }

}

module.exports = UserService;