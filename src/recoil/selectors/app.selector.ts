import { selector } from "recoil";
import { appState as app } from "recoil/atoms/app.atom";

export const appState = selector({
    key: 'appSelector',
    get: ({ get }) => {
        const appInfo = get(app);
        return appInfo;
    }
});

export const sideNavState = selector({
    key: 'sideNavSelector',
    get: ({ get }) => {
        const appInfo = get(app) as any;
        return appInfo.isSidebarCollapsed;
    }
});