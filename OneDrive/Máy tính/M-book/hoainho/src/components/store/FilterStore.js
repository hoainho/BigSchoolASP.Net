import React, { useState } from 'react'
import RangeSlider from './rangeSlider/RangeSlider';
import classname from 'classname';
export default function FilterStore(props) {
    const [sortPriceValue, setSortPriceValue] = useState([])
    const [filterActive, setFilterActive] = useState(false)
    const [filterTab, setFilterTab] = useState(0)
    const [activeTab, setActivedTab] = useState(0);
    // const { girdTab } = props
    const handleFilterActive = () => {
        setFilterActive(!filterActive)
    }

    const handleFilterTab = (number) => {
        setFilterTab(number)
    }

    const handleGridTab = (number) => {
        props.handleGridTabParent(number)
        setActivedTab(number);
    }
    return (
        <div className='filterStore'>
            <div className='filterStore__tab'>
                <div className={classname('filterStore__tab-item', { 'filterStore__tab-item--active': filterTab === 0 })} onClick={() => handleFilterTab(0)}>All Books</div>
                <div className={classname('filterStore__tab-item', { 'filterStore__tab-item--active': filterTab === 1 })} onClick={() => handleFilterTab(1)}>Hot Books</div>
                <div className={classname('filterStore__tab-item', { 'filterStore__tab-item--active': filterTab === 2 })} onClick={() => handleFilterTab(2)}>Sales Books</div>
            </div>
            <div className='filterStore__tabMobie'>
                <select className='filterStore__tabMobie-select'>
                    <option>All Books</option>
                    <option>Hot Books</option>
                    <option>Sales Books</option>
                </select>
            </div>
            <div className='filterStore__options'>
                <div className='filterStore__options-grid'>
                    <div onClick={() => handleGridTab(1)}><i className={classname("fa fa-th", { 'filterStore__options-grid-actived': activeTab })} aria-hidden="true"></i></div>
                    <div onClick={() => handleGridTab(0)}><i className={classname("fa fa-th-large", { 'filterStore__options-grid-actived': !activeTab })} aria-hidden="true"></i></div>
                </div>
                <div className='filterStore__options-filter'>
                    <div className='filterStore__options-filter-icon' onClick={handleFilterActive} ><i class="fa fa-filter" aria-hidden="true"></i>Filter</div>
                    <div className={classname('filterStore__options-filter-sub', { 'filterStore__options-filter-sub--active': filterActive })}>
                        <div className='filterStore__options-filter-sub-header'>
                            <p>Filter</p>
                            <i class="fa fa-times" aria-hidden="true" onClick={handleFilterActive} ></i>
                        </div>
                        <div className='filterStore__options-filter-sub-categories'>
                            <select className='filterStore__tabMobie-select' >
                                <option >Chọn Thể Loại </option>
                                <option >Tình Cảm</option>
                                <option>Tâm lí</option>
                            </select>
                        </div>
                        <div className='filterStore__options-filter-sub-categories'>
                            <select className='filterStore__tabMobie-select' >
                                <option >Chọn Tác Giả </option>
                                <option >Phước Nguyên</option>
                                <option>Anh Da Đen</option>
                            </select>
                        </div>
                        <div className='filterStore__options-filter-sub-categories'>
                            <select className='filterStore__tabMobie-select' >
                                <option >Chọn Tag </option>
                                <option >Hot</option>
                                <option>Sale</option>
                            </select>
                        </div>
                        <div className='filterStore__options-filter-sub-price'>
                            <span>Price</span>
                            <RangeSlider
                                setSortPriceValue={setSortPriceValue}
                            />
                        </div>
                        <div className='filterStore__options-filter-sub-btn'>
                            <span>Filter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
