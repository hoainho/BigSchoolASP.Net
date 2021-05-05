import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import FilterStore from '../../components/store/FilterStore';
import BodyStore from '../../components/store/BodyStore';
import { Checkbox } from 'antd';

export default function ScreenStore() {
    const [gridTab, setGridTab] = useState(0)
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleGridTabParent = (number) => {
        setGridTab(number)
    }
    return (
        <div className='container-wrapper'>
            <div className='stores'>
                <FilterStore gridTab={gridTab} handleGridTabParent={handleGridTabParent} />
                <BodyStore gridTab={gridTab} />
                <Checkbox>Checkbox</Checkbox>
            </div>
            <Footer />
        </div>
    )
}
