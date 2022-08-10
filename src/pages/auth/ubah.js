import UbahLayout from '../../layouts/auth/ubah'
import HeadLayout from '../../layouts/head'

export async function getServerSideProps(context) {
    const { email, code } = context.query
    if (!email && !code) {
        context.res.setHeader("location", "/auth");
        context.res.statusCode = 302;
        context.res.end();
        return {
            props: {},
        };
    }
    return {
        props: {
            email,
            code
        }
    }
}

const ChangePages = ({ email, code }) => {
    return (<>
        <HeadLayout title={'Konfirmasi Password'} />
        <UbahLayout data={{ email, code }} />
    </>)
}

export default ChangePages