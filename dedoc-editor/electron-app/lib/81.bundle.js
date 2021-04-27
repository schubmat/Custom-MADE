(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "../node_modules/@theia/git/lib/browser/prompt/git-prompt-module.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/git/lib/browser/prompt/git-prompt-module.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "../node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var git_prompt_1 = __webpack_require__(/*! ../../common/git-prompt */ "../node_modules/@theia/git/lib/common/git-prompt.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(git_prompt_1.GitPrompt).toSelf();
    bindPromptServer(bind);
});
function bindPromptServer(bind) {
    bind(git_prompt_1.GitPromptServer).to(git_prompt_1.GitPromptServerImpl).inSingletonScope();
    bind(git_prompt_1.GitPromptServerProxy).toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, git_prompt_1.GitPrompt.WS_PATH); }).inSingletonScope();
}
exports.bindPromptServer = bindPromptServer;


/***/ }),

/***/ "../node_modules/@theia/git/lib/common/git-prompt.js":
/*!***********************************************************!*\
  !*** ../node_modules/@theia/git/lib/common/git-prompt.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
exports.GitPromptServer = Symbol('GitPromptServer');
exports.GitPromptServerProxy = Symbol('GitPromptServerProxy');
var GitPrompt = /** @class */ (function () {
    function GitPrompt() {
        this.toDispose = new disposable_1.DisposableCollection();
    }
    GitPrompt_1 = GitPrompt;
    GitPrompt.prototype.init = function () {
        this.server.setClient(this);
    };
    GitPrompt.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    GitPrompt.prototype.ask = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, GitPrompt_1.Failure.create('Interactive Git prompt is not supported in the browser.')];
            });
        });
    };
    var GitPrompt_1;
    __decorate([
        inversify_1.inject(exports.GitPromptServer),
        __metadata("design:type", Object)
    ], GitPrompt.prototype, "server", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitPrompt.prototype, "init", null);
    GitPrompt = GitPrompt_1 = __decorate([
        inversify_1.injectable()
    ], GitPrompt);
    return GitPrompt;
}());
exports.GitPrompt = GitPrompt;
(function (GitPrompt) {
    /**
     * Unique WS endpoint path for the Git prompt service.
     */
    GitPrompt.WS_PATH = 'services/git-prompt';
    var Success;
    (function (Success) {
        function is(answer) {
            return answer.type === Answer.Type.SUCCESS
                && 'result' in answer
                && ((typeof answer.result) === 'string' || (typeof answer.result) === 'boolean');
        }
        Success.is = is;
        function create(result) {
            return {
                type: Answer.Type.SUCCESS,
                result: result
            };
        }
        Success.create = create;
    })(Success = GitPrompt.Success || (GitPrompt.Success = {}));
    var Cancel;
    (function (Cancel) {
        function is(answer) {
            return answer.type === Answer.Type.CANCEL;
        }
        Cancel.is = is;
        function create() {
            return {
                type: Answer.Type.CANCEL
            };
        }
        Cancel.create = create;
    })(Cancel = GitPrompt.Cancel || (GitPrompt.Cancel = {}));
    var Failure;
    (function (Failure) {
        function is(answer) {
            return answer.type === Answer.Type.FAILURE
                && 'error' in answer
                && ((typeof answer.error) === 'string' || answer.error instanceof Error);
        }
        Failure.is = is;
        function create(error) {
            return {
                type: Answer.Type.FAILURE,
                error: error
            };
        }
        Failure.create = create;
    })(Failure = GitPrompt.Failure || (GitPrompt.Failure = {}));
    var Answer;
    (function (Answer) {
        var Type;
        (function (Type) {
            Type[Type["SUCCESS"] = 0] = "SUCCESS";
            Type[Type["CANCEL"] = 1] = "CANCEL";
            Type[Type["FAILURE"] = 2] = "FAILURE";
        })(Type = Answer.Type || (Answer.Type = {}));
    })(Answer = GitPrompt.Answer || (GitPrompt.Answer = {}));
})(GitPrompt = exports.GitPrompt || (exports.GitPrompt = {}));
exports.GitPrompt = GitPrompt;
exports.GitPromptClient = Symbol('GitPromptClient');
/**
 * Note: This implementation is not reconnecting.
 * Git prompting is not supported in the browser. In electron, there's no need to reconnect.
 */
var GitPromptServerImpl = /** @class */ (function () {
    function GitPromptServerImpl() {
    }
    GitPromptServerImpl.prototype.setClient = function (client) {
        this.proxy.setClient(client);
    };
    GitPromptServerImpl.prototype.dispose = function () {
        this.proxy.dispose();
    };
    __decorate([
        inversify_1.inject(exports.GitPromptServerProxy),
        __metadata("design:type", Object)
    ], GitPromptServerImpl.prototype, "proxy", void 0);
    GitPromptServerImpl = __decorate([
        inversify_1.injectable()
    ], GitPromptServerImpl);
    return GitPromptServerImpl;
}());
exports.GitPromptServerImpl = GitPromptServerImpl;


/***/ }),

/***/ "../node_modules/@theia/git/lib/electron-browser/prompt/electron-git-prompt-module.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@theia/git/lib/electron-browser/prompt/electron-git-prompt-module.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var git_prompt_1 = __webpack_require__(/*! ../../common/git-prompt */ "../node_modules/@theia/git/lib/common/git-prompt.js");
var git_prompt_module_1 = __webpack_require__(/*! ../../browser/prompt/git-prompt-module */ "../node_modules/@theia/git/lib/browser/prompt/git-prompt-module.js");
var git_quick_open_prompt_1 = __webpack_require__(/*! ./git-quick-open-prompt */ "../node_modules/@theia/git/lib/electron-browser/prompt/git-quick-open-prompt.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(git_quick_open_prompt_1.GitQuickOpenPrompt).toSelf().inSingletonScope();
    bind(git_prompt_1.GitPrompt).toService(git_quick_open_prompt_1.GitQuickOpenPrompt);
    git_prompt_module_1.bindPromptServer(bind);
});


/***/ }),

/***/ "../node_modules/@theia/git/lib/electron-browser/prompt/git-quick-open-prompt.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/git/lib/electron-browser/prompt/git-quick-open-prompt.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var PQueue = __webpack_require__(/*! p-queue */ "../node_modules/p-queue/index.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var git_prompt_1 = __webpack_require__(/*! ../../common/git-prompt */ "../node_modules/@theia/git/lib/common/git-prompt.js");
var GitQuickOpenPrompt = /** @class */ (function (_super) {
    __extends(GitQuickOpenPrompt, _super);
    function GitQuickOpenPrompt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queue = new PQueue({ autoStart: true, concurrency: 1 });
        return _this;
    }
    GitQuickOpenPrompt.prototype.ask = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.queue.add(function () {
                        var details = question.details, text = question.text, password = question.password;
                        return new Promise(function (resolve) {
                            var model = {
                                onType: function (lookFor, acceptor) {
                                    acceptor([
                                        new quick_open_model_1.QuickOpenItem({
                                            label: details,
                                            run: function (mode) {
                                                if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                                    return false;
                                                }
                                                resolve(git_prompt_1.GitPrompt.Success.create(lookFor));
                                                return true;
                                            }
                                        })
                                    ]);
                                }
                            };
                            var options = {
                                onClose: function (canceled) {
                                    if (canceled) {
                                        resolve(git_prompt_1.GitPrompt.Cancel.create());
                                    }
                                },
                                placeholder: text,
                                password: password
                            };
                            _this.quickOpenService.open(model, options);
                        });
                    })];
            });
        });
    };
    GitQuickOpenPrompt.prototype.dispose = function () {
        if (!this.queue.isPaused) {
            this.queue.pause();
        }
        this.queue.clear();
    };
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], GitQuickOpenPrompt.prototype, "quickOpenService", void 0);
    GitQuickOpenPrompt = __decorate([
        inversify_1.injectable()
    ], GitQuickOpenPrompt);
    return GitQuickOpenPrompt;
}(git_prompt_1.GitPrompt));
exports.GitQuickOpenPrompt = GitQuickOpenPrompt;


/***/ }),

/***/ "../node_modules/p-queue/index.js":
/*!****************************************!*\
  !*** ../node_modules/p-queue/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comp) {
	let first = 0;
	let count = array.length;

	while (count > 0) {
		const step = (count / 2) | 0;
		let it = first + step;

		if (comp(array[it], value) <= 0) {
			first = ++it;
			count -= step + 1;
		} else {
			count = step;
		}
	}

	return first;
}

class PriorityQueue {
	constructor() {
		this._queue = [];
	}

	enqueue(run, opts) {
		opts = Object.assign({
			priority: 0
		}, opts);

		const element = {priority: opts.priority, run};

		if (this.size && this._queue[this.size - 1].priority >= opts.priority) {
			this._queue.push(element);
			return;
		}

		const index = lowerBound(this._queue, element, (a, b) => b.priority - a.priority);
		this._queue.splice(index, 0, element);
	}

	dequeue() {
		return this._queue.shift().run;
	}

	get size() {
		return this._queue.length;
	}
}

class PQueue {
	constructor(opts) {
		opts = Object.assign({
			concurrency: Infinity,
			autoStart: true,
			queueClass: PriorityQueue
		}, opts);

		if (!(typeof opts.concurrency === 'number' && opts.concurrency >= 1)) {
			throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${opts.concurrency}\` (${typeof opts.concurrency})`);
		}

		this.queue = new opts.queueClass(); // eslint-disable-line new-cap
		this._queueClass = opts.queueClass;
		this._pendingCount = 0;
		this._concurrency = opts.concurrency;
		this._isPaused = opts.autoStart === false;
		this._resolveEmpty = () => {};
		this._resolveIdle = () => {};
	}

	_next() {
		this._pendingCount--;

		if (this.queue.size > 0) {
			if (!this._isPaused) {
				this.queue.dequeue()();
			}
		} else {
			this._resolveEmpty();
			this._resolveEmpty = () => {};

			if (this._pendingCount === 0) {
				this._resolveIdle();
				this._resolveIdle = () => {};
			}
		}
	}

	add(fn, opts) {
		return new Promise((resolve, reject) => {
			const run = () => {
				this._pendingCount++;

				try {
					Promise.resolve(fn()).then(
						val => {
							resolve(val);
							this._next();
						},
						err => {
							reject(err);
							this._next();
						}
					);
				} catch (err) {
					reject(err);
					this._next();
				}
			};

			if (!this._isPaused && this._pendingCount < this._concurrency) {
				run();
			} else {
				this.queue.enqueue(run, opts);
			}
		});
	}

	addAll(fns, opts) {
		return Promise.all(fns.map(fn => this.add(fn, opts)));
	}

	start() {
		if (!this._isPaused) {
			return;
		}

		this._isPaused = false;
		while (this.queue.size > 0 && this._pendingCount < this._concurrency) {
			this.queue.dequeue()();
		}
	}

	pause() {
		this._isPaused = true;
	}

	clear() {
		this.queue = new this._queueClass(); // eslint-disable-line new-cap
	}

	onEmpty() {
		// Instantly resolve if the queue is empty
		if (this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveEmpty;
			this._resolveEmpty = () => {
				existingResolve();
				resolve();
			};
		});
	}

	onIdle() {
		// Instantly resolve if none pending
		if (this._pendingCount === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveIdle;
			this._resolveIdle = () => {
				existingResolve();
				resolve();
			};
		});
	}

	get size() {
		return this.queue.size;
	}

	get pending() {
		return this._pendingCount;
	}

	get isPaused() {
		return this._isPaused;
	}
}

module.exports = PQueue;


/***/ })

}]);
//# sourceMappingURL=81.bundle.js.map