import React, {useState} from 'react'
import BookReview from './BookReview'
import classnames from 'classname'

export default function PopularBook(props) {

    const [statusBookReivew, setStatusBookReivew] = useState(false)
    const handleStatusBookReivew = () =>{
        setStatusBookReivew(true);
    }
    const handleSetStatusFromChild= (value) => {
        setStatusBookReivew(value);
    }
    
    const handleSetStatus = () => {
        // status = false
        setStatusBookReivew(false);
    }
    return (
        <div className='popularBook'>
            <div className={classnames('over', {'over--active': statusBookReivew})} onClick={handleSetStatus}></div>

            <div className='popularBook__header'>
                <h2>- Popular Book -</h2>
            </div>
            <div className='row sm-gutter'>
                <div className='c-6 m-3 l-3'>
                    <div className='popularBook__item'>
                        <div className='popularBook__item-img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg' />
                            <div className='popularBook__item-img-sub'>
                                <span className='popularBook__item-img-sub--aniFr'><i class="fa fa-eye" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--top popularBook__item-img-sub--aniSe' onClick={handleStatusBookReivew}><i class="fa fa-book-open" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--aniThir'><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className='popularBook__item-img-over'></div>
                        </div>
                        <div className='popularBook__item-sub'>
                            <h3>The Half-Blood Prince</h3>
                            <span>J.K.Rowling </span>
                        </div>
                    </div>
                    <BookReview status={statusBookReivew} contents={{author: 'abc', date:'20/1/2021/', title:'Title', content:'somthing'}} handleSetStatus={handleSetStatusFromChild} />
                </div>
                <div className='c-6 m-3 l-3'>
                    <div className='popularBook__item'>
                        <div className='popularBook__item-img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg' />
                            <div className='popularBook__item-img-sub'>
                                <span className='popularBook__item-img-sub--aniFr'><i class="fa fa-eye" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--top popularBook__item-img-sub--aniSe' onClick={handleStatusBookReivew}><i class="fa fa-book-open" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--aniThir'><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className='popularBook__item-img-over'></div>
                        </div>
                        <div className='popularBook__item-sub'>
                            <h3>The Half-Blood Prince</h3>
                            <span>J.K.Rowling </span>
                        </div>
                    </div>
                    <BookReview status={statusBookReivew} contents={{author: 'abc', date:'20/1/2021/', title:'Title', content:'somthing'}} handleSetStatus={handleSetStatusFromChild} />
                </div>
                <div className='c-6 m-3 l-3'>
                    <div className='popularBook__item'>
                        <div className='popularBook__item-img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg' />
                            <div className='popularBook__item-img-sub'>
                                <span className='popularBook__item-img-sub--aniFr'><i class="fa fa-eye" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--top popularBook__item-img-sub--aniSe' onClick={handleStatusBookReivew}><i class="fa fa-book-open" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--aniThir'><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className='popularBook__item-img-over'></div>
                        </div>
                        <div className='popularBook__item-sub'>
                            <h3>The Half-Blood Prince</h3>
                            <span>J.K.Rowling </span>
                        </div>
                    </div>
                    <BookReview status={statusBookReivew} contents={{author: 'abc', date:'20/1/2021/', title:'Title', content:'somthing'}} handleSetStatus={handleSetStatusFromChild} />
                </div>
                <div className='c-6 m-3 l-3'>
                    <div className='popularBook__item'>
                        <div className='popularBook__item-img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg' alt='imgg' />
                            <div className='popularBook__item-img-sub'>
                                <span className='popularBook__item-img-sub--aniFr'><i class="fa fa-eye" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--top popularBook__item-img-sub--aniSe' onClick={handleStatusBookReivew}><i class="fa fa-book-open" aria-hidden="true"></i></span>
                                <span className='popularBook__item-img-sub--aniThir'><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className='popularBook__item-img-over'></div>
                        </div>
                        <div className='popularBook__item-sub'>
                            <h3>The Half-Blood Prince</h3>
                            <span>J.K.Rowling </span>
                        </div>
                    </div>
                    <BookReview status={statusBookReivew} contents={{author: 'abc', date:'20/1/2021/', title:'Title', content:'somthing'}} handleSetStatus={handleSetStatusFromChild} />
                </div>
            </div>

        </div>
    )
}
