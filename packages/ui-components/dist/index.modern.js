import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Button(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, props), children);
}

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent() {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component:");
};
var SSButton = function SSButton(props) {
  return /*#__PURE__*/React.createElement(Button, props);
};

export { ExampleComponent, SSButton };
//# sourceMappingURL=index.modern.js.map
