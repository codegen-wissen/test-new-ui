import { selector } from "recoil";
import { authState as auth } from "recoil/atoms/auth.atom";

export const isAuthorisedState = selector({
    key: 'authSelector',
    get: ({ get }) => {
        const authInfo = get(auth) as any;
        return { isAuthorized: authInfo.auth.token != null };
    }
});

export const authState = selector({
    key: 'authSelector',
    get: ({ get }) => {
        const authInfo = get(auth) as any;
        return authInfo;
    }
});