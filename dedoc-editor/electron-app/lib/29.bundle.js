(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "../node_modules/@theia/scm/lib/browser/scm-amend-component.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/scm/lib/browser/scm-amend-component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
__webpack_require__(/*! ../../src/browser/style/scm-amend-component.css */ "../node_modules/@theia/scm/src/browser/style/scm-amend-component.css");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var TRANSITION_TIME_MS = 300;
var REPOSITORY_STORAGE_KEY = 'scmRepository';
var ScmAmendComponent = /** @class */ (function (_super) {
    __extends(ScmAmendComponent, _super);
    function ScmAmendComponent(props) {
        var _this = _super.call(this, props) || this;
        /**
         * a hint on how to animate an update, set by certain user action handlers
         * and used when updating the view based on a repository change
         */
        _this.transitionHint = 'none';
        _this.lastCommitHeight = 0;
        _this.lastCommitScrollRef = function (instance) {
            if (instance && _this.lastCommitHeight === 0) {
                _this.lastCommitHeight = instance.getBoundingClientRect().height;
            }
        };
        _this.toDisposeOnUnmount = new core_1.DisposableCollection();
        /**
         * This function will update the 'model' (lastCommit, amendingCommits) only
         * when the repository sees the last commit change.
         * 'render' can be called at any time, so be sure we don't update any 'model'
         * fields until we actually start the transition.
         */
        _this.amend = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        this.transitionHint = 'amend';
                        return [4 /*yield*/, this.resetAndSetMessage('HEAD~', 'HEAD')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.unamend = function () { return __awaiter(_this, void 0, void 0, function () {
            var commitToRestore, oldestAmendCommit, commitToUseForMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        commitToRestore = (this.state.amendingCommits.length >= 1)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 1]
                            : undefined;
                        oldestAmendCommit = (this.state.amendingCommits.length >= 2)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 2]
                            : undefined;
                        if (!commitToRestore) return [3 /*break*/, 2];
                        commitToUseForMessage = oldestAmendCommit
                            ? oldestAmendCommit.commit.id
                            : undefined;
                        this.transitionHint = 'unamend';
                        return [4 /*yield*/, this.resetAndSetMessage(commitToRestore.commit.id, commitToUseForMessage)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.unamendAll = function () { return _this.doUnamendAll(); };
        _this.clearAmending = function () { return _this.doClearAmending(); };
        _this.state = {
            transition: { state: 'none' },
            amendingCommits: [],
            lastCommit: undefined
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmAmendComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastCommit, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.toDisposeOnUnmount.push(core_1.Disposable.create(function () { }));
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        lastCommit = _c.sent();
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, this.buildAmendingList(lastCommit ? lastCommit.commit : undefined)];
                    case 2:
                        _a.apply(this, [(_b.amendingCommits = _c.sent(), _b.lastCommit = lastCommit, _b)]);
                        if (this.toDisposeOnUnmount.disposed) {
                            return [2 /*return*/];
                        }
                        this.toDisposeOnUnmount.push(this.props.repository.provider.onDidChange(function () { return _this.fetchStatusAndSetState(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    ScmAmendComponent.prototype.fetchStatusAndSetState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, nextCommit, amendingCommits, direction, serializedState, serializedState, transitionData_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        nextCommit = _a.sent();
                        if (!(nextCommit && this.state.lastCommit && nextCommit.commit.id === this.state.lastCommit.commit.id)) return [3 /*break*/, 2];
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(nextCommit === undefined && this.state.lastCommit === undefined)) return [3 /*break*/, 3];
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.transitionHint === 'none')) return [3 /*break*/, 5];
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repository,
                        // perhaps the user committed, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        return [4 /*yield*/, this.clearAmendingCommits()];
                    case 4:
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repository,
                        // perhaps the user committed, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        _a.sent();
                        // There is a change to the last commit, but no transition hint so
                        // the view just updates without transition.
                        this.setState({ amendingCommits: [], lastCommit: nextCommit });
                        return [3 /*break*/, 6];
                    case 5:
                        amendingCommits = this.state.amendingCommits.concat([]);
                        direction = this.transitionHint === 'amend' ? 'up' : 'down';
                        switch (this.transitionHint) {
                            case 'amend':
                                if (this.state.lastCommit) {
                                    amendingCommits.push(this.state.lastCommit);
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                            case 'unamend':
                                amendingCommits.pop();
                                if (amendingCommits.length === 0) {
                                    this.props.storageService.setData(storageKey, undefined);
                                }
                                else {
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                        }
                        if (this.state.lastCommit && nextCommit) {
                            transitionData_1 = { direction: direction, previousLastCommit: this.state.lastCommit };
                            this.setState({ lastCommit: nextCommit, amendingCommits: amendingCommits, transition: __assign({}, transitionData_1, { state: 'start' }) });
                            this.onNextFrame(function () {
                                _this.setState({ transition: __assign({}, transitionData_1, { state: 'transitioning' }) });
                            });
                            setTimeout(function () {
                                _this.setState({ transition: { state: 'none' } });
                            }, TRANSITION_TIME_MS);
                        }
                        else {
                            // No previous last commit so no transition
                            this.setState({ transition: { state: 'none' }, amendingCommits: amendingCommits, lastCommit: nextCommit });
                        }
                        _a.label = 6;
                    case 6:
                        this.transitionHint = 'none';
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.clearAmendingCommits = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.setData(storageKey, undefined)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.buildAmendingList = function (lastCommit) {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, storedState, _a, amendingHeadCommitSha, latestCommitSha, commits, amendingCommitPromises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.getData(storageKey, undefined)];
                    case 1:
                        storedState = _b.sent();
                        if (!storedState) return [3 /*break*/, 3];
                        _a = JSON.parse(storedState), amendingHeadCommitSha = _a.amendingHeadCommitSha, latestCommitSha = _a.latestCommitSha;
                        if (!this.commitsAreEqual(lastCommit, latestCommitSha)) {
                            // The head commit in the repository has changed.  It is not the same commit that was the
                            // head commit after the last 'amend'.
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.props.scmAmendSupport.getInitialAmendingCommits(amendingHeadCommitSha, lastCommit ? lastCommit.id : undefined)];
                    case 2:
                        commits = _b.sent();
                        amendingCommitPromises = commits.map(function (commit) { return __awaiter(_this, void 0, void 0, function () {
                            var avatar;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                                    case 1:
                                        avatar = _a.sent();
                                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                                }
                            });
                        }); });
                        return [2 /*return*/, Promise.all(amendingCommitPromises)];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    ScmAmendComponent.prototype.getStorageKey = function () {
        return REPOSITORY_STORAGE_KEY + ':' + this.props.repository.provider.rootUri;
    };
    /**
     * Commits are equal if the ids are equal or if both are undefined.
     * (If a commit is undefined, it represents the initial empty state of a repository,
     * before the initial commit).
     */
    ScmAmendComponent.prototype.commitsAreEqual = function (lastCommit, savedLastCommitId) {
        return lastCommit
            ? lastCommit.id === savedLastCommitId
            : savedLastCommitId === undefined;
    };
    ScmAmendComponent.prototype.resetAndSetMessage = function (commitToRestore, commitToUseForMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var message, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!commitToUseForMessage) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.scmAmendSupport.getMessage(commitToUseForMessage)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _b.label = 3;
                    case 3:
                        message = _a;
                        return [4 /*yield*/, this.props.scmAmendSupport.reset(commitToRestore)];
                    case 4:
                        _b.sent();
                        this.props.setCommitMessage(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.render = function () {
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? __assign({}, this.props.style, { flexShrink: 0 }) : __assign({}, this.props.style, { flexShrink: 1, minHeight: 240 // height with three commits
         });
        return (React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_CONTAINER + ' no-select', style: style, id: this.props.id },
            this.state.amendingCommits.length > 0 || (this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down')
                ? this.renderAmendingCommits()
                : '',
            this.state.lastCommit ?
                React.createElement("div", null,
                    React.createElement("div", { id: 'lastCommit', className: 'changesContainer' },
                        React.createElement("div", { className: 'theia-header scm-theia-header' }, "HEAD Commit"),
                        this.renderLastCommit()))
                : ''));
    };
    ScmAmendComponent.prototype.getLastCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commit, avatar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.scmAmendSupport.getLastCommit()];
                    case 1:
                        commit = _a.sent();
                        if (!commit) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                    case 2:
                        avatar = _a.sent();
                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ScmAmendComponent.prototype.renderAmendingCommits = function () {
        var _this = this;
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? {
                flexShrink: 0,
            }
            : {
                flexShrink: 1,
                // parent minHeight controls height, we just need any value smaller than
                // what the height would be when the parent is at its minHeight
                minHeight: 0
            };
        return React.createElement("div", { id: 'amendedCommits', className: 'theia-scm-amend-outer-container', style: style },
            React.createElement("div", { className: 'theia-header scm-theia-header' },
                React.createElement("div", { className: 'noWrapInfo' }, "Commits being Amended"),
                this.renderAmendCommitListButtons(),
                this.renderCommitCount(this.state.amendingCommits.length)),
            React.createElement("div", { style: this.styleAmendedCommits() },
                this.state.amendingCommits.map(function (commitData, index, array) {
                    return _this.renderCommitBeingAmended(commitData, index === array.length - 1);
                }),
                this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down'
                    ? this.renderCommitBeingAmended(this.state.lastCommit, false)
                    : ''));
    };
    ScmAmendComponent.prototype.renderAmendCommitListButtons = function () {
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' },
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-minus', title: 'Unamend All Commits', onClick: this.unamendAll })),
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-times', title: 'Clear Amending Commits', onClick: this.clearAmending }))));
    };
    ScmAmendComponent.prototype.renderLastCommit = function () {
        if (!this.state.lastCommit) {
            return '';
        }
        var canAmend = true;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AND_BUTTON, style: { flexGrow: 0, flexShrink: 0 }, key: this.state.lastCommit.commit.id },
            this.renderLastCommitNoButton(this.state.lastCommit),
            canAmend
                ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                    React.createElement("button", { className: 'theia-button', title: 'Amend last commit', onClick: this.amend }, "Amend"))
                : '');
    };
    ScmAmendComponent.prototype.renderLastCommitNoButton = function (lastCommit) {
        switch (this.state.transition.state) {
            case 'none':
                return React.createElement("div", { ref: this.lastCommitScrollRef, className: 'theia-scm-scrolling-container' }, this.renderCommitAvatarAndDetail(lastCommit));
            case 'start':
            case 'transitioning':
                switch (this.state.transition.direction) {
                    case 'up':
                        return React.createElement("div", { style: this.styleLastCommitMovingUp(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit),
                            this.renderCommitAvatarAndDetail(lastCommit));
                    case 'down':
                        return React.createElement("div", { style: this.styleLastCommitMovingDown(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(lastCommit),
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit));
                }
        }
    };
    /**
     * See https://stackoverflow.com/questions/26556436/react-after-render-code
     *
     * @param callback
     */
    ScmAmendComponent.prototype.onNextFrame = function (callback) {
        setTimeout(function () { return window.requestAnimationFrame(callback); }, 0);
    };
    ScmAmendComponent.prototype.renderCommitAvatarAndDetail = function (commitData) {
        var commit = commitData.commit, avatar = commitData.avatar;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, key: commit.id },
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_AVATAR },
                React.createElement("img", { src: avatar })),
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_DETAILS },
                React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_SUMMARY }, commit.summary),
                React.createElement("div", { className: ScmAmendComponent.Styles.LAST_COMMIT_MESSAGE_TIME }, commit.authorDateRelative + " by " + commit.authorName)));
    };
    ScmAmendComponent.prototype.renderCommitCount = function (commits) {
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, commits));
    };
    ScmAmendComponent.prototype.renderCommitBeingAmended = function (commitData, isOldestAmendCommit) {
        if (isOldestAmendCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'up') {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                React.createElement("div", { className: 'fixed-height-commit-container' }, this.renderCommitAvatarAndDetail(commitData)));
        }
        else {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                this.renderCommitAvatarAndDetail(commitData),
                isOldestAmendCommit
                    ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                        React.createElement("button", { className: 'theia-button', title: 'Unamend commit', onClick: this.unamend }, "Unamend"))
                    : '');
        }
    };
    /*
     * The style for the <div> containing the list of commits being amended.
     * This div is scrollable.
     */
    ScmAmendComponent.prototype.styleAmendedCommits = function () {
        var base = {
            display: 'flex',
            whitespace: 'nowrap',
            width: '100%',
            minHeight: 0,
            flexShrink: 1,
            paddingTop: '2px',
        };
        switch (this.state.transition.state) {
            case 'none':
                return __assign({}, base, { flexDirection: 'column', overflowY: 'auto', marginBottom: '0' });
            case 'start':
            case 'transitioning':
                var startingMargin = 0;
                var endingMargin = 0;
                switch (this.state.transition.direction) {
                    case 'down':
                        startingMargin = 0;
                        endingMargin = -32;
                        break;
                    case 'up':
                        startingMargin = -32;
                        endingMargin = 0;
                        break;
                }
                switch (this.state.transition.state) {
                    case 'start':
                        return __assign({}, base, { flexDirection: 'column', overflowY: 'hidden', marginBottom: startingMargin + "px" });
                    case 'transitioning':
                        return __assign({}, base, { flexDirection: 'column', overflowY: 'hidden', marginBottom: endingMargin + "px", transitionProperty: 'margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
                }
        }
        throw new Error('Invalid value for transition state: ' + this.state.transition.state);
    };
    ScmAmendComponent.prototype.styleLastCommitMovingUp = function (transitionState) {
        return this.styleLastCommit(transitionState, 0, -28);
    };
    ScmAmendComponent.prototype.styleLastCommitMovingDown = function (transitionState) {
        return this.styleLastCommit(transitionState, -28, 0);
    };
    ScmAmendComponent.prototype.styleLastCommit = function (transitionState, startingMarginTop, startingMarginBottom) {
        var base = {
            display: 'flex',
            width: '100%',
            overflow: 'hidden',
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            height: this.lastCommitHeight * 2
        };
        // We end with top and bottom margins switched
        var endingMarginTop = startingMarginBottom;
        var endingMarginBottom = startingMarginTop;
        switch (transitionState) {
            case 'start':
                return __assign({}, base, { position: 'relative', flexDirection: 'column', marginTop: startingMarginTop, marginBottom: startingMarginBottom });
            case 'transitioning':
                return __assign({}, base, { position: 'relative', flexDirection: 'column', marginTop: endingMarginTop, marginBottom: endingMarginBottom, transitionProperty: 'margin-top margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
        }
    };
    ScmAmendComponent.prototype.doUnamendAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.state.amendingCommits.length > 0)) return [3 /*break*/, 2];
                        this.unamend();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, TRANSITION_TIME_MS); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.doClearAmending = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearAmendingCommits()];
                    case 1:
                        _a.sent();
                        this.setState({ amendingCommits: [] });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ScmAmendComponent;
}(React.Component));
exports.ScmAmendComponent = ScmAmendComponent;
(function (ScmAmendComponent) {
    var Styles;
    (function (Styles) {
        Styles.COMMIT_CONTAINER = 'theia-scm-commit-container';
        Styles.COMMIT_AND_BUTTON = 'theia-scm-commit-and-button';
        Styles.COMMIT_AVATAR_AND_TEXT = 'theia-scm-commit-avatar-and-text';
        Styles.COMMIT_DETAILS = 'theia-scm-commit-details';
        Styles.COMMIT_MESSAGE_AVATAR = 'theia-scm-commit-message-avatar';
        Styles.COMMIT_MESSAGE_SUMMARY = 'theia-scm-commit-message-summary';
        Styles.LAST_COMMIT_MESSAGE_TIME = 'theia-scm-commit-message-time';
        Styles.FLEX_CENTER = 'theia-scm-flex-container-center';
    })(Styles = ScmAmendComponent.Styles || (ScmAmendComponent.Styles = {}));
})(ScmAmendComponent = exports.ScmAmendComponent || (exports.ScmAmendComponent = {}));
exports.ScmAmendComponent = ScmAmendComponent;


/***/ }),

/***/ "../node_modules/@theia/scm/lib/browser/scm-widget.js":
/*!************************************************************!*\
  !*** ../node_modules/@theia/scm/lib/browser/scm-widget.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-null/no-null, @typescript-eslint/no-explicit-any */
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var react_autosize_textarea_1 = __webpack_require__(/*! react-autosize-textarea */ "../node_modules/react-autosize-textarea/lib/index.js");
var domutils_1 = __webpack_require__(/*! @phosphor/domutils */ "../node_modules/@phosphor/domutils/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../node_modules/@theia/core/lib/common/menu.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "../node_modules/@theia/core/lib/browser/widgets/alert-message.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var scm_avatar_service_1 = __webpack_require__(/*! ./scm-avatar-service */ "../node_modules/@theia/scm/lib/browser/scm-avatar-service.js");
var scm_amend_component_1 = __webpack_require__(/*! ./scm-amend-component */ "../node_modules/@theia/scm/lib/browser/scm-amend-component.js");
var scm_context_key_service_1 = __webpack_require__(/*! ./scm-context-key-service */ "../node_modules/@theia/scm/lib/browser/scm-context-key-service.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "../node_modules/@theia/scm/lib/browser/scm-service.js");
var ScmWidget = /** @class */ (function (_super) {
    __extends(ScmWidget, _super);
    function ScmWidget() {
        var _this = _super.call(this) || this;
        /** don't modify DOM use React! only exposed for `focusInput` */
        _this.inputRef = React.createRef();
        _this.toDisposeOnRefresh = new disposable_1.DisposableCollection();
        _this.addScmListKeyListeners = function (id) {
            var container = document.getElementById(id);
            if (container) {
                _this.addScmListNavigationKeyListeners(container);
            }
        };
        _this.setInputValue = function (event) {
            var repository = _this.scmService.selectedRepository;
            if (repository) {
                repository.input.value = typeof event === 'string' ? event : event.currentTarget.value;
            }
        };
        _this.acceptInput = function () { return _this.commands.executeCommand('scm.acceptInput'); };
        _this.node.tabIndex = 0;
        _this.id = ScmWidget_1.ID;
        _this.addClass('theia-scm');
        _this.scrollContainer = ScmWidget_1.Styles.GROUPS_CONTAINER;
        return _this;
    }
    ScmWidget_1 = ScmWidget;
    Object.defineProperty(ScmWidget.prototype, "scrollContainer", {
        get: function () {
            return this._scrollContainer;
        },
        set: function (id) {
            this._scrollContainer = id + Date.now();
        },
        enumerable: true,
        configurable: true
    });
    ScmWidget.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.scmService.onDidChangeSelectedRepository(function () { return _this.refresh(); }));
        this.toDispose.push(this.labelProvider.onDidChange(function (e) {
            var repository = _this.scmService.selectedRepository;
            if (repository && repository.resources.some(function (resource) { return e.affects(resource.sourceUri); })) {
                _this.update();
            }
        }));
    };
    ScmWidget.prototype.refresh = function () {
        var _this = this;
        this.toDisposeOnRefresh.dispose();
        this.toDispose.push(this.toDisposeOnRefresh);
        var repository = this.scmService.selectedRepository;
        this.title.label = repository ? repository.provider.label : 'no repository found';
        this.title.caption = this.title.label;
        this.update();
        if (repository) {
            this.toDisposeOnRefresh.push(repository.onDidChange(function () { return _this.update(); }));
            // render synchronously to avoid cursor jumping
            // see https://stackoverflow.com/questions/28922275/in-reactjs-why-does-setstate-behave-differently-when-called-synchronously/28922465#28922465
            this.toDisposeOnRefresh.push(repository.input.onDidChange(function () { return _this.updateImmediately(); }));
            this.toDisposeOnRefresh.push(repository.input.onDidFocus(function () { return _this.focusInput(); }));
        }
    };
    ScmWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        (this.inputRef.current || this.node).focus();
    };
    ScmWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.update();
    };
    ScmWidget.prototype.updateImmediately = function () {
        this.onUpdateRequest(browser_1.Widget.Msg.UpdateRequest);
    };
    ScmWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        if (!this.isAttached || !this.isVisible) {
            return;
        }
        this.onRender.push(disposable_1.Disposable.create(function () { return function () { return __awaiter(_this, void 0, void 0, function () {
            var selected;
            return __generator(this, function (_a) {
                selected = this.node.getElementsByClassName(browser_1.SELECTED_CLASS)[0];
                if (selected) {
                    domutils_1.ElementExt.scrollIntoViewIfNeeded(this.node, selected);
                }
                return [2 /*return*/];
            });
        }); }; }));
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    ScmWidget.prototype.render = function () {
        var repository = this.scmService.selectedRepository;
        if (!repository) {
            return React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: 'No repository found' });
        }
        var input = repository.input;
        var amendSupport = repository.provider.amendSupport;
        return React.createElement("div", { className: ScmWidget_1.Styles.MAIN_CONTAINER },
            React.createElement("div", { className: 'headerContainer', style: { flexGrow: 0 } }, this.renderInput(input, repository)),
            React.createElement(ScmResourceGroupsContainer, { style: { flexGrow: 1 }, id: this.scrollContainer, repository: repository, commands: this.commands, menus: this.menus, contextKeys: this.contextKeys, labelProvider: this.labelProvider, addScmListKeyListeners: this.addScmListKeyListeners, contextMenuRenderer: this.contextMenuRenderer, corePreferences: this.corePreferences }),
            amendSupport && React.createElement(scm_amend_component_1.ScmAmendComponent, { key: "amend:" + repository.provider.rootUri, style: { flexGrow: 0 }, id: this.scrollContainer, repository: repository, scmAmendSupport: amendSupport, setCommitMessage: this.setInputValue, avatarService: this.avatarService, storageService: this.storageService }));
    };
    ScmWidget.prototype.renderInput = function (input, repository) {
        var validationStatus = input.issue ? input.issue.type : 'idle';
        var validationMessage = input.issue ? input.issue.message : '';
        var format = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (args.length !== 0) {
                return value.replace(/{(\d+)}/g, function (found, n) {
                    var i = parseInt(n);
                    return isNaN(i) || i < 0 || i >= args.length ? found : args[i];
                });
            }
            return value;
        };
        var keybinding = this.keybindings.acceleratorFor(this.keybindings.getKeybindingsForCommand('scm.acceptInput')[0]).join('+');
        var message = format(input.placeholder || '', keybinding);
        return React.createElement("div", { className: ScmWidget_1.Styles.INPUT_MESSAGE_CONTAINER },
            React.createElement(react_autosize_textarea_1.default, { className: ScmWidget_1.Styles.INPUT_MESSAGE + " theia-input theia-scm-input-message-" + validationStatus, id: ScmWidget_1.Styles.INPUT_MESSAGE, placeholder: message, autoFocus: true, tabIndex: 1, value: input.value, onChange: this.setInputValue, ref: this.inputRef, rows: 1, maxRows: 6 }),
            React.createElement("div", { className: ScmWidget_1.Styles.VALIDATION_MESSAGE + " " + ScmWidget_1.Styles.NO_SELECT + "\n                    theia-scm-validation-message-" + validationStatus + " theia-scm-input-message-" + validationStatus, style: {
                    display: !!input.issue ? 'block' : 'none'
                } }, validationMessage));
    };
    ScmWidget.prototype.focusInput = function () {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    };
    ScmWidget.prototype.addScmListNavigationKeyListeners = function (container) {
        var _this = this;
        this.addKeyListener(container, browser_1.Key.ARROW_LEFT, function () { return _this.openPreviousChange(); });
        this.addKeyListener(container, browser_1.Key.ARROW_RIGHT, function () { return _this.openNextChange(); });
        this.addKeyListener(container, browser_1.Key.ARROW_UP, function () { return _this.selectPreviousResource(); });
        this.addKeyListener(container, browser_1.Key.ARROW_DOWN, function () { return _this.selectNextResource(); });
        this.addKeyListener(container, browser_1.Key.ENTER, function () { return _this.openSelected(); });
    };
    ScmWidget.prototype.openPreviousChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selected, widget, diffNavigator, previous, previous;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        selected = repository.selectedResource;
                        if (!selected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openResource(selected)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasPrevious()) {
                                diffNavigator.previous();
                            }
                            else {
                                previous = repository.selectPreviousResource();
                                if (previous) {
                                    previous.open();
                                }
                            }
                        }
                        else {
                            previous = repository.selectPreviousResource();
                            if (previous) {
                                previous.open();
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmWidget.prototype.openNextChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selected, widget, diffNavigator, next, next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        selected = repository.selectedResource;
                        if (!selected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openResource(selected)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasNext()) {
                                diffNavigator.next();
                            }
                            else {
                                next = repository.selectNextResource();
                                if (next) {
                                    next.open();
                                }
                            }
                        }
                        else {
                            next = repository.selectNextResource();
                            if (next) {
                                next.open();
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (repository && repository.resources.length) {
                            repository.selectedResource = repository.resources[0];
                            repository.selectedResource.open();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScmWidget.prototype.openResource = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, standaloneEditor, resourcePath, _a, _b, widget, resourceUri, editorResourcePath;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, resource.open()];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _d.sent();
                        console.error('Failed to open a SCM resource', e_1);
                        return [2 /*return*/, undefined];
                    case 3:
                        resourcePath = resource.sourceUri.path.toString();
                        try {
                            for (_a = __values(this.editorManager.all), _b = _a.next(); !_b.done; _b = _a.next()) {
                                widget = _b.value;
                                resourceUri = widget.getResourceUri();
                                editorResourcePath = resourceUri && resourceUri.path.toString();
                                if (resourcePath === editorResourcePath) {
                                    if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME) {
                                        // prefer diff editor
                                        return [2 /*return*/, widget];
                                    }
                                    else {
                                        standaloneEditor = widget;
                                    }
                                }
                                if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME
                                    && String(widget.getResourceUri()) === resource.sourceUri.toString()) {
                                    return [2 /*return*/, widget];
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        // fallback to standalone editor
                        return [2 /*return*/, standaloneEditor];
                }
            });
        });
    };
    ScmWidget.prototype.selectPreviousResource = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.selectPreviousResource();
    };
    ScmWidget.prototype.selectNextResource = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.selectNextResource();
    };
    ScmWidget.prototype.openSelected = function () {
        var repository = this.scmService.selectedRepository;
        var resource = repository && repository.selectedResource;
        if (resource) {
            resource.open();
        }
    };
    ScmWidget.prototype.storeState = function () {
        var repository = this.scmService.selectedRepository;
        return repository && repository.input;
    };
    ScmWidget.prototype.restoreState = function (oldState) {
        var repository = this.scmService.selectedRepository;
        if (repository) {
            repository.input.fromJSON(oldState);
        }
    };
    var ScmWidget_1;
    ScmWidget.ID = 'scm-view';
    ScmWidget.RESOURCE_GROUP_CONTEXT_MENU = ['RESOURCE_GROUP_CONTEXT_MENU'];
    ScmWidget.RESOURCE_GROUP_INLINE_MENU = ['RESOURCE_GROUP_INLINE_MENU'];
    ScmWidget.RESOURCE_INLINE_MENU = ['RESOURCE_INLINE_MENU'];
    ScmWidget.RESOURCE_CONTEXT_MENU = ['RESOURCE_CONTEXT_MENU'];
    __decorate([
        inversify_1.inject(browser_1.CorePreferences),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmWidget.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], ScmWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], ScmWidget.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], ScmWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(scm_context_key_service_1.ScmContextKeyService),
        __metadata("design:type", scm_context_key_service_1.ScmContextKeyService)
    ], ScmWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(scm_avatar_service_1.ScmAvatarService),
        __metadata("design:type", scm_avatar_service_1.ScmAvatarService)
    ], ScmWidget.prototype, "avatarService", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], ScmWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], ScmWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.DiffNavigatorProvider),
        __metadata("design:type", Function)
    ], ScmWidget.prototype, "diffNavigatorProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScmWidget.prototype, "init", null);
    ScmWidget = ScmWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ScmWidget);
    return ScmWidget;
}(browser_1.ReactWidget));
exports.ScmWidget = ScmWidget;
(function (ScmWidget) {
    var Styles;
    (function (Styles) {
        Styles.MAIN_CONTAINER = 'theia-scm-main-container';
        Styles.PROVIDER_CONTAINER = 'theia-scm-provider-container';
        Styles.PROVIDER_NAME = 'theia-scm-provider-name';
        Styles.GROUPS_CONTAINER = 'groups-outer-container';
        Styles.INPUT_MESSAGE_CONTAINER = 'theia-scm-input-message-container';
        Styles.INPUT_MESSAGE = 'theia-scm-input-message';
        Styles.VALIDATION_MESSAGE = 'theia-scm-input-validation-message';
        Styles.NO_SELECT = 'no-select';
    })(Styles = ScmWidget.Styles || (ScmWidget.Styles = {}));
})(ScmWidget = exports.ScmWidget || (exports.ScmWidget = {}));
exports.ScmWidget = ScmWidget;
var ScmElement = /** @class */ (function (_super) {
    __extends(ScmElement, _super);
    function ScmElement(props) {
        var _this = _super.call(this, props) || this;
        _this.toDisposeOnUnmount = new disposable_1.DisposableCollection();
        _this.detectHover = function (element) {
            if (element) {
                window.requestAnimationFrame(function () {
                    var hover = element.matches(':hover');
                    _this.setState({ hover: hover });
                });
            }
        };
        _this.showHover = function () { return _this.setState({ hover: true }); };
        _this.hideHover = function () { return _this.setState({ hover: false }); };
        _this.renderContextMenu = function (event) {
            event.preventDefault();
            var _a = _this.props, group = _a.group, contextKeys = _a.contextKeys, contextMenuRenderer = _a.contextMenuRenderer;
            var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
            contextKeys.scmResourceGroup.set(group.id);
            try {
                contextMenuRenderer.render({
                    menuPath: _this.contextMenuPath,
                    anchor: event.nativeEvent,
                    args: _this.contextMenuArgs
                });
            }
            finally {
                contextKeys.scmResourceGroup.set(currentScmResourceGroup);
            }
        };
        _this.state = {
            hover: false
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmElement.prototype.componentDidMount = function () {
        this.toDisposeOnUnmount.push(disposable_1.Disposable.create(function () { }));
    };
    ScmElement.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    return ScmElement;
}(React.Component));
exports.ScmElement = ScmElement;
var ScmResourceComponent = /** @class */ (function (_super) {
    __extends(ScmResourceComponent, _super);
    function ScmResourceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () { return _this.props.resource.open(); };
        _this.selectChange = function () { return _this.props.repository.selectedResource = _this.props.resource; };
        _this.contextMenuPath = ScmWidget.RESOURCE_CONTEXT_MENU;
        /**
         * Handle the single clicking of nodes present in the widget.
         */
        _this.handleClick = function () {
            // Determine the behavior based on the preference value.
            var isSingle = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'singleClick';
            _this.selectChange();
            if (isSingle) {
                _this.open();
            }
        };
        /**
         * Handle the double clicking of nodes present in the widget.
         */
        _this.handleDoubleClick = function () {
            // Determine the behavior based on the preference value.
            var isDouble = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'doubleClick';
            // Nodes should only be opened through double clicking if the correct preference is set.
            if (isDouble) {
                _this.open();
            }
        };
        return _this;
    }
    ScmResourceComponent.prototype.render = function () {
        var hover = this.state.hover;
        var _a = this.props, name = _a.name, repository = _a.repository, resource = _a.resource, labelProvider = _a.labelProvider, commands = _a.commands, menus = _a.menus, contextKeys = _a.contextKeys;
        var rootUri = resource.group.provider.rootUri;
        if (!rootUri) {
            return undefined;
        }
        var decorations = resource.decorations;
        var icon = labelProvider.getIcon(resource.sourceUri);
        var color = decorations && decorations.color || '';
        var letter = decorations && decorations.letter || '';
        var tooltip = decorations && decorations.tooltip || '';
        var relativePath = new uri_1.default(rootUri).relative(resource.sourceUri.parent);
        var path = relativePath ? relativePath.toString() : labelProvider.getLongName(resource.sourceUri.parent);
        return React.createElement("div", { key: String(resource.sourceUri), className: "scmItem " + ScmWidget.Styles.NO_SELECT + (repository.selectedResource === resource ? ' ' + browser_1.SELECTED_CLASS : ''), onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
            React.createElement("span", { className: icon + ' file-icon' }),
            React.createElement("div", { className: 'noWrapInfo' },
                React.createElement("span", { className: 'name' }, name),
                React.createElement("span", { className: 'path' }, path)),
            React.createElement(ScmInlineActions, __assign({}, {
                hover: hover,
                menu: menus.getMenu(ScmWidget.RESOURCE_INLINE_MENU),
                args: this.contextMenuArgs,
                commands: commands,
                contextKeys: contextKeys,
                group: resource.group
            }),
                React.createElement("div", { title: tooltip, className: 'status', style: { color: color } }, letter)));
    };
    Object.defineProperty(ScmResourceComponent.prototype, "contextMenuArgs", {
        get: function () {
            return [this.props.resource]; // TODO support multiselection
        },
        enumerable: true,
        configurable: true
    });
    return ScmResourceComponent;
}(ScmElement));
exports.ScmResourceComponent = ScmResourceComponent;
var ScmResourceGroupsContainer = /** @class */ (function (_super) {
    __extends(ScmResourceGroupsContainer, _super);
    function ScmResourceGroupsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = function () {
            var selectedResource = _this.props.repository.selectedResource;
            if (!selectedResource && _this.props.repository.resources.length) {
                _this.props.repository.selectedResource = _this.props.repository.resources[0];
            }
        };
        return _this;
    }
    ScmResourceGroupsContainer.prototype.render = function () {
        var _this = this;
        var groups = this.props.repository.provider.groups;
        return React.createElement("div", { className: ScmWidget.Styles.GROUPS_CONTAINER + ' ' + ScmWidget.Styles.NO_SELECT, style: this.props.style, id: this.props.id, tabIndex: 2, onFocus: this.select }, groups && this.props.repository.provider.groups.map(function (group) { return _this.renderGroup(group); }));
    };
    ScmResourceGroupsContainer.prototype.renderGroup = function (group) {
        var visible = !!group.resources.length || !group.hideWhenEmpty;
        return visible && React.createElement(ScmResourceGroupContainer, { key: group.id, repository: this.props.repository, group: group, contextMenuRenderer: this.props.contextMenuRenderer, commands: this.props.commands, menus: this.props.menus, contextKeys: this.props.contextKeys, labelProvider: this.props.labelProvider, corePreferences: this.props.corePreferences });
    };
    ScmResourceGroupsContainer.prototype.componentDidMount = function () {
        this.props.addScmListKeyListeners(this.props.id);
    };
    return ScmResourceGroupsContainer;
}(React.Component));
exports.ScmResourceGroupsContainer = ScmResourceGroupsContainer;
var ScmResourceGroupContainer = /** @class */ (function (_super) {
    __extends(ScmResourceGroupContainer, _super);
    function ScmResourceGroupContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contextMenuPath = ScmWidget.RESOURCE_GROUP_CONTEXT_MENU;
        return _this;
    }
    ScmResourceGroupContainer.prototype.render = function () {
        var _this = this;
        var hover = this.state.hover;
        var _a = this.props, group = _a.group, menus = _a.menus, commands = _a.commands, contextKeys = _a.contextKeys;
        return React.createElement("div", { className: 'changesContainer' },
            React.createElement("div", { className: 'theia-header scm-theia-header', onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover },
                React.createElement("div", { className: 'noWrapInfo' }, group.label),
                React.createElement(ScmInlineActions, __assign({}, {
                    hover: hover,
                    args: this.contextMenuArgs,
                    menu: menus.getMenu(ScmWidget.RESOURCE_GROUP_INLINE_MENU),
                    commands: commands,
                    contextKeys: contextKeys,
                    group: group
                }), this.renderChangeCount())),
            React.createElement("div", null, group.resources.map(function (resource) { return _this.renderScmResourceItem(resource); })));
    };
    ScmResourceGroupContainer.prototype.renderChangeCount = function () {
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, this.props.group.resources.length));
    };
    ScmResourceGroupContainer.prototype.renderScmResourceItem = function (resource) {
        var name = this.props.labelProvider.getName(resource.sourceUri);
        return React.createElement(ScmResourceComponent, __assign({ key: String(resource.sourceUri) }, __assign({}, this.props, { name: name,
            resource: resource })));
    };
    Object.defineProperty(ScmResourceGroupContainer.prototype, "contextMenuArgs", {
        get: function () {
            return [this.props.group];
        },
        enumerable: true,
        configurable: true
    });
    return ScmResourceGroupContainer;
}(ScmElement));
exports.ScmResourceGroupContainer = ScmResourceGroupContainer;
var ScmInlineActions = /** @class */ (function (_super) {
    __extends(ScmInlineActions, _super);
    function ScmInlineActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScmInlineActions.prototype.render = function () {
        var _a = this.props, hover = _a.hover, menu = _a.menu, args = _a.args, commands = _a.commands, group = _a.group, contextKeys = _a.contextKeys, children = _a.children;
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' }, hover && menu.children.map(function (node, index) { return node instanceof menu_1.ActionMenuNode && React.createElement(ScmInlineAction, __assign({ key: index }, { node: node, args: args, commands: commands, group: group, contextKeys: contextKeys })); })),
            children);
    };
    return ScmInlineActions;
}(React.Component));
exports.ScmInlineActions = ScmInlineActions;
var ScmInlineAction = /** @class */ (function (_super) {
    __extends(ScmInlineAction, _super);
    function ScmInlineAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function (event) {
            event.stopPropagation();
            var _a = _this.props, commands = _a.commands, node = _a.node, args = _a.args;
            commands.executeCommand.apply(commands, __spread([node.action.commandId], args));
        };
        return _this;
    }
    ScmInlineAction.prototype.render = function () {
        var _a = this.props, node = _a.node, args = _a.args, commands = _a.commands, group = _a.group, contextKeys = _a.contextKeys;
        var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
        contextKeys.scmResourceGroup.set(group.id);
        try {
            if (!commands.isVisible.apply(commands, __spread([node.action.commandId], args)) || !contextKeys.match(node.action.when)) {
                return false;
            }
            return React.createElement("div", { className: 'theia-scm-inline-action' },
                React.createElement("a", { className: node.icon, title: node.label, onClick: this.execute }));
        }
        finally {
            contextKeys.scmResourceGroup.set(currentScmResourceGroup);
        }
    };
    return ScmInlineAction;
}(React.Component));
exports.ScmInlineAction = ScmInlineAction;


/***/ }),

/***/ "../node_modules/@theia/scm/src/browser/style/scm-amend-component.css":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/scm/src/browser/style/scm-amend-component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./scm-amend-component.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/scm/src/browser/style/scm-amend-component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/autosize/dist/autosize.js":
/*!*************************************************!*\
  !*** ../node_modules/autosize/dist/autosize.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "../node_modules/computed-style/dist/computedStyle.commonjs.js":
/*!*********************************************************************!*\
  !*** ../node_modules/computed-style/dist/computedStyle.commonjs.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/scm/src/browser/style/scm-amend-component.css":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/scm/src/browser/style/scm-amend-component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-scm-commit-container {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid var(--theia-sideBarSectionHeader-border);\n    width: 100%;\n    padding-top: 6px;\n}\n\n.theia-scm-amend-outer-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    overflow: auto;\n}\n\n.theia-scm-commit-and-button {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n}\n\n.theia-scm-commit-avatar-and-text {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 2px;\n}\n\n.theia-scm-commit-avatar-and-text img {\n    width: 27px;\n}\n\n.theia-scm-commit-details {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n\n.theia-scm-commit-message-avatar {\n    margin-right: 5px;\n}\n\n.theia-scm-commit-message-summary {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.theia-scm-commit-message-time {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--theia-descriptionForeground);\n    font-size: smaller;\n}\n\n.theia-scm-flex-container-center {\n    display: flex;\n    align-items: center;\n}\n\n.theia-scm-scrolling-container {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-top: 0;\n    border-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/line-height/lib/line-height.js":
/*!******************************************************!*\
  !*** ../node_modules/line-height/lib/line-height.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(/*! computed-style */ "../node_modules/computed-style/dist/computedStyle.commonjs.js");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ "../node_modules/react-autosize-textarea/lib/TextareaAutosize.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-autosize-textarea/lib/TextareaAutosize.js ***!
  \***********************************************************************/
/*! no static exports found */
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var autosize = __webpack_require__(/*! autosize */ "../node_modules/autosize/dist/autosize.js");
var _getLineHeight = __webpack_require__(/*! line-height */ "../node_modules/line-height/lib/line-height.js");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = _this.props.innerRef || React.createRef();
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea.current) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea.current)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea.current && autosize(_this.textarea.current); });
        }
        else {
            this.textarea.current && autosize(this.textarea.current);
        }
        if (this.textarea.current) {
            this.textarea.current.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea.current) {
            this.textarea.current.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea.current);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: this.textarea }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea.current && autosize.update(this.textarea.current);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.object,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ "../node_modules/react-autosize-textarea/lib/index.js":
/*!************************************************************!*\
  !*** ../node_modules/react-autosize-textarea/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(/*! ./TextareaAutosize */ "../node_modules/react-autosize-textarea/lib/TextareaAutosize.js");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ })

}]);
//# sourceMappingURL=29.bundle.js.map