'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugBoolean = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Created by yan on 16-1-15.
 */

var DebugToolbar = function DebugToolbar(props) {
  var _props$variables = props.variables;
  var variables = _props$variables === undefined ? ["chart", "redux-logger"] : _props$variables;

  return _react2.default.createElement(
    'div',
    {className: 'debug-toolbar'},
    _react2.default.createElement(
      'div',
      {style: {fontSize: '0.8em'}},
      'DebugToolbar'
    ),
    variables.map(function (v) {
      return _react2.default.createElement(
        'div',
        {key: v},
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(_reactToggle2.default, {
            defaultChecked: DebugBoolean(v),
            onChange: function onChange(e) {
              return localStorage.setItem('debug-' + v, e.target.checked);
            }
          }),
          _react2.default.createElement(
            'span',
            null,
            v
          )
        )
      );
    })
  );
};

exports.default = DebugToolbar;
var DebugBoolean = exports.DebugBoolean = function DebugBoolean(item) {
  return localStorage.getItem('debug-' + item) == 'true';
};
