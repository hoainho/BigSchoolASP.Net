import React from 'react'

export default function BannerV1() {
    return (
        <div className='bannerV1'>
            <div className='row no-gutters'>
                <div className='m-6 c-12 l-6'>
                    <div className='bannerV1__item bannerV1__item--mr'>
                        <div className='bannerV1__item-bg'></div>
                        <div className='bannerV1__item-content'>
                            <div className='bannerV1__item-content-img'>
                                <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg'></img>
                            </div>

                            <div className='bannerV1__item-content-sub'>
                                <h2>The order of the Phoenix</h2>
                                <span className='author'>J.K. Rowling</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-6 c-12 l-6'>
                    <div className='bannerV1__item bannerV1__item--ml'>
                        <div className='bannerV1__item-bg'></div>
                        <div className='bannerV1__item-content'>
                            <div className='bannerV1__item-content-img'>
                                <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg'></img>
                            </div>

                            <div className='bannerV1__item-content-sub'>
                                <h2>The order of the Phoenix</h2>
                                <span className='author'>J.K. Rowling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
