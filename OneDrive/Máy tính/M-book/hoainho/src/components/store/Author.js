import React, { useState } from 'react'
import { Row, Col, Button, Modal, notification, Carousel } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import imgAuthor from './authorDNT.jpg';
import book1 from './book1.jpg';
import BookItem from './BodyStoreItem';
export default function Author() {
    const [visible, setVisible] = useState(false);
    const openNotification = () => {
        notification.open({
            message: 'Thông Báo',
            description:
                'Chức năng đang được phát triển',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    return (
        <div className="container-wrapper">
            <div className="author">
                <div className="author__title">
                    <h1 className="author__title-content">Tác Giả</h1>
                </div>
                <Row gutter={[8, 1]} className="author__row">
                    <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }}>
                        <div className="author__content">
                            <div className="author__content-slogan">
                                <h3 className="author__content-slogan-text">
                                    " Da Anh Đen Nhưng Lòng Anh Trắng
                                    Cả Đời Ngược Nắng Nên Da Anh Đen "
                                </h3>
                            </div>
                            <div className="author__content-wrapper">
                                <Carousel >
                                    <div className="author__content-wrapper--custom">
                                        <div className="author__content-wrapper-items">
                                            <BookItem book={book1} gridTab={1} />
                                            <BookItem book={book1} gridTab={1} />
                                            <BookItem book={book1} gridTab={1} />
                                            <BookItem book={book1} gridTab={1} />
                                            <BookItem book={book1} gridTab={1} />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="author__content-wrapper-items">
                                            <BookItem book={book1} gridTab={1} />
                                            <BookItem book={book1} gridTab={true} />
                                            <BookItem book={book1} gridTab={true} />
                                            <BookItem book={book1} gridTab={true} />
                                            <BookItem book={book1} gridTab={true} />
                                        </div>
                                    </div>
                                    <div className="author__content-wrapper--custom">
                                        <div className="author__content-wrapper-items">
                                            <BookItem book={book1} />
                                            <BookItem book={book1} />
                                            <BookItem book={book1} />
                                            <BookItem book={book1} />
                                            <BookItem book={book1} />
                                        </div>
                                    </div>
                                </Carousel>

                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                        <div className="author__image">
                            <div className="author__image-img">
                                <img className="author__image-img-item" src={imgAuthor} alt="imgBook" />
                                <span className="author__image-img-icon" onClick={() => setVisible(true)}>
                                    <i class="fa fa-expand" aria-hidden="true"></i>
                                </span>
                            </div>
                            <Modal
                                title="THÔNG TIN TÁC GIẢ"
                                centered
                                visible={visible}
                                onCancel={() => setVisible(false)}
                                footer={[
                                    <Button onClick={openNotification} key="back" type="primary" shape="circle" icon={<DownloadOutlined />} size="large" />
                                ]}
                                width={650}
                            >
                                <div className="details__content-lookInside">
                                    <div className="author__image-content-wrapper">
                                        <h5 className="author__image-content-wrapper-name"> Anh Da Đen </h5>
                                        <span className="author__image-content-wrapper-birthDate"> (24/11/1888 – 1/11/1955)</span>
                                        <p className="author__image-content-wrapper-description--modal"> Anh Da Đen là một nhà văn và nhà thuyết trình Mỹ
                                        và là người phát triển các lớp tự giáo dục,
                                        nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước
                                        công chúng và các kỹ năng giao tiếp giữa mọi người.
                                        Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri,
                                        ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu
                                        năm 1936, một cuốn sách thuộc hàng bán chạy nhất và
                                        được biết đến nhiều nhất cho đến tận ngày nay, nội dung
                                        nói về cách ứng xử, cư xử trong cuộc sống. Ông cũng
                                        viết một cuốn tiểu sử Abraham Lincoln, với tựa đề
                                        Lincoln con người chưa biết, và nhiều cuốn sách khác,
                                        nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước
                                        công chúng và các kỹ năng giao tiếp giữa mọi người.
                                        Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri,
                                        ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu
                                        năm 1936, một cuốn sách thuộc hàng bán chạy nhất và
                                        được biết đến nhiều nhất cho đến tận ngày nay, nội dung
                                        nói về cách ứng xử, cư xử trong cuộc sống. Ông cũng
                                        viết một cuốn tiểu sử Abraham Lincoln, với tựa đề
                                        Lincoln con người chưa biết, và nhiều cuốn sách khác,
                                        nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước
                                        công chúng và các kỹ năng giao tiếp giữa mọi người.
                                        Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri,
                                        ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu
                                        năm 1936, một cuốn sách thuộc hàng bán chạy nhất và
                                        được biết đến nhiều nhất cho đến tận ngày nay, nội dung
                                        nói về cách ứng xử, cư xử trong cuộc sống. Ông cũng
                                        viết một cuốn tiểu sử Abraham Lincoln, với tựa đề
                                        Lincoln con người chưa biết, và nhiều cuốn sách khác,
                                        nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước
                                        công chúng và các kỹ năng giao tiếp giữa mọi người.
                                        Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri,
                                        ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu
                                        năm 1936, một cuốn sách thuộc hàng bán chạy nhất và
                                        được biết đến nhiều nhất cho đến tận ngày nay, nội dung
                                        nói về cách ứng xử, cư xử trong cuộc sống. Ông cũng
                                        viết một cuốn tiểu sử Abraham Lincoln, với tựa đề
                                    Lincoln con người chưa biết, và nhiều cuốn sách khác.</p>

                                    </div>
                                </div>
                            </Modal>
                            <div className="author__image-content">
                                <div className="author__image-content-wrapper">
                                    <h5 className="author__image-content-wrapper-name"> Anh Da Đen </h5>
                                    <span className="author__image-content-wrapper-birthDate"> (24/11/1888 – 1/11/1955)</span>
                                    <p className="author__image-content-wrapper-description"> Anh Da Đen là một nhà văn và nhà thuyết trình Mỹ
                                    và là người phát triển các lớp tự giáo dục,
                                    nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước
                                    công chúng và các kỹ năng giao tiếp giữa mọi người.
                                    Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri,
                                    ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu
                                    năm 1936, một cuốn sách thuộc hàng bán chạy nhất và
                                    được biết đến nhiều nhất cho đến tận ngày nay, nội dung
                                    nói về cách ứng xử, cư xử trong cuộc sống. Ông cũng
                                    viết một cuốn tiểu sử Abraham Lincoln, với tựa đề
                                    Lincoln con người chưa biết, và nhiều cuốn sách khác.</p>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
