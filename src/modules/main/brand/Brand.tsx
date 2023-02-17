import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

/*redux*/
import { useDispatch, useSelector } from "react-redux";
/*redux*/

/*recoil*/
// import { useRecoilState } from "recoil";
/*recoil*/

/*recoil*/
// import { appState } from "recoil/atoms/app.atom";
/*recoil*/

/*redux*/
import { setIsSidebarCollapsed } from "redux/reducers/appReducer";
/*redux*/

import btnArrowSvg from '../../../theme/assets/media/svg/Navigation/Angle-double-left.svg';

const Brand = () => {

    /*recoil*/
    // const [appInfo, setAppInfo] = useRecoilState(appState);
    /*recoil*/

    /*redux*/
    const dispatch = useDispatch();
    /*redux*/

    /*redux*/
    const isSideBarCollapsed = useSelector((state: any) => state.app.isSidebarCollapsed);
    /*redux*/

    /*recoil*/
    // const isSideBarCollapsed = appInfo['isSidebarCollapsed'];
    /*recoil*/

    const toggleCollapse = () => {
        /*recoil*/
        // setAppInfo((appState: any) => ({ ...appState, isSidebarCollapsed: !appState.isSidebarCollapsed }));
        /*recoil*/

        /*redux*/
        dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
        /*redux*/
    }

    return (
        <div className="brand flex-column-auto">
            <Link to="" className="brand--logo">
                <span>APP</span>
            </Link>

            <button className="brand--toggle btn btn-sm px-0" onClick={() => toggleCollapse()}>
                <span className="svg-icon svg-icon-xl">
                    <SVG fontSize={isSideBarCollapsed ? '20px' : '24px'} src={btnArrowSvg} />
                </span>
            </button>
        </div>
    );
}

export default Brand;