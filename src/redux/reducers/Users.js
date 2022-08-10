const initialState = {
    loading: false,
    GetUsers: {
        results: [],
    },
    GetUser: {
        results: [],
    },
    GetSkill: [],
    GetPortofolio: [],
    ResponseData: [],
}


const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUEST":
            return { ...state, loading: true }
        case "GET_USERS":
            return { ...state, loading: false, GetUsers: action.payload }
        case "GET_USERS_ERROR":
            return { ...state, loading: false, error: action.payload }
        case "GET_USER":
            return { ...state, loading: false, GetUser: action.payload }
        case "GET_RESPONSE":
            return { ...state, loading: false, ResponseData: action.payload }
        case "GET_SKILLS":
            return { ...state, loading: false, GetSkill: action.payload }
        case "GET_PORTFOLIO":
            return { ...state, loading: false, GetPortofolio: action.payload }
        default:
            return state
    }
}

export default Fetch