import axios from '../config/axiosConfig'
import { history } from '../history'

//Create User
export const createUser = (data) => async (dispatch) => {
    const res = await axios.post("create/user", data)
    return res
}

/*For Login*/
export const loginWithJWT = (user) => {
    return (dispatch) => {
        axios.post("/login", {
            email: user.email,
            password: user.password,
        }).then((response) => {
            let userInfo = response.data.user;

            if (userInfo) {
                dispatch({
                    type: "LOGIN_WITH_JWT",
                    payload: {
                        userInfo,
                        accessToken: response.data.token,
                    },
                });
                setTimeout(() => {
                    history.push("/product");
                }, 2000);
            } else {
                console.log("user email does not exist")
            }
        }).catch((error) => {
            console.log(error)
        });
    };
};

//Logout Action
export const logout = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" });
        history.push("/login");
    };
};