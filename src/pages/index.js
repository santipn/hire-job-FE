import HeadLayout from "../layouts/head"
import IndexLayout from "../layouts/landingpage"


export async function getServerSideProps(context) {
  const { email, code } = context.query
  if (email && code) {
    return {
      props: {
        email,
        code
      }
    }
  }
  return {
    props: {
      email: null,
      code: null
    }
  }
}

const IndexPages = ({ email, code }) => {

  return (<>
    <HeadLayout title={'HomePage'} />
    <IndexLayout data={{ email, code }} />
  </>)
}

export default IndexPages