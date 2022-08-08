import HeadLayout from "../layouts/head"
import IndexLayout from "../layouts/home"


const IndexPages = () => {
  return (<>
    <HeadLayout title={'HomePage'} />
    <IndexLayout />
  </>)
}

export default IndexPages