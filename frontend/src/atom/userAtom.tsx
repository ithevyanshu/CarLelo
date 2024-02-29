import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        isLogged: localStorage.getItem('x-var') ? true : false,
    }
});