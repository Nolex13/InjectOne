import 'reflect-metadata';

const REQUIRED_KEY = Symbol('parameterMetadata');

export function InjectableParam(token: string) {
    return (
        target: any,
        propertyKey: string | symbol,
        parameterIndex: number,
    ):any => {
        console.log(token, target, propertyKey, parameterIndex);
        console.log(Reflect.getMetadata('design:paramtypes', target));
        return 'param1';
    };
}
