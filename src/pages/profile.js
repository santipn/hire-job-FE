import React, { useEffect } from 'react'
import useVerify from '../lib/useVerify';
import HeadLayout from '../layouts/head'
import ProfileLayout from '../layouts/profile'
import CompProfileLayout from '../layouts/profile/company'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from '../lib/session';
import { useRouter } from 'next/router';

const ProfilePages = () => {
    const router = useRouter();
    const { data } = useVerify({})
    useEffect(() => {
        if (!data?.isLoggedIn) {
            router.push('/auth');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (<>
        <HeadLayout title={'Profile'} />
        {data?.role === 'pekerja' ? <ProfileLayout /> : <CompProfileLayout />}
    </>)

}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    const data = req.session.data;

    if (!data) {
        res.setHeader("location", "/auth");
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            user: { isLoggedIn: true }
        },
    };
}, sessionOptions);

export default ProfilePages