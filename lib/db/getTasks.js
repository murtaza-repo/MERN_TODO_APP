"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var connection, taskDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.db.getConnection();

          case 2:
            connection = _context.sent;
            _context.next = 5;
            return connection.collection('tasks').find({
              uid: userId
            }).sort({
              "date": -1
            }).toArray();

          case 5:
            taskDetails = _context.sent;
            return _context.abrupt("return", taskDetails);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTasks(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;