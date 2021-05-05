import React, { useState } from 'react';
import { Table, Input, Button, } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, GiftOutlined, CheckCircleOutlined, RetweetOutlined } from '@ant-design/icons';
import image1 from './C0.jpg';
import ButtonCustom from '../../features/button';

export default function Cart() {
    const [txtDiscount, setTxtDiscount] = useState('')
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Giá ',
            dataIndex: 'price',
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 3,
            },
        },
        {
            title: 'Số Lượng',
            dataIndex: 'quanlity',
            sorter: {
                compare: (a, b) => a.quanlity - b.quanlity,
                multiple: 2,
            },
            render: (quanlity) => <div>
                <MinusCircleOutlined style={{ padding: '0 5px' }} /> {quanlity} <PlusCircleOutlined style={{ padding: '0 5px' }} />

            </div>
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'subtotal',
            sorter: {
                compare: (a, b) => a.subtotal - b.subtotal,
                multiple: 1,
            },
        },
        {
            title: 'Xóa',
            dataIndex: '',
            key: 'delete',
            render: () => <a><i class="fa fa-trash-o" aria-hidden="true"></i></a>,
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Đắc Nhân Tâm',
            price: 150,
            quanlity: 2,
            subtotal: 200,
            description: 'Đang được giảm giá 20%',
            image: image1,
        },
        {
            key: '2',
            name: 'Dế Mèn Phiêu Lưu Kí',
            price: 98,
            quanlity: 2,
            subtotal: 300,
            description: 'Đang được giảm giá 20%',
        },
        {
            key: '3',
            name: 'Clean Code',
            price: 102,
            quanlity: 2,
            subtotal: 500,
            description: 'Đang được giảm giá 20%',
        },
        {
            key: '4',
            name: 'Anh Da Đen',
            price: 500,
            quanlity: 3,
            subtotal: 900,
            description: 'Đang được giảm giá 20%',
        }
    ];
    const handleDiscount = (event) => {
        setTxtDiscount(event.target.value)
    }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const handleGetDiscount = (code) => {
        code === 'admin' ? console.log("Mã Đúng") : console.log("Mã Sai")
    }
    return (
        <div className="container-wrapper">
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={false}
                expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.image}</p>,
                    rowExpandable: record => record.name !== 'Not Expandable',
                }}
            />
            <div className="cart__control">
                <div className="cart__control-gift">
                    <Input value={txtDiscount} onChange={handleDiscount} size="large" placeholder="Nhập mã khuyến mãi" prefix={<GiftOutlined />} />
                    <Button onClick={() => handleGetDiscount(txtDiscount)} type="primary" shape="round" icon={<CheckCircleOutlined />} size="large">
                        Kiểm Tra
                     </Button>
                </div>
                <Button type="primary" shape="round" icon={<RetweetOutlined />} size="large">
                    Cập Nhật
                </Button>
            </div>
            <div className="cart">
                <div className="cart__wrapper">
                    <div className="cart__wrapper-title">
                        <h3 className=" cart__wrapper-title-text">
                            Tổng Đơn Hàng
                    </h3>
                    </div>
                    <div className="cart__wrapper-content">
                        <div className="cart__wrapper-content-item">
                            <span className="cart__wrapper-content-item-title">Tổng tiền hàng</span>
                            <span className="cart__wrapper-content-item-price">30</span>
                        </div>
                        <div className="cart__wrapper-content-item">
                            <span className="cart__wrapper-content-item-title">Ship</span>
                            <span className="cart__wrapper-content-item-price">30</span>
                        </div>
                    </div>
                    <ButtonCustom nameButton="Thanh Toán" icon="shopping-basket" />
                </div>
            </div>

        </div>
    );
}
