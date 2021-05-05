import React, { useEffect } from 'react'
import BannerHome from '../../components/home/BannerHome'
import BannerV1 from '../../components/home/BannerV1'
import PopularBook from '../../components/home/PopularBook'
import PopularBlog from '../../components/home/PopularBlog'
import PopularAuthor from '../../components/home/PopularAuthor'
import Quote from '../../components/home/Quote';
import PopularReview from '../../components/home/PopularReview'
// import Home from '../../components/home/Home'
import Footer from '../../components/footer/Footer';
export default function ScreenHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className='container-wrapper'>
            <BannerHome />
            <BannerV1 />
            <PopularBook />
            <PopularAuthor />
            <PopularBlog />
            <Quote />
            <PopularReview />
            <Footer />
        </div>
    )
}
