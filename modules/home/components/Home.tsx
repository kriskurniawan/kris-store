import React from 'react'
import HomeBanner from './HomeBanner'
import HomeDeal from './HomeDeal'
import HomeFeature from './HomeFeature'
import HomeMask from './HomeMask'
import HomeRecommended from './HomeRecommended'
import HomeExtraService from './HomeExtraService'
import HomeSupplierRegion from './HomeSupplierRegion'
import HomeSubscribe from './HomeSubscribe'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeDeal />
            <HomeFeature />
            <HomeMask />
            <HomeRecommended />
            <HomeExtraService />
            <HomeSupplierRegion />
            <HomeSubscribe />
        </>
    )
}

export default Home