import { useEffect } from "react";
/*redux*/
import { useDispatch, useSelector } from "react-redux";
/*redux*/
 /*recoil*/
// import { useRecoilState } from "recoil";
// import { sideNavMenuState } from "recoil/atoms/sidenav-menu.atom";
 /*recoil*/

/*redux*/
import { fetchSidebarMenu } from "redux/reducers/appReducer";
/*redux*/
import AsideMenuList from "./AsideMenuList";
 /*recoil*/
// import { loadAppMenu } from "services/app.service";
 /*recoil*/

const AsideMenu = () => {

    /*recoil*/
    // const [sideNavMenu, setSideNavMenu] = useRecoilState(sideNavMenuState);
    /*recoil*/

    /*redux*/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSidebarMenu());
    }, [dispatch]);
    /*redux*/

    /*recoil*/
    // useEffect(() => {
    //     loadSideMenu();
    // }, []);
    /*recoil*/

    /*recoil*/
    // const loadSideMenu = async () => {
    //     const menus = await loadAppMenu();
    //     setSideNavMenu(menus);
    // }
    /*recoil*/

    /*redux*/
    const menus = useSelector((state: any) => state.app.menus) || [];
    /*redux*/

    /*recoil*/
    // const menus = sideNavMenu;
    /*recoil*/

    return (
        <div className="aside-menu">
            <AsideMenuList menus={menus} />
        </div>
    );
}

export default AsideMenu;