import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlAPI = process.env.NEXT_PUBLIC_URL_API;


const GetUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    };
}

const getALlUsers = (data) => {
    return {
        type: "GET_USERS",
        payload: data
    };
}

const GetUsersError = (error) => {
    return {
        type: "GET_USERS_ERROR",
        payload: error
    };
}

export const GetAllUsers = ({ sort, page = 1, limit, search, isActive }) => {
    return (dispatch) => {
        dispatch(GetUsersRequest())
        axios({
            method: "GET",
            url: `/api/users${search ? `?search=${search}` : '?search='}${isActive ? `&isActive=${isActive}` : ''}${sort ? `&sort=${sort}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => {
            dispatch(getALlUsers(res.data.data));
        }).catch((err) => {
            dispatch(GetUsersError(err.response.data));

        })
    }
}