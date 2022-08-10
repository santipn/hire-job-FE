import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

export default function useVerify({
    redirectTo = "",
    redirectIfFound = false,
} = {}) {
    const { data: data, mutate: mutateData } = useSWR("/api/auth/verify", fetcher);
    useEffect(() => {
        // console.log(data.isLoggedIn, 'data')
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !data?.role) return;

        if (redirectIfFound && data?.isLoggedIn) {
            Router.push(redirectTo);
        }
        if (redirectTo && !redirectIfFound && !data?.isLoggedIn) {
            Router.push(redirectTo);
        }

    }, [data, redirectIfFound, redirectTo]);

    return { data, mutateData };
}