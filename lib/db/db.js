"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongodb = require("mongodb");

var DB_NAME = 'todo-app';
var db = {
  _dbClient: null,
  connect: function () {
    var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
      var client;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _mongodb.MongoClient.connect(url, {
                poolSize: 10,
                useNewUrlParser: true,
                useUnifiedTopology: true
              });

            case 2:
              client = _context.sent;
              this._dbClient = client;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function connect(_x) {
      return _connect.apply(this, arguments);
    }

    return connect;
  }(),
  getConnection: function getConnection() {
    if (!this._dbClient) {
      console.log('You need to call .connect() first!');
      process.exit(1);
    }

    return this._dbClient.db(DB_NAME);
  }
};
exports.db = db;