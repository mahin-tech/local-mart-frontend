export const initialState = {
    userInfo: "",
    accessToken: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_WITH_JWT":
            return Object.assign({}, state, {
                userInfo: action.payload.userInfo,
                accessToken: action.payload.accessToken,
            });
        case "LOGOUT":
            return initialState;
        default:
            return state
    }
}

export default authReducer