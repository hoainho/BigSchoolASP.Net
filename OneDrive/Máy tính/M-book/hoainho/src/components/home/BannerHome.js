import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function Banner () {
    const [currentBanner, setCurrentBanner] = useState(1);
   
    useEffect(()=>{
        const slide = setInterval(() => {
            setCurrentBanner(currentBanner + 1)
        }, 5000);
        return() => {
            clearInterval(slide)
        }
    }, [currentBanner])

    if (currentBanner > 3) {
        setCurrentBanner(1)
    }

    return(
        <div className="Banner flex-center">
            <div className="banner-container">
                <div className={classNames('banner-first flex-center', {
                    hide: currentBanner !== 1
                })}>
                    <div>
                        <div className={currentBanner === 1 ? "banner-title fadeInDown" :"banner-title"}>
                            Find Books for All Ages!
                        </div>
                    </div>
                    {/* <div className="flex-center">
                        <div>
                            <div  
                                className={currentBanner === 1 ? "banner-link fadeInLeft" :"banner-link"}>
                               collectionName
                            </div>
                        </div>
                        <div>
                        <div 
                            className={currentBanner === 1 ? "banner-link fadeInRight" :"banner-link"}>
                               collectionName
                            </div>
                        </div>
                    </div> */}
                    <div className="flex-center">
                        <div>
                            <div 
                                className={currentBanner === 3 ? "banner-link fadeInUp" :"banner-link"}>
                                Book Store
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('banner-second flex-center', {
                    hide: currentBanner !== 2
                })}>
                        <div>
                            <div className={currentBanner === 2 ? "banner-title fadeInDown" :"banner-title"}>
                             collectionName
                            </div>
                        </div>
                        <div>
                            <div>
                                <div 
                                    className={currentBanner === 2 ? "banner-link fadeInUp" :"banner-link"} style={{marginLeft: '190px'}}>
                                    Shop now
                                </div>
                            </div>
                        </div>
                </div>
                <div className={classNames('banner-third flex-center', {
                    hide: currentBanner !== 3
                })}>
                        <div>
                            <div className={currentBanner === 3 ? "banner-title fadeInDown" :"banner-title"}>
                                Books That Master
                            </div>
                        </div>
                        {/* <div className="flex-center">
                            <div>
                                <div 
                                    className={currentBanner === 3 ? "banner-link fadeInUp" :"banner-link"}>
                                    Shop now
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
            <div className="choose-slide flex-center">
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 1
                    })}
                    onClick={()=> {setCurrentBanner(1)}}
                ></div>
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 2
                    })}
                    onClick={()=> {setCurrentBanner(2)}}
                ></div>
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 3
                    })}
                    onClick={()=> {setCurrentBanner(3)}}
                ></div>
            </div>
        </div>
    )
}
export default withRouter(Banner);