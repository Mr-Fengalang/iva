/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591603454680_6631';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '106.53.114.60',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Qq123456__0',
      // 数据库名
      database: 'login',
      debug: false,

    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};