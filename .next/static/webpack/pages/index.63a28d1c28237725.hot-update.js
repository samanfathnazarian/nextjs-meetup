"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n// nextJs will only include this in the server-side as it is being used there only\n\n// import { useEffect, useState } from 'react';\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    }\n];\nfunction HomePage(props) {\n    /*\n  const [loadedMeetups, setLoadedMeetups] = useState([]);\n\n  // useEffect executes the callback function AFTER the component function was executed\n  // nextJS returns the result of the first component render cycle (which is an empty page), rather than the fully rendered page\n  // pre-render data\n  useEffect(() => {\n    // send a http request and fetch data\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/saman/Desktop/github-projects/nextjs-meetup/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsK0NBQStDO0FBRVc7QUFFMUQsTUFBTUMsZ0JBQWdCO0lBQ3BCO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7Q0FDRDtBQUVELFNBQVNDLFNBQVNDLEtBQUssRUFBRTtJQUN2Qjs7Ozs7Ozs7OztFQVVBLEdBRUEscUJBQU8sOERBQUNSLHNFQUFVQTtRQUFDUyxTQUFTRCxNQUFNQyxPQUFPOzs7Ozs7QUFDM0M7S0FkU0Y7O0FBOERULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dEpzIHdpbGwgb25seSBpbmNsdWRlIHRoaXMgaW4gdGhlIHNlcnZlci1zaWRlIGFzIGl0IGlzIGJlaW5nIHVzZWQgdGhlcmUgb25seVxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAge1xuICAgIGlkOiAnbTEnLFxuICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcbiAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwIScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ20yJyxcbiAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXG4gICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJyxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIC8qXG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIEFGVEVSIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gd2FzIGV4ZWN1dGVkXG4gIC8vIG5leHRKUyByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGNvbXBvbmVudCByZW5kZXIgY3ljbGUgKHdoaWNoIGlzIGFuIGVtcHR5IHBhZ2UpLCByYXRoZXIgdGhhbiB0aGUgZnVsbHkgcmVuZGVyZWQgcGFnZVxuICAvLyBwcmUtcmVuZGVyIGRhdGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZW5kIGEgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaCBkYXRhXG4gICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcbiAgfSwgW10pO1xuICAqL1xuXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcbn1cblxuLypcbi8vIFJ1bnMgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3QgKGNyZWF0ZXMgcHJlLWdlbmVyYXRlIG9mIHRoZSBwYWdlIGR5bmFtaWNhbGx5KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxOyAvL2FjY2VzcyB0byB0aGUgcmVxdWVzdCBhbmQgcmVzcG9uc2Ugb2JqcyBzaW1pbGFyIHRvIG5vZGVKUyBhbmQgRXhwcmVzc1xuICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuICAvLyBGZXRjaCBkYXRhIGZyb20gYW4gQVBJXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcbiAgICB9LFxuICB9O1xufVxuKi9cblxuLy8gQ2FjaGVkIGFuZCByZXVzZWQgdW5saWtlIGdldFNlcnZlclNpZGVQcm9wcygpXG4vLyBDb2RlIHdpbGwgbmV2ZXIgZW5kIHVwIG9uIHRoZSBjbGllbnQgc2lkZSwgcnVucyBiZWZvcmUgdGhlIEhvbWVQYWdlIGNvbXBvbmVudFxcXG4vL2RhdGEgZmV0Y2hpbmcgaXMgbm93IG9uIHRoZSBzZXJ2ZXItc2lkZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vU2FtOlEwdHFJY2RRTDZ0TXczZFNAY2x1c3RlcjAubG1qaHNwYy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgLy8gbXVzdCByZXR1cm4gYSBwcm9wcyBvYmpcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgICAvL3VzZXMgaW5jcmVtZW50YWwgc3RhdGljIGdlbmVyYXRpb24sIDEwIGlzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBpdCB3YWl0cyBiZWZvcmUgaXQgcmUtZ2VuZXJhdGVzIHRoZSBwYWdlIGZvciBpbmNvbWluZyByZXF1ZXN0cyBhbmQgd291bGQgcmVwbGFjZSB0aGUgb2xkIHByZS1nZW5lcmF0ZWQgcGFnZXMgKGhlbHBmdWwgYXMgeW91IHdvdWxkbid0IG5lZWQgdG8gcmUtZGVwbG95KVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});