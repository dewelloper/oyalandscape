webpackJsonp([1],{

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"D:/projects/oyapeyzaj/oya/src/styles\"]}!./src/routes/Contact/components/Contact.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".labelLeft{padding-left:10px;min-width:100px}.leftPadding{margin-left:100px}@media only screen and (max-width:620px){.leftPadding{margin-left:7px}}", "", {"version":3,"sources":["D:/projects/oyapeyzaj/oya/src/routes/Contact/components/src/routes/Contact/components/Contact.css"],"names":[],"mappings":"AAAA,WACI,kBAAkB,AAClB,eAAgB,CACnB,AACD,aACI,iBAAkB,CACrB,AAED,yCACI,aACI,eAAgB,CACnB,CAAA","file":"Contact.css","sourcesContent":[".labelLeft{\r\n    padding-left: 10px;\r\n    min-width: 100px;\r\n}\r\n.leftPadding{\r\n    margin-left: 100px;\r\n}\r\n\r\n@media only screen and (max-width:620px) {\r\n    .leftPadding{\r\n        margin-left: 7px;\r\n    }\r\n  }\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/routes/Contact/components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Contact_css__ = __webpack_require__("./src/routes/Contact/components/Contact.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Contact_css__);





// Dependencies




var Button = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Button, _Component);

  function Button(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Button);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      isClicked: false
    };
    _this.logFormDataToConsole = _this.logFormDataToConsole.bind(_this);
    return _this;
  }
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Button, [{
    key: 'logFormDataToConsole',
    value: function logFormDataToConsole(event) {
      console.log('Form Values', this.props.formValues);
      this.setState({ isClicked: true });

      event.preventDefault();
      fetch('/Email', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: this.props.formValues['subject'],
          content: this.props.formValues['message']
        })
      }, 'headers', new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }))).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        alert(responseText);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'button',
        { className: 'btn leftPadding',
          disabled: this.state.isClicked,
          onClick: this.logFormDataToConsole
        },
        'Notunuzu G\xF6nderin'
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Button.propTypes = {
  email: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  formValues: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    subject: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./src/routes/Contact/components/Contact.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"D:/projects/oyapeyzaj/oya/src/styles\"]}!./src/routes/Contact/components/Contact.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"D:/projects/oyapeyzaj/oya/src/styles\"]}!./src/routes/Contact/components/Contact.css", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"D:/projects/oyapeyzaj/oya/src/styles\"]}!./src/routes/Contact/components/Contact.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Contact/components/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form__ = __webpack_require__("./src/routes/Contact/components/Form.js");




// Dependencies

// Externals


var Connect = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Connect, _Component);

  function Connect() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Connect);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Connect, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Form__["a" /* default */], null);
    }
  }]);

  return Connect;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Connect);

/***/ }),

/***/ "./src/routes/Contact/components/Field.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contact_css__ = __webpack_require__("./src/routes/Contact/components/Contact.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Contact_css__);
// Dependencies




// Stateless component / Functional component
var Field = function Field(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { className: 'labelLeft' },
      props.label
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'text',
      onChange: props.onChange,
      type: props.textarea ? 'textarea' : 'text',
      value: props.value
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
  );
};

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  //textarea: PropTypes.bool.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

// Field.defaultProps = {
//   textarea: false,
// };

/* harmony default export */ __webpack_exports__["a"] = (Field);

/***/ }),

/***/ "./src/routes/Contact/components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Field__ = __webpack_require__("./src/routes/Contact/components/Field.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__("./src/routes/Contact/components/Button.js");





// Dependencies

// Externals



var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Form);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      email: '',
      message: ''
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    _this.updateField = _this.updateField.bind(_this);
    return _this;
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'updateField',
    value: function updateField(field, value) {
      this.setState(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, field, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Field__["a" /* default */], {
          label: 'email / tel:',
          onChange: function onChange(event) {
            return _this2.updateField('subject', event.target.value);
          },
          value: this.state.subject, ref: 'subject'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('textarea', { rows: '4', cols: '50', className: 'leftPadding',
          label: 'Not',
          onChange: function onChange(event) {
            return _this2.updateField('message', event.target.value);
          }
          /* This should be written like 'textarea' */
          , value: this.state.message, ref: 'message'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */], {
          email: 'dewelloper@gmail.com',
          formValues: this.state
        })
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./src/routes/Contact/containers/ContactContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Contact__ = __webpack_require__("./src/routes/Contact/components/Contact.js");



var mapDispatchToProps = {};

var mapStateToProps = function mapStateToProps(state) {
    return {
        Contact: state.contact
    };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Contact__["a" /* default */]));

/***/ })

});
//# sourceMappingURL=1.js.map