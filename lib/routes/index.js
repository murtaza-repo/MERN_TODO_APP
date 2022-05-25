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

var _updateTaskRoute = require("./updateTaskRoute");

var routes = [_createUserInfoRoute.createUserInfoRoute, _getTasksRoute.getTasksRoute, _getUserDetailsRoute.getUserDetailsRoute, _createTaskRoute.createTaskRoute, _updateTaskRoute.updateTaskRoute, _updateStatusRoute.updateStatusRoute, _deleteTaskRoute.deleteTaskRoute];
exports.routes = routes;