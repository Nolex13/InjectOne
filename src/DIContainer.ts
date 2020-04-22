import {TypedClass} from './Injector';

export class DIContainerClass {
    private container = new Map<TypedClass<any>, any>();

    public isAlreadyInstanced = (token: TypedClass<any>): boolean => this.container.has(token);

    public bind = (token: TypedClass<any>, instance: any): void => {
        if(!this.isAlreadyInstanced(token)){
            this.container.set(token, instance);
        }
    }

    public getInstance = (token: TypedClass<any>): any => this.container.get(token);

    public getAll = () => {
        return this.container;
    }
}

export const DIContainer = new DIContainerClass();
