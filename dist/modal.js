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
      toggleClick = _ref.toggleClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: isOpen ? "block" : "none"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "opacity",
    style: {
      width: '100%',
      position: "absolute",
      opacity: '0.8',
      backgroundColor: 'Black',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-text",
    style: {
      width: '20%',
      position: "absolute",
      top: '45%',
      left: '40%',
      border: '1px solid black',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: toggleClick,
    style: {
      position: "absolute",
      top: "-25px",
      right: "-15px",
      backgroundColor: "white",
      borderRadius: "100px",
      padding: "5px 10px"
    }
  }, " X"), text)));
}