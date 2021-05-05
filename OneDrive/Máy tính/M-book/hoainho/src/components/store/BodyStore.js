import React from 'react'
import BodyStoreItem from './BodyStoreItem';
import { Row } from 'antd'
import book1 from './book1.jpg'
import book2 from './book2.jpg'
import book3 from './book3.jpg'
import book4 from './book4.jpg'
export default function BodyStore(props) {
    let { gridTab } = props;
    return (
        <div className='bodyStore'>
            <Row gutter={[]}>
                <BodyStoreItem book={book1} gridTab={gridTab} />
                <BodyStoreItem book={book2} gridTab={gridTab} />
                <BodyStoreItem book={book3} gridTab={gridTab} />
                <BodyStoreItem book={book4} gridTab={gridTab} />
                <BodyStoreItem book={book3} gridTab={gridTab} />
                <BodyStoreItem book={book2} gridTab={gridTab} />
                <BodyStoreItem book={book1} gridTab={gridTab} />
                <BodyStoreItem book={book2} gridTab={gridTab} />
                <BodyStoreItem book={book2} gridTab={gridTab} />
                <BodyStoreItem book={book3} gridTab={gridTab} />
                <BodyStoreItem book={book4} gridTab={gridTab} />
                <BodyStoreItem book={book1} gridTab={gridTab} />
            </Row>
        </div >

    )
}
