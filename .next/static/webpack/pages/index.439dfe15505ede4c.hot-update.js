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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    }\n];\nfunction HomePage() {\n    _s();\n    const [loadedMeetups, setLoadedMeetups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // useEffect executes the callback function AFTER the component function was executed\n    // nextJS returns the result of the first component render cycle (which is an empty page), rather than the fully rendered page\n    // pre-render data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // send a http request and fetch data\n        setLoadedMeetups(DUMMY_MEETUPS);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: loadedMeetups\n    }, void 0, false, {\n        fileName: \"/Users/saman/Desktop/github-projects/nextjs-meetup/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFFYztBQUUxRCxNQUFNRyxnQkFBZ0I7SUFDcEI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtDQUNEO0FBRUQsU0FBU0MsV0FBVzs7SUFDbEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUVyRCxxRkFBcUY7SUFDckYsOEhBQThIO0lBQzlILGtCQUFrQjtJQUNsQkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHFDQUFxQztRQUNyQ1csaUJBQWlCUjtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ0Qsc0VBQVVBO1FBQUNVLFNBQVNGOzs7Ozs7QUFDOUI7R0FaU0Q7S0FBQUE7O0FBb0JULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6ICdtMScsXG4gICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXG4gICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcbiAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHknLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIEFGVEVSIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gd2FzIGV4ZWN1dGVkXG4gIC8vIG5leHRKUyByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGNvbXBvbmVudCByZW5kZXIgY3ljbGUgKHdoaWNoIGlzIGFuIGVtcHR5IHBhZ2UpLCByYXRoZXIgdGhhbiB0aGUgZnVsbHkgcmVuZGVyZWQgcGFnZVxuICAvLyBwcmUtcmVuZGVyIGRhdGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZW5kIGEgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaCBkYXRhXG4gICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPjtcbn1cblxuLy8gQ29kZSB3aWxsIG5ldmVyIGVuZCB1cCBvbiB0aGUgY2xpZW50IHNpZGVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});