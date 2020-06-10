/* eslint-disable eol-last */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);
  router.post('/fal', controller.home.fal);
  router.resources('/user', controller.user);
};