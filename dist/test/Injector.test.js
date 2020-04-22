"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-classes-per-file */
var Injector_1 = require("../src/Injector");
var Injectable_1 = require("../src/Injectable");
describe('Injector', function () {
    var FOO_UID = 'foo';
    var BAR_UID = 'bar';
    var FOOBAR_UID = 'foot-bar';
    it('should instantiate a class with no dependency', function () {
        var Foo = /** @class */ (function () {
            function Foo() {
                this.uid = FOO_UID;
            }
            Foo = __decorate([
                Injectable_1.Injectable()
            ], Foo);
            return Foo;
        }());
        var foo = Injector_1.Injector.resolve(Foo);
        expect(foo).not.toBeUndefined();
        expect(foo.uid).toBe(FOO_UID);
    });
    it('should instantiate a class with a dependency', function () {
        var Foo = /** @class */ (function () {
            function Foo() {
                this.uid = FOO_UID;
            }
            Foo = __decorate([
                Injectable_1.Injectable()
            ], Foo);
            return Foo;
        }());
        var Bar = /** @class */ (function () {
            function Bar(foo) {
                this.foo = foo;
                this.uid = BAR_UID;
            }
            Bar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Foo])
            ], Bar);
            return Bar;
        }());
        var bar = Injector_1.Injector.resolve(Bar);
        expect(bar).not.toBeUndefined();
        expect(bar.uid).toBe(BAR_UID);
        expect(bar.foo).not.toBeUndefined();
        expect(bar.foo.uid).toBe(FOO_UID);
    });
    it('should instantiate a class with two dependencies', function () {
        var Foo = /** @class */ (function () {
            function Foo() {
                this.uid = FOO_UID;
            }
            Foo = __decorate([
                Injectable_1.Injectable()
            ], Foo);
            return Foo;
        }());
        var Bar = /** @class */ (function () {
            function Bar() {
                this.uid = BAR_UID;
            }
            Bar = __decorate([
                Injectable_1.Injectable()
            ], Bar);
            return Bar;
        }());
        var FooBar = /** @class */ (function () {
            function FooBar(foo, bar) {
                this.foo = foo;
                this.bar = bar;
                this.uid = FOOBAR_UID;
            }
            FooBar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Foo, Bar])
            ], FooBar);
            return FooBar;
        }());
        var fooBar = Injector_1.Injector.resolve(FooBar);
        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.foo).not.toBeUndefined();
        expect(fooBar.foo.uid).toBe(FOO_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
    });
    it('should instantiate a class with nested dependencies', function () {
        var Foo = /** @class */ (function () {
            function Foo() {
                this.uid = FOO_UID;
            }
            Foo = __decorate([
                Injectable_1.Injectable()
            ], Foo);
            return Foo;
        }());
        var Bar = /** @class */ (function () {
            function Bar(foo) {
                this.foo = foo;
                this.uid = BAR_UID;
            }
            Bar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Foo])
            ], Bar);
            return Bar;
        }());
        var FooBar = /** @class */ (function () {
            function FooBar(bar) {
                this.bar = bar;
                this.uid = FOOBAR_UID;
            }
            FooBar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Bar])
            ], FooBar);
            return FooBar;
        }());
        var fooBar = Injector_1.Injector.resolve(FooBar);
        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
        expect(fooBar.bar.foo).not.toBeUndefined();
        expect(fooBar.bar.foo.uid).toBe(FOO_UID);
    });
    it('dependencies used twice should be instanced once', function () {
        var Foo = /** @class */ (function () {
            function Foo() {
                this.uid = FOO_UID;
                Foo_1.counter++;
            }
            Foo_1 = Foo;
            var Foo_1;
            Foo.counter = 0;
            Foo = Foo_1 = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], Foo);
            return Foo;
        }());
        var Bar = /** @class */ (function () {
            function Bar(foo) {
                this.foo = foo;
                this.uid = BAR_UID;
            }
            Bar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Foo])
            ], Bar);
            return Bar;
        }());
        var FooBar = /** @class */ (function () {
            function FooBar(foo, bar) {
                this.foo = foo;
                this.bar = bar;
                this.uid = FOOBAR_UID;
            }
            FooBar = __decorate([
                Injectable_1.Injectable(),
                __metadata("design:paramtypes", [Foo, Bar])
            ], FooBar);
            return FooBar;
        }());
        var fooBar = Injector_1.Injector.resolve(FooBar);
        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.foo).not.toBeUndefined();
        expect(fooBar.foo.uid).toBe(FOO_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
        expect(fooBar.bar.foo).not.toBeUndefined();
        expect(fooBar.bar.foo.uid).toBe(FOO_UID);
        expect(Foo.counter).toBe(1);
    });
});
//# sourceMappingURL=Injector.test.js.map