import React from 'react'
import HeadLayout from '../layouts/head'
import ProfileLayout from '../layouts/profile'
import CompProfileLayout from '../layouts/profile/company'

const profileDetail = () => {
    return (<>
        <HeadLayout title={'Profile'} />
        {/* <ProfileLayout /> */}
        <CompProfileLayout />
    </>)
}

export default profileDetail