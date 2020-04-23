/* tslint:disable:max-classes-per-file */
import {Injector} from '../src/Injector';
import {Injectable} from '../src/Injectable';
import {DIContainer} from '../src/DIContainer';
import {InjectableParam} from '../src/InjectableParam';

describe('Injector', () => {
    const FOO_UID = 'foo';
    const BAR_UID = 'bar';
    const FOOBAR_UID = 'foot-bar';

    it('should instantiate a class with no dependency', () => {
        @Injectable()
        class Foo{
            public uid = FOO_UID
        }

        const foo = Injector.resolve<Foo>(Foo);

        expect(foo).not.toBeUndefined();
        expect(foo.uid).toBe(FOO_UID);
    })
    it('should instantiate a class with a dependency', () => {
        @Injectable()
        class Foo{
            public uid = FOO_UID
        }
        @Injectable()
        class Bar{
            constructor(public readonly foo: Foo) {}
            public uid = BAR_UID
        }
        const bar = Injector.resolve<Bar>(Bar);

        expect(bar).not.toBeUndefined();
        expect(bar.uid).toBe(BAR_UID);
        expect(bar.foo).not.toBeUndefined();
        expect(bar.foo.uid).toBe(FOO_UID);
    })

    it('should instantiate a class with two dependencies', () => {
        @Injectable()
        class Foo{
            public uid = FOO_UID
        }
        @Injectable()
        class Bar{
            public uid = BAR_UID
        }
        @Injectable()
        class FooBar{
            constructor(public readonly foo: Foo, public readonly bar: Bar) {}
            public uid = FOOBAR_UID
        }
        const fooBar = Injector.resolve<FooBar>(FooBar);

        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.foo).not.toBeUndefined();
        expect(fooBar.foo.uid).toBe(FOO_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
    })

    it('should instantiate a class with nested dependencies', () => {
        @Injectable()
        class Foo{
            public uid = FOO_UID
        }
        @Injectable()
        class Bar{
            constructor(public readonly foo: Foo) {}
            public uid = BAR_UID
        }
        @Injectable()
        class FooBar{
            constructor(public readonly bar: Bar) {
            }
            public uid = FOOBAR_UID
        }
        const fooBar = Injector.resolve<FooBar>(FooBar);

        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
        expect(fooBar.bar.foo).not.toBeUndefined();
        expect(fooBar.bar.foo.uid).toBe(FOO_UID);
    })

    it('dependencies used twice should be instanced once', () => {
        @Injectable()
        class Foo{
            public static counter = 0;
            constructor() {
                Foo.counter++;
            }
            public uid = FOO_UID
        }
        @Injectable()
        class Bar{
            constructor(public readonly foo: Foo) {}
            public uid = BAR_UID
        }
        @Injectable()
        class FooBar{
            constructor(public readonly foo: Foo, public readonly bar: Bar) {
            }
            public uid = FOOBAR_UID
        }
        const fooBar = Injector.resolve<FooBar>(FooBar);

        expect(fooBar).not.toBeUndefined();
        expect(fooBar.uid).toBe(FOOBAR_UID);
        expect(fooBar.foo).not.toBeUndefined();
        expect(fooBar.foo.uid).toBe(FOO_UID);
        expect(fooBar.bar).not.toBeUndefined();
        expect(fooBar.bar.uid).toBe(BAR_UID);
        expect(fooBar.bar.foo).not.toBeUndefined();
        expect(fooBar.bar.foo.uid).toBe(FOO_UID);
        expect(Foo.counter).toBe(1);
    })

    it('Inject a single param', () => {
        @Injectable()
        class Foo{
            constructor(public readonly param1: string, @InjectableParam('param2') public readonly param2: string) {
            }
            public uid = FOO_UID
        }
        const foo = new Foo('param1', 'param2');

        expect(foo).not.toBeUndefined();
        expect(foo.uid).toBe(FOO_UID);
        expect(foo.param1).toBe('param1');
        expect(foo.param2).toBe('param1');
    })
})
