import 'reflect-metadata';
export declare type TypedClass<T> = new (...args: any[]) => T;
declare class InjectorClass {
    resolve<T>(Type: TypedClass<any>): any;
}
export declare const Injector: InjectorClass;
export {};
//# sourceMappingURL=Injector.d.ts.map