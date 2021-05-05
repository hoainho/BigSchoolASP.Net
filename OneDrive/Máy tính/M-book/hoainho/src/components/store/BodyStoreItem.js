import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'
import classnames from 'classname'
export default function BodyStoreItem(props) {
    const [hover, setHover] = useState(false)
    const { gridTab, book } = props
    const [item, setItem] = useState({
        name: "Book 1",
        price: "10",
        quanlity: 1
    })
    const handleAddToCart = (item) => {
        item = props;
    }
    return (
        <>
            <Col className={classnames("bodyStoreItem__col", { "bodyStoreItem__col--grid": gridTab })} xs={{ span: 12 }} md={{ span: gridTab === 0 ? 6 : 4 }} lg={{ span: gridTab === 0 ? 6 : 4 }}>
                <div className={classnames('bodyStoreItem', { 'bodyStoreItem--gird': gridTab !== 0 })}
                    onMouseOver={() => { setHover(true) }}
                    onMouseOut={() => { setHover(false) }}
                >
                    <div className="bodyStoreItem__tagSale">
                        <div className="bodyStoreItem__tagSale--hot">
                            <span className={classnames("bodyStoreItem__tagSale--hot-wrap ", { "bodyStoreItem__tagSale--hot-wrap-grid ": gridTab !== 0 })}>
                                HOT
                    </span>
                        </div>
                        <div className="bodyStoreItem__tagSale--sale">
                            <span className={classnames("bodyStoreItem__tagSale--sale-wrap ", { "bodyStoreItem__tagSale--sale-wrap-grid ": gridTab !== 0 })}>
                                SALE
                    </span>
                        </div>
                    </div>
                    <div className={classnames('bodyStoreItem__img', { 'bodyStoreItem__img--gird': gridTab !== 0 })}>
                        <div className='bodyStoreItem__img-bg'>
                            <img src={book} alt='imgg' />
                            <img className={classnames('bodyStoreItem__img-bg-default', { 'bodyStoreItem__img-bg-default--hiden': !hover })} src={book} alt='img' />
                        </div>
                        <div className={classnames("over-absolute", { "over-absolute--active": hover })}></div>
                        <div className='popularBook__item-img-sub'>
                            <div className="popularBook__item-img-sub-rating">
                                <span className={classnames("popularBook__item-img-sub-rating-item", { "popularBook__item-img-sub-rating-item--grid": gridTab !== 0 })}>
                                    <i class={classnames("fa fa-star", { "fa fa-star --grid": gridTab !== 0 })} aria-hidden="true"></i>
                                </span>
                                <span className={classnames("popularBook__item-img-sub-rating-item", { "popularBook__item-img-sub-rating-item--grid": gridTab !== 0 })}>
                                    <i class={classnames("fa fa-star", { "fa fa-star --grid": gridTab !== 0 })} aria-hidden="true"></i>
                                </span>
                                <span className={classnames("popularBook__item-img-sub-rating-item", { "popularBook__item-img-sub-rating-item--grid": gridTab !== 0 })}>
                                    <i class={classnames("fa fa-star", { "fa fa-star --grid": gridTab !== 0 })} aria-hidden="true"></i>
                                </span>
                                <span className={classnames("popularBook__item-img-sub-rating-item", { "popularBook__item-img-sub-rating-item--grid": gridTab !== 0 })}>
                                    <i class={classnames("fa fa-star-o", { "fa fa-star-o --grid": gridTab !== 0 })} aria-hidden="true"></i>
                                </span>
                                <span className={classnames("popularBook__item-img-sub-rating-item", { "popularBook__item-img-sub-rating-item--grid": gridTab !== 0 })}>
                                    <i class={classnames("fa fa-star-o", { "fa fa-star-o --grid": gridTab !== 0 })} aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="popularBook__item-img-sub-control">
                                <Link to="/details" className={classnames('popularBook__item-img-sub--aniThir', { 'popularBook__item-img-sub--aniThir--grid': gridTab !== 0 })}><i className="fa fa-eye " aria-hidden="true" ></i></Link>
                                <Link onClick={() => handleAddToCart(item)} className={classnames('popularBook__item-img-sub--aniFr', { 'popularBook__item-img-sub--aniFr--grid': gridTab !== 0 })}><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
                            </div>

                        </div>
                    </div>
                    <div className={classnames('bodyStoreItem__title', { 'bodyStoreItem__title--grid': gridTab !== 0 })}>
                        Roll Top Backpack
            </div>
                    <div className={classnames("bodyStoreItem__author", { "bodyStoreItem__author--grid": gridTab !== 0 })}>
                        Phước Nguyên Bùi
            </div>
                    <div className={classnames("bodyStoreItem__price", { "bodyStoreItem__price--grid": gridTab !== 0 })}>
                        <span className='bodyStoreItem__price-old'>200.000đ</span>
                        <span className='bodyStoreItem__price-new'>159.000đ</span>
                    </div>
                </div>
            </Col>

        </>
    )
}
