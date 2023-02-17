/*recoil*/
import { useRecoilValue } from "recoil";
import { authState } from "recoil/selectors/auth.selector";
/*recoil*/

/*recoil*/
// const setupAxios = (axios) => {
/*recoil*/
/*redux*/
const setupAxios = (axios, store) => {
/*redux*/
    axios.interceptors.request.use(config => {

        /*recoil*/
        // const { auth: { authToken } } = useRecoilValue(authState);
        /*recoil*/
        /*redux*/
        const { auth: { authToken } } = store.getState();
        /*redux*/
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`
        }

        return config;
    },
        err => Promise.reject(err));
}

export default setupAxios;