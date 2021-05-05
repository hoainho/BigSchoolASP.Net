import React from 'react'
import { Link } from 'react-router-dom';
import { Col } from 'antd'
import moment from 'moment'
export default function BlogItem(props) {
    let { poster } = props
    return (
        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} className="blog__container-main-list">
            <div className="blog__container-main-wrapper">
                <div className="blog__container-main-wrapper-post">
                    <div className="blog__container-main-wrapper-post-image">
                        <img className="blog__container-main-wrapper-post-image-pic" src={poster?.urlImage} />
                    </div>

                    <div className="blog__container-main-wrapper-post-date">
                        <span className="blog__container-main-wrapper-post-date-text">
                            {/* 15/03/2021 */}
                            {poster?.createddate && moment(poster.createddate).format('L')}
                        </span>
                    </div>
                    <div className="blog__container-main-wrapper-post-content">
                        <h5 className="blog__container-main-wrapper-post-content-title">{poster?.title}</h5>
                        <p className="blog__container-main-wrapper-post-content-text">
                            {poster?.content}
                        </p>
                    </div>
                </div>
                <div className="blog__container-main-wrapper-control">
                    <Link to={`/blogDetails/${poster?.id}`} className="blog__container-main-wrapper-control-btn">
                        Đọc Tiếp
                    </Link>

                </div>
            </div>
        </Col>
    )
}
