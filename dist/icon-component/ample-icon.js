"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function AmpleIcon(props) {
  console.log(props.type);

  if (props.type === 'linear') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16",
      className: "App-icon"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "../linear-icons/icons.svg#" + props.icon
    }));
  }

  if (props.type === 'filled') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16",
      className: "App-icon"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "../filled-icons/icons.svg#" + props.icon
    }));
  }
}

var _default = AmpleIcon;
exports.default = _default;