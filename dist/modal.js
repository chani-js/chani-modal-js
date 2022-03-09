"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Modal(_ref) {
  var text = _ref.text,
      isOpen = _ref.isOpen,
      toggleClick = _ref.toggleClick,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: {
      display: isOpen ? "block" : "none"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(className, "-voile")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(className, "-content")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(className, "-text")
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(className, "-close"),
    onClick: toggleClick
  }, " X"), text)));
}