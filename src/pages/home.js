import React from 'react'
import HeadLayout from '../layouts/head'
import JobSeekersLayout from '../layouts/home'


const JobSeekersPages = () => {

    return (<>
        <HeadLayout title={'JobSeekers'} />
        <JobSeekersLayout />
    </>)
}

export default JobSeekersPages