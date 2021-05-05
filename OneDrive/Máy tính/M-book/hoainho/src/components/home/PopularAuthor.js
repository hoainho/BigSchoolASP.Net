import React from 'react'

export default function PopularAuthor() {
    return (
        <div className='popularAuthor'>
            <div className='popularAuthor__sub m-8 l-8 c-8'>
                <div className='popularAuthor__sub-header'>AUTHOR BEST SELLING</div>
                <p className='popularAuthor__sub-name'>J. K. <br></br>Rowling</p>
                <div className='popularAuthor__sub-decription'>Vestibulum porttitor iaculis gravida. Praesent vestibulum varius placerat. Cras tempor congue neque, id aliquam orci finibus sit amet. Fusce at facilisis arcu. Donec aliquet nulla id turpis semper, a bibendum metus vulputate. Suspendisse potenti</div>
                <div className='popularAuthor__sub-social'>
                    <a href='/s' className='popularAuthor__sub-social-fb'><i class="fa fa-facebook" aria-hidden="true"></i> </a>
                    <a href='/s' className='popularAuthor__sub-social-tw'><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                </div>
            </div>
            <div className='popularAuthor__img  m-4 l-4 c-4' style={{backgroundImage:'url(https://skybook-16ed9.kxcdn.com/demo-01/wp-content/uploads/2018/12/banner2.jpg)'}}>
             {/* x   <img src='https://skybook-16ed9.kxcdn.com/demo-01/wp-content/uploads/2018/12/banner2.jpg' alt='imgg' /> */}
                <div className='popularAuthor__img-over'></div>
            </div>
        </div>
    )
}
