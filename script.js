import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const Text = ({ value }) => /*#__PURE__*/
React.createElement("div", { className: "text" },
value.split('').map((char) => /*#__PURE__*/
React.createElement("div", { className: "letter" }, /*#__PURE__*/
React.createElement("span", { className: "source" }, char), /*#__PURE__*/
React.createElement("span", { className: "shadow" }, char), /*#__PURE__*/
React.createElement("span", { className: "overlay" }, char))));





const App = () => /*#__PURE__*/
React.createElement("div", { className: "app" }, /*#__PURE__*/
React.createElement(Text, { value: "PAPER" }), /*#__PURE__*/
React.createElement(Text, { value: "CUTOUT" }));



ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);