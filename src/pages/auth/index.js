import SigninLayout from '../../layouts/auth/signin'
import HeadLayout from '../../layouts/head'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from '../../lib/session';
import useVerify from '../../lib/useVerify';

const IndexPages = () => {
    const { mutateData } = useVerify({
        redirectTo: "/home",
        redirectIfFound: true,
    })
    return (<>
        <HeadLayout title={'Login'} />
        <SigninLayout />
    </>)
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    const data = req.session.data;
    // console.log(data, 'ssr');

    if (data) {
        res.setHeader("location", "/home");
        res.statusCode = 302;
        res.end();
        return {
            props: {},
        };
    }

    return {
        props: {},
    };
}, sessionOptions);

export default IndexPages