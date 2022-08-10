import HeadLayout from "../../layouts/head"
import { sessionOptions } from "../../lib/session";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from 'next/router';
import useVerify from "../../lib/useVerify";
import { useEffect } from "react";
import HireLayout from "../../layouts/hire";



const HirePages = ({ token }) => {
    const router = useRouter();
    const { data: role } = useVerify({})

    useEffect(() => {
        if (role?.role !== 'perekrut') {
            router.push('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])
    return (<>
        <HeadLayout title={'Hire'} />
        {role === 'undefined' ? '' : <HireLayout />}
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
        },
    };
}, sessionOptions)

export default HirePages