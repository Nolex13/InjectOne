import 'reflect-metadata';

export type TypedClass<T> = new(...args: any[]) => T;

class InjectorClass{
    public resolve<T>(Type: TypedClass<any>){
        const args = Reflect.getMetadata('design:paramtypes', Type) || [];
        const injections = args.map((token: TypedClass<object>) => this.resolve<object>(token));

        return new Type(...injections);
    }
}

export const Injector = new InjectorClass();
