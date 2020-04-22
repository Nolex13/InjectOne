"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var DIContainer_1 = require("./DIContainer");
var InjectorClass = /** @class */ (function () {
    function InjectorClass() {
    }
    InjectorClass.prototype.resolve = function (Type) {
        var _this = this;
        var args = Reflect.getMetadata('design:paramtypes', Type) || [];
        var injections = args.map(function (token) { return _this.resolve(token); });
        if (!DIContainer_1.DIContainer.isAlreadyInstanced(Type)) {
            DIContainer_1.DIContainer.bind(Type, new (Type.bind.apply(Type, __spreadArrays([void 0], injections)))());
        }
        return DIContainer_1.DIContainer.getInstance(Type);
    };
    return InjectorClass;
}());
exports.Injector = new InjectorClass();
//# sourceMappingURL=Injector.js.map