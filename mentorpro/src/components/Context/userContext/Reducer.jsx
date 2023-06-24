
const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
        return {
            ...state,
            user: action.payload,
            isAuth: true,
        };
        case "LOGIN_FAIL":
        return {
            ...state,
            user: null,
            isAuth: false,
        };
        case "LOGOUT":
        return {
            ...state,
            user: null,
            isAuth: false,
        };
        case "UPDATE":
        return {
            ...state,
            user: action.payload,
        };
        default:
        return state;
    }
    }
    export default Reducer;