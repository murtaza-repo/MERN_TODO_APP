"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var _mongodb = require("mongodb");

var updateStatus = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(taskId, task) {
    var connection;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.db.getConnection();

          case 2:
            connection = _context.sent;
            _context.next = 5;
            return connection.collection('tasks').updateOne({
              _id: (0, _mongodb.ObjectId)(taskId)
            }, {
              $set: {
                "completed": task.completed
              }
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateStatus(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateStatus = updateStatus;