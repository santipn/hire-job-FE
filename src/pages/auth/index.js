import SigninLayout from '../../layouts/auth/signin'
import HeadLayout from '../../layouts/head'

const IndexPages = () => {
    return (<>
        <HeadLayout title={'Login'} />
        <SigninLayout />
    </>)
}

export default IndexPages