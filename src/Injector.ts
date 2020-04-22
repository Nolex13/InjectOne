import 'reflect-metadata';
import {DIContainer, DIContainerClass} from './DIContainer';

export type TypedClass<T> = new(...args: any[]) => T;

class InjectorClass{
    public resolve<T>(Type: TypedClass<any>){
        const args = Reflect.getMetadata('design:paramtypes', Type) || [];
        const injections = args.map((token: TypedClass<object>) => this.resolve<object>(token));

        if(!DIContainer.isAlreadyInstanced(Type)){
            DIContainer.bind(Type, new Type(...injections));
        }
        return DIContainer.getInstance(Type);
    }
}

export const Injector = new InjectorClass();
