import { TypedClass } from './Injector';
export declare class DIContainerClass {
    private container;
    isAlreadyInstanced: (token: TypedClass<any>) => boolean;
    bind: (token: TypedClass<any>, instance: any) => void;
    getInstance: (token: TypedClass<any>) => any;
    getAll: () => Map<TypedClass<any>, any>;
}
export declare const DIContainer: DIContainerClass;
//# sourceMappingURL=DIContainer.d.ts.map