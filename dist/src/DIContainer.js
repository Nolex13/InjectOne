"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DIContainerClass = /** @class */ (function () {
    function DIContainerClass() {
        var _this = this;
        this.container = new Map();
        this.isAlreadyInstanced = function (token) { return _this.container.has(token); };
        this.bind = function (token, instance) {
            if (!_this.isAlreadyInstanced(token)) {
                _this.container.set(token, instance);
            }
        };
        this.getInstance = function (token) { return _this.container.get(token); };
        this.getAll = function () {
            return _this.container;
        };
    }
    return DIContainerClass;
}());
exports.DIContainerClass = DIContainerClass;
exports.DIContainer = new DIContainerClass();
//# sourceMappingURL=DIContainer.js.map