import React, { useState } from 'react'
import { Row, Select } from 'antd'
import Footer from '../footer/Footer'
import BlogAside from './BlogAside';
import BlogHeader from './BlogHeader';
import BlogContainer from './BlogContainer';
export default function Blog(props) {
    // const { poster } = props
    const [poster, setPoster] = useState()
    const { Option } = Select;
    const recieveData = (data) => {
        setPoster(data)
    }
    return (
        <div className="container-wrapper">
            <div className="blog">
                <BlogHeader />
                <Row gutter={[16, 16]} className="blog__container">
                    <BlogContainer posterList={poster} />
                    <BlogAside poster={recieveData} />
                </Row>
            </div>
            <Footer />
        </div>

    )
}
