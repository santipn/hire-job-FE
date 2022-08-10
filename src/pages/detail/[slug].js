import DetailLayout from '../../layouts/detail'
import HeadLayout from '../../layouts/head'

const DetailPages = ({ slug }) => {
    // console.log(slug);
    return (<>
        <HeadLayout title={'Detail'} />
        <DetailLayout slug={slug} />
    </>)
}

export async function getServerSideProps(context) {
    const { slug } = context.params
    return {
        props: {
            slug
        }
    }
}

export default DetailPages