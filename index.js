'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flag = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yan on 16-1-15.
 */

var PREFIX = 'REACT_TOGGLE_FLAGS';

var ToggleFlagsToolbar = function ToggleFlagsToolbar(props) {
  var _props$flags = props.flags;
  var flags = _props$flags === undefined ? ['debug'] : _props$flags;
  var _props$title = props.title;
  var title = _props$title === undefined ? 'Debug Flags:' : _props$title;

  return _react2.default.createElement(
    'div',
    { className: 'toggle-flags-toolbar' },
    _react2.default.createElement(
      'div',
      { className: 'toggle-flags-toolbar-title' },
      title
    ),
    _react2.default.createElement('hr', null),
    flags.map(function (v) {
      return _react2.default.createElement(
        'div',
        { key: v },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(_reactToggle2.default, { defaultChecked: Flag(v),
            onChange: function onChange(e) {
              return localStorage.setItem(PREFIX + '_' + v, e.target.checked);
            } }),
          _react2.default.createElement(
            'span',
            null,
            ' ',
            v
          )
        )
      );
    })
  );
};

exports.default = ToggleFlagsToolbar;
var Flag = exports.Flag = function Flag(item) {
  return localStorage.getItem(PREFIX + '_' + item) == 'true';
};
