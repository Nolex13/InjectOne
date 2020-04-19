import {TypedClass} from './Injector';

export const Injectable = (): (target: TypedClass<any>) => void => {
    return (target: TypedClass<any>) => {
        // console.log(target);
    };
};
