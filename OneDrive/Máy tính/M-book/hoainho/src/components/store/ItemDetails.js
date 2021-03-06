import React, { useState } from 'react'
import { Modal, Button, Col, Row, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import imgAfter from './Matsau.jpg'
import imgdetails from './Mattruoc.jpg'
import page1 from './C0.jpg';
import page2 from './C1.jpg';
import page3 from './C2.jpg';
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
export default function Itemdetails() {
    const [number, setNumber] = useState(1);
    const [rotate, setRotate] = useState(false);
    const [visible, setVisible] = useState(false);
    const bookTitleName = "Đắc Nhân Tâm";
    //function
    const handlePlusToNumber = () => {
        var newNum = number
        newNum += 1;
        setNumber(newNum);
    }

    const openNotification = () => {
        notification.open({
            message: 'Thông Báo',
            description:
                'Chức năng đang được phát triển',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    const handleMinusToNumber = () => {
        var newNum = number
        if (newNum > 1) {
            newNum -= 1;
            setNumber(newNum);
        }
        return
    }

    const handleRotate = () => {
        let newRotate = rotate
        newRotate = !rotate
        setRotate(newRotate);
    }

    return (
        <div className="container-wrapper">
            <div className="details">
                <Row justify="space-around" gutter={[8, 16]}>
                    <Col className="details__image" xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} >
                        <div className="details__image-container">
                            <div className="details__image-wrapper">
                                {/* first */}
                                <div class="details__image-wrapper-page" id="first">
                                    <div class="details__image-wrapper-back">
                                        <div class="details__image-wrapper-outer">
                                            <div class="details__image-wrapper-content">
                                                <img src={imgdetails} alt='imageBook' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={rotate ? "details__image-wrapper-page details__image-wrapper-page--nextRotate" : " details__image-wrapper-page details__image-wrapper-page--preRotate"} id="second">
                                    <div class="details__image-wrapper-front">
                                        <div class="details__image-wrapper-outer">
                                            <div class="details__image-wrapper-content">
                                                <img src={imgdetails} alt='imageBook' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details__image-wrapper-back" id="third">
                                        <div class="details__image-wrapper-outer">
                                            <div class="details__image-wrapper-content">
                                                <div class="details__image-wrapper-helper-class-to-make-bug-visbile">
                                                    <img src={imgAfter} alt='imageBook' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="details__image-wrapper-page" id="fourth">
                                    <div class="details__image-wrapper-front">
                                        <div class="details__image-wrapper-outer">
                                            <div class="details__image-wrapper-content">
                                                <img src={imgAfter} alt='imageBook' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="details__image-control">
                                <div className="details__image-control-rotate" onClick={handleRotate}>
                                    <span className="details__image-control-rotate-icon" >
                                        <i class="fa fa-undo" aria-hidden="true"></i>
                                    </span>
                                    <span className="details__image-control-rotate-text">
                                        Xoay
                                </span>
                                </div>
                                <div className="details__image-control-look" onClick={() => setVisible(true)}>
                                    <span className="details__image-control-look-icon">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </span>
                                    <span className="details__image-control-look-text">
                                        Xem Bên Trong
                                </span>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col className="details__content" xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                        <div className="details__content-book">
                            {/* Title */}
                            <h1 className="details__content-book-title">
                                Đắc nhân tâm
                            </h1>
                            {/* Rate Customer */}
                            <div className="details__content-book-rate">
                                <div className="popularBook__item-img-sub-rating details__content-book-rate-rating">
                                    <span className="popularBook__item-img-sub-rating-item">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span>
                                    <span className="popularBook__item-img-sub-rating-item">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span>
                                    <span className="popularBook__item-img-sub-rating-item">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span><span className="popularBook__item-img-sub-rating-item">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span><span className="popularBook__item-img-sub-rating-item">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <Link to="" className="details__content-book-rate-comment"> ( 1 lượt đánh giá )</Link>
                            </div>
                            {/* Desciption */}
                            <div className="details__content-book-description">
                                <span className="details__content-book-description-text">
                                    Đắc nhân tâm (được lòng người), tên tiếng Anh là How to Win Friends and Influence People
                                    là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay.
                                    Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936,
                                    nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán
                                    chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu
                                    tiên và hay nhất trong thể loại này, có ảnh hưởng thay đổi cuộc đời đối với hàng triệu
                                    người trên thế giới.
                                </span>
                            </div>
                            {/* Price */}
                            <div className="details__content-book-price">
                                <span className="details__content-book-price-text"> 500.000 vnđ </span>
                            </div>
                            {/* Change Quantity */}
                            <div className="details__content-book-quantity">
                                <span className="details__content-book-quantity-sub">
                                    Số lượng
                                </span>
                                <div className="details__content-book-quantity-control">
                                    <span className="details__content-book-quantity-control--minus" onClick={handleMinusToNumber}> - </span>
                                    <span className="details__content-book-quantity-control--number"> {number} </span>
                                    <span className="details__content-book-quantity-control--plus" onClick={handlePlusToNumber}> + </span>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="details__content-book-features">
                                <button className="details__content-book-features-buyNow">
                                    Buy now
                                </button>
                                <button className="details__content-book-features-addToCart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <hr className="divider" />
                        <div className="details__content-infomation">
                            <ul className="details__content-infomation-list">
                                <li className="details__content-infomation-item">
                                    <span className="details__content-infomation-text--title">
                                        Tác Giả:
                                   </span>
                                    <Link to="/author" className="details__content-infomation-text">
                                        Anh Da Đen
                                   </Link>
                                </li>
                                <li className="details__content-infomation-item">
                                    <span className="details__content-infomation-text--title">
                                        Ngày Xuất Bản:
                                   </span>
                                    <span className="details__content-infomation-text">
                                        1-1-2000
                                   </span>
                                </li>
                                <li className="details__content-infomation-item">
                                    <span className="details__content-infomation-text--title">
                                        Thể Loại:
                                   </span>
                                    <span className="details__content-infomation-text">
                                        Tình Cảm, Tâm lý
                                   </span>
                                </li>
                                <li className="details__content-infomation-item">
                                    <span className="details__content-infomation-text--title">
                                        Chia Sẻ:
                                   </span>
                                    <div className="details__content-infomation-share">
                                        <span className="details__content-infomation-share-icon">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Modal
                    title={bookTitleName}
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    footer={[
                        <Button onClick={openNotification} key="back" type="primary" shape="circle" icon={<DownloadOutlined />} size="large" />
                    ]}
                    width={650}

                >
                    <div className="details__content-lookInside">
                        <div className="details__content-lookInside-wrapper">
                            <img className="details__content-lookInside-wrapper-item" src={page1} alt='imageBook' />
                        </div>
                        <div className="details__content-lookInside-wrapper">
                            <img className="details__content-lookInside-wrapper-item" src={page2} alt='imageBook' />
                        </div>

                        <div className="details__content-lookInside-wrapper">
                            <img className="details__content-lookInside-wrapper-item" src={page3} alt='imageBook' />
                        </div>
                    </div>
                </Modal>

                <div className="details__advanced">
                    <span className="details__advanced-addWishList">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                    <span className="details__advanced-compare">
                        <i class="fa fa-random" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
