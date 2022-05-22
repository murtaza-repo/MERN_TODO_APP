"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _getTasksRoute = require("./getTasksRoute");

var _createUserInfoRoute = require("./createUserInfoRoute");

var _getUserDetailsRoute = require("./getUserDetailsRoute");

var _createTaskRoute = require("./createTaskRoute");

var _updateStatusRoute = require("./updateStatusRoute");

var _deleteTaskRoute = require("./deleteTaskRoute");

var routes = [_getTasksRoute.getTasksRoute, _createUserInfoRoute.createUserInfoRoute, _getUserDetailsRoute.getUserDetailsRoute, _createTaskRoute.createTaskRoute, _updateStatusRoute.updateStatusRoute, _deleteTaskRoute.deleteTaskRoute];
exports.routes = routes;