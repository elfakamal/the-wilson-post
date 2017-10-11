(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("main", [], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
return webpackJsonp_name_([0],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ROOT = 'http://localhost:9001';
exports.INITIAL_STATE = {
    posts: [],
};


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTS_REQUEST = 'POSTS_REQUEST';
exports.POSTS_SUCCESS = 'POSTS_SUCCESS';
exports.POSTS_FAILURE = 'POSTS_FAILURE';
exports.loadPosts = function () { return ({ type: exports.POSTS_REQUEST }); };
exports.setPosts = function (posts) {
    return { type: exports.POSTS_SUCCESS, posts: posts };
};
/**
 * Schedule Post
 */
exports.SCHEDULE_POST_REQUEST = 'SCHEDULE_POST_REQUEST';
exports.SCHEDULE_POST_SUCCESS = 'SCHEDULE_POST_SUCCESS';
exports.SCHEDULE_POST_FAILURE = 'SCHEDULE_POST_FAILURE';
exports.requestSchedulePost = function (post) {
    return { type: exports.SCHEDULE_POST_REQUEST, post: post };
};
exports.setScheduledPost = function (post) {
    return { type: exports.SCHEDULE_POST_SUCCESS, post: post };
};
exports.errorSchedulePost = function (error) {
    return { type: exports.SCHEDULE_POST_FAILURE, error: error };
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var _a = this.props.post, post = _a === void 0 ? {} : _a;
        return (React.createElement("section", { className: "wilson-post" },
            React.createElement("header", null,
                React.createElement("h3", null, post.title)),
            React.createElement("p", null, post.description),
            React.createElement("div", { className: "wilson-post-buttons" },
                React.createElement("button", null, "Edit"))));
    };
    default_1.displayName = 'Post';
    return default_1;
}(React.Component));
exports.default = default_1;


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var react_dom_1 = __webpack_require__(227);
var react_redux_1 = __webpack_require__(90);
var react_router_config_1 = __webpack_require__(159);
var react_router_dom_1 = __webpack_require__(97);
var constants_1 = __webpack_require__(107);
var routes_1 = __webpack_require__(373);
var dev_1 = __webpack_require__(379);
var win = window;
var state = win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : constants_1.INITIAL_STATE;
var store = dev_1.default(state);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_dom_1.BrowserRouter, null, react_router_config_1.renderRoutes(routes_1.default))), document.getElementById('root'));


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __webpack_require__(374);
var Home_1 = __webpack_require__(375);
var Scheduler_1 = __webpack_require__(376);
var NotFound_1 = __webpack_require__(377);
exports.default = [
    {
        component: App_1.default,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home_1.default,
            },
            {
                path: '/schedule-post',
                exact: true,
                component: Scheduler_1.default,
            },
            {
                path: '*',
                component: NotFound_1.default,
            },
        ],
    },
];


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var react_router_config_1 = __webpack_require__(159);
var react_router_dom_1 = __webpack_require__(97);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var route = this.props.route;
        return (React.createElement("div", { className: "wilson-post-app" },
            React.createElement("nav", null,
                React.createElement("h1", null, "The Wilson Post"),
                React.createElement("div", { className: "wilson-post-app-navigation" },
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
                    ' ',
                    React.createElement(react_router_dom_1.Link, { to: "/schedule-post" }, "Schedule a post"))),
            route && react_router_config_1.renderRoutes(route.routes)));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var react_redux_1 = __webpack_require__(90);
var Post_1 = __webpack_require__(170);
var mapStateToProps = function (state) { return ({
    posts: state.posts,
}); };
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.renderPost = _this.renderPost.bind(_this);
        return _this;
    }
    Home.prototype.renderPost = function (post) {
        return (React.createElement(Post_1.default, { post: post, key: post.id }));
    };
    Home.prototype.render = function () {
        var _a = this.props.posts, posts = _a === void 0 ? [] : _a;
        return (React.createElement("div", { className: "wilson-post-home" },
            React.createElement("div", { className: "wilson-post-list" }, posts.map(this.renderPost))));
    };
    return Home;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps, {})(Home);


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var react_redux_1 = __webpack_require__(90);
var actions_1 = __webpack_require__(108);
var Post_1 = __webpack_require__(170);
var mapStateToProps = function (state) { return ({
    posts: state.posts,
}); };
var mapDispatchToProps = {
    requestSchedulePost: actions_1.requestSchedulePost,
};
var Scheduler = /** @class */ (function (_super) {
    __extends(Scheduler, _super);
    function Scheduler(props) {
        var _this = _super.call(this, props) || this;
        _this.renderPost = _this.renderPost.bind(_this);
        return _this;
    }
    Scheduler.prototype.renderPost = function (post) {
        return (React.createElement(Post_1.default, { post: post, key: post.id }));
    };
    Scheduler.prototype.render = function () {
        return (React.createElement("div", { className: "wilson-post-home" },
            React.createElement("h2", null, "Welcome to the scheduler")));
    };
    return Scheduler;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Scheduler);


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var Status_1 = __webpack_require__(378);
exports.default = function () { return (React.createElement(Status_1.default, { status: 404 },
    React.createElement("div", null, "Not found"))); };


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(8);
var react_router_dom_1 = __webpack_require__(97);
exports.default = function (_a) {
    var status = _a.status, children = _a.children;
    return (React.createElement(react_router_dom_1.Route, { render: function (_a) {
            var staticContext = _a.staticContext;
            if (staticContext) {
                staticContext.status = status;
            }
            return children;
        } }));
};


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(152);
var redux_logger_1 = __webpack_require__(380);
var redux_observable_1 = __webpack_require__(171);
var epics_1 = __webpack_require__(387);
var reducers_1 = __webpack_require__(667);
var enhancer;
var epicMiddleware = redux_observable_1.createEpicMiddleware(epics_1.default);
var hasDevtools = Boolean(typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
if (hasDevtools) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(redux_1.compose(redux_1.applyMiddleware(epicMiddleware, redux_logger_1.createLogger())));
}
else {
    enhancer = redux_1.compose(redux_1.applyMiddleware(epicMiddleware, redux_logger_1.createLogger()));
}
exports.default = function (initialState) { return (redux_1.createStore(reducers_1.default, initialState, enhancer)); };


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = __webpack_require__(171);
var Rx = __webpack_require__(388);
var actions_1 = __webpack_require__(108);
var posts_1 = __webpack_require__(662);
var getPostsEpic = function (action$) {
    return action$.ofType(actions_1.POSTS_REQUEST)
        .mergeMap(function () { return (Rx.Observable.fromPromise(posts_1.getPosts())
        .map(function (posts) { return actions_1.setPosts(posts); })); });
};
var addPostEpic = function (action$) {
    return action$.ofType(actions_1.SCHEDULE_POST_REQUEST)
        .mergeMap(function (action) { return (Rx.Observable.fromPromise(posts_1.addPost(action.post))
        .map(function (post) { return actions_1.setScheduledPost(post); })
        .catch(function (error) { return (Rx.Observable.of(actions_1.errorSchedulePost(error))); })); });
};
exports.default = redux_observable_1.combineEpics(getPostsEpic, addPostEpic);


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var urlJoin = __webpack_require__(663);
var constants_1 = __webpack_require__(107);
var Request_1 = __webpack_require__(664);
exports.getPosts = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Request_1.default.get(urlJoin(constants_1.API_ROOT, 'api', 'posts'))];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    });
}); };
exports.addPost = function (post) { return __awaiter(_this, void 0, void 0, function () {
    var payload, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = { post: post };
                url = urlJoin(constants_1.API_ROOT, 'posts');
                return [4 /*yield*/, Request_1.default.post(url, payload)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(665);
var methods = ['get', 'post', 'put', 'patch', 'delete'];
exports.default = methods.reduce(function (Request, method) {
    return (__assign({}, Request, (_a = {}, _a[method] = function (endpoint, requestBody) { return __awaiter(_this, void 0, void 0, function () {
        var response, results, contentType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(endpoint, __assign({ method: method }, (!requestBody ? {} : {
                        body: JSON.stringify(requestBody),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    results = _a.sent();
                    if (response.headers) {
                        contentType = response.headers.get('content-type');
                        if (contentType && contentType.match(/application\/json/)) {
                            results = JSON.parse(results);
                        }
                    }
                    if (!response.ok) {
                        throw new Error(results);
                    }
                    return [2 /*return*/, results];
            }
        });
    }); }, _a)));
    var _a;
}, {});


/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(108);
var constants_1 = __webpack_require__(107);
var handleActions = function (cases) { return (function (state, action) {
    if (state === void 0) { state = constants_1.INITIAL_STATE; }
    return ((!action || !cases[action.type]) ? state : cases[action.type](state, action));
}); };
exports.default = handleActions((_a = {},
    _a[actions_1.POSTS_SUCCESS] = function (state, _a) {
        var posts = _a.posts;
        return (__assign({}, state, { posts: posts }));
    },
    _a[actions_1.SCHEDULE_POST_SUCCESS] = function (state, _a) {
        var post = _a.post;
        return (__assign({}, state, { posts: (state.posts || []).concat([
                post,
            ]) }));
    },
    _a));
var _a;


/***/ })

},[212]);
});
//# sourceMappingURL=main.js.map