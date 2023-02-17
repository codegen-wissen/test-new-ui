/*redux*/
import { useSelector } from "react-redux";
/*redux*/
import { useHistory } from "react-router-dom";

/*recoil*/
// import { useRecoilValue } from "recoil";
/*recoil*/

import SVG from "react-inlinesvg";
import Brand from "../brand/Brand";
import AsideMenu from "../aside-menu/AsideMenu";
import logoutSVG from "../../../theme/assets/media/svg/Home/Door-open.svg";

/*recoil*/
// import { sideNavState } from "recoil/selectors/app.selector";
/*recoil*/

const Aside = () => {
  const history = useHistory();

  /*redux*/
  const isSideBarCollapsed = useSelector(
    (state: any) => state.app.isSidebarCollapsed
  );
  /*redux*/

  /*recoil*/
  // const isSideBarCollapsed = useRecoilValue(sideNavState);
  /*recoil*/

  const logout = () => {
    history.push("/auth/login");
  };
  return (
    <div
      className={
        `aside d-flex flex-column flex-row-auto ` +
        (isSideBarCollapsed ? "isCollapsed" : "")
      }
    >
      <Brand />
      <AsideMenu />
      <div className="logout-ct d-flex flex-center" onClick={() => logout()}>
        <SVG src={logoutSVG} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Aside;
