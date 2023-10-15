"use strict";var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Captcha=function(){function t(e){var n=e.element;_classCallCheck(this,t),this.element=n,this.form,this.parent_cont,this.isValid=!1,this.initCaptcha()}return _createClass(t,[{key:"initCaptcha",value:function(){this.initForm(),this.stylizeElement(),this.element.innerHTML=""}},{key:"initForm",value:function(){if(!this.element.closest("form"))throw new Error("The parent of the captcha element must be a form element.");this.form=this.element.closest("form"),this.parent_cont=this.element.parentElement,this.form.addEventListener("submit",this.handleSubmittingForm.bind(this))}},{key:"stylizeElement",value:function(){this.element.style.border="1px solid #cccccc",this.element.style.width="auto"}},{key:"handleSubmittingForm",value:function(t){return t.preventDefault(),this.checkValidity(),!0===this.isValid||(t.stopImmediatePropagation(),!1)}},{key:"checkValidity",value:function(){!0===this.isValid?this.enteredValidValue():!1===this.isValid&&this.enteredInvalidValue()}},{key:"enteredValidValue",value:function(){this.element.style.border="1px solid #00ff00",this.element.classList.contains("captcha_invalid")&&this.element.classList.remove("captcha_invalid"),this.element.classList.contains("captcha_valid")||this.element.classList.add("captcha_valid")}},{key:"enteredInvalidValue",value:function(){this.element.style.border="1px solid #ff0000",this.element.classList.contains("captcha_valid")&&this.element.classList.remove("captcha_valid"),this.element.classList.contains("captcha_invalid")||this.element.classList.add("captcha_invalid")}},{key:"resetClassNames",value:function(){this.element.classList.contains("captcha_valid")&&this.element.classList.remove("captcha_valid"),this.element.classList.contains("captcha_invalid")&&this.element.classList.remove("captcha_invalid")}},{key:"resetStyling",value:function(){this.element.style.border="1px solid #000000"}}]),t}(),_get=(_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),function t(e,n,i){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(void 0===a){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,n,i)}if("value"in a)return a.value;var l=a.get;return void 0!==l?l.call(i):void 0});function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var BaseCaptcha=function(t){function e(t){var n=t.element;_classCallCheck(this,e);var i=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{element:n}));return i.canvas,i.context,i.code,i.input,i.hiddeninput,i.enteredValue,i.initBaseCaptcha(),i}return _inherits(e,Captcha),_createClass(e,[{key:"initBaseCaptcha",value:function(){this.generateCode(),this.generateCanvas(),this.writeCode(),this.appendCanvas(),this.generateInputElement(),this.appendInputElement(),this.addResetButton(),this.resetButton.addEventListener("click",this.handleClickResetButton.bind(this))}},{key:"generateCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.style.width="100px",this.canvas.style.height="50px",this.canvas.style.background="#fff"}},{key:"appendCanvas",value:function(){this.element.appendChild(this.canvas)}},{key:"getContext",value:function(){this.context=this.canvas.getContext("2d")}},{key:"generateInputElement",value:function(){var t=document.createElement("input");t.setAttribute("type","number"),t.setAttribute("placeholder","Enter the code to verify"),t.setAttribute("class","captcha-base__input"),t.setAttribute("required",!0),t.setAttribute("name","_captcha_input"),t.style.display="block",t.style.color="black",this.input=t;var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","_captcha_code"),e.style.display="block",this.hiddeninput=e,this.hiddeninput.value=this.code}},{key:"appendInputElement",value:function(){null!==this.element.nextSibling?(this.parent_cont.insertBefore(this.input,this.element.nextSibling),this.parent_cont.insertBefore(this.hiddeninput,this.element.nextSibling)):(this.form.appendChild(this.input),this.form.appendChild(this.hiddeninput))}},{key:"addResetButton",value:function(){var t=document.createElement("button");t.innerHTML="&#8635;",t.setAttribute("class","captcha-base__reset"),t.setAttribute("type","reset"),this.parent_cont.insertBefore(t,this.input),this.resetButton=t}},{key:"handleClickResetButton",value:function(t){t.preventDefault(),this.clearCanvas(),this.generateCode(),this.writeCode(),this.input.value="",this.hiddeninput.value=this.code,this.resetStyling(),this.resetClassNames()}},{key:"generateCode",value:function(){this.code=this.generateRandomNum(1e5,999999)}},{key:"writeCode",value:function(){this.getContext(),this.context.font="80px Arial";for(var t=this.code.toString(),e=0;e<6;e++)this.context.fillStyle=this.getRandomColor(),this.transformContext(e),this.context.fillText(t[e],52*e,110),this.resetTransformation()}},{key:"clearCanvas",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"checkValidity",value:function(){var t=parseInt(this.input.value);this.enteredValue=t,this.enteredValue===this.code?this.isValid=!0:this.isValid=!1,_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"checkValidity",this).call(this)}},{key:"enteredValidValue",value:function(){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"enteredValidValue",this).call(this),this.input.classList.contains("captcha-base__input_invalid")&&this.input.classList.remove("captcha-base__input_invalid"),this.input.classList.contains("captcha-base__input_valid")||this.input.classList.add("captcha-base__input_valid")}},{key:"enteredInvalidValue",value:function(){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"enteredInvalidValue",this).call(this),this.input.classList.contains("captcha-base__input_valid")&&this.input.classList.remove("captcha-base__input_valid"),this.input.classList.contains("captcha-base__input_invalid")||this.input.classList.add("captcha-base__input_invalid")}},{key:"resetClassNames",value:function(){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resetClassNames",this).call(this),this.input.classList.contains("captcha-base__input_valid")&&this.input.classList.remove("captcha-base__input_valid"),this.input.classList.contains("captcha-base__input_invalid")&&this.input.classList.remove("captcha-base__input_invalid")}},{key:"generateRandomNum",value:function(t,e){var n=t-.5+Math.random()*(e-t+1);return Math.round(n)}},{key:"getRandomColor",value:function(){for(var t=null,e=void 0,n=0;n<3;n++)e=this.generateRandomNum(50,230),t?t="#"+parseInt(e,16):t+=parseInt(e,16);return t}},{key:"getRadiansFromDegrees",value:function(t){return Math.PI/180*t}},{key:"transformContext",value:function(t){var e=this.generateRandomNum(0,13);t%2==0&&(e=-e);var n=this.getRadiansFromDegrees(e);this.context.rotate(n)}},{key:"resetTransformation",value:function(){this.context.setTransform(1,0,0,1,0,0)}}]),e}();_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}new(function(){function t(){_classCallCheck(this,t),this.baseElements=document.getElementsByClassName("captcha-base"),this.init()}return _createClass(t,[{key:"init",value:function(){Array.prototype.forEach.call(this.baseElements,this.handleBaseElements.bind(this))}},{key:"handleBaseElements",value:function(t){new BaseCaptcha({element:t})}}]),t}());