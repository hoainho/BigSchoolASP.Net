import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames';
import { Checkbox, notification } from 'antd';
import 'react-notifications-component/dist/theme.css'
import notificationCustom from '../../notification';
import requestAPI from '../../api';
export default function HeaderControl(props) {
    const [account, setAccount] = useState({ username: '', password: '' })
    const [fullNameDisplay, setFullNameDisplay] = useState()
    const [changePassword, setChangePassword] = useState({ passwordOld: '', passwordNew: '', repeatpasswordNew: '' })
    const [accountRegister, setAccountregister] = useState(
        { fullname: '', username: '', password: '', repeatpassword: '', roleid: "2", status: "1" });
    const [ckbRule, setCkbRule] = useState(false)
    const handleIsLogin = props.handleIsLogin
    const isChangePassword = props.isChangePassword
    const isLogin = props.isLogin
    const handleIsRegister = props.handleIsRegister
    const isRegister = props.isRegister
    const handleCheckedBox = props.handleCheckedBox
    const handleIsChangePassword = props.handleIsChangePassword
    const avatar = props.avatar
    const confirmLogin = props.confirmLogin
    const dataAccount = props.dataAccount
    const handleChangePassword = props.handleChangePassword
    const APIAccount = props.APIAccount
    const handleLogOut = props.handleLogOut
    // const onChangeName = props.onChangeName
    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        })
    }
    const handleChangeEditPassword = (event) => {
        setChangePassword({
            ...changePassword,
            [event.target.name]: event.target.value
        })
    }
    const handleChangeRegister = (event) => {
        setAccountregister({
            ...accountRegister,
            [event.target.name]: event.target.value
        })
    }
    const handleRegister = (accountRegister) => {
        if (!ckbRule) {
            notificationCustom("Nhắc Nhở", `Vui lòng chấp nhận điều khoản của M-book`, "warning")
            return;
        }
        props.handleRegister(accountRegister)
    }
    const handleLogin = (account) => {
        props.handleLogin(account);
    }
    useEffect(() => {
        setFullNameDisplay(localStorage.getItem('USERNAME'))
    }, [localStorage.getItem('USERNAME')])

    return (
        <div className='header__control'>
            {/* Login */}
            <div className={classnames('header__control-account--display', { 'header__control-account--display--actived': confirmLogin })}>
                <div className="header__control-account-user">
                    <img className="header__control-account--display-avatar" src={avatar} alt="picture" />
                    <h3 className="header__control-account--display-name">Hi, {fullNameDisplay ? fullNameDisplay : APIAccount?.fullname}</h3>
                    <div className="header__control-account-setting">
                        <ul className="header__control-account-setting-list">
                            <li className="header__control-account-setting-item" onClick={() => handleIsChangePassword(true)}>
                                <span className="header__control-account-setting-link">
                                    Đổi mật khẩu
                                </span>
                            </li >
                            <li className="header__control-account-setting-item" onClick={() => handleLogOut(true)}>
                                <Link to="/" className="header__control-account-setting-link">
                                    Đăng xuất
                                </Link>
                            </li >
                        </ul>
                    </div>
                </div>

            </div>

            <div className={classnames('header__control-account', { 'header__control-account--actived': confirmLogin })} onClick={() => handleIsLogin(true)}>
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            {/* Login */}
            <div className={classnames('subLogin', { 'subLogin--active': isLogin })}>
                <h1 className="subLogin__title">Sign In</h1>
                <div className="subLogin__container">
                    <label className="subLogin__container-title"> Tài Khoản : </label>
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    <input className="subLogin__container-txtValue" name="username" value={account.username} type="text" onChange={handleChange} >
                    </input>
                    <label className="subLogin__container-title"> Mật Khẩu : </label>
                    <i class="fa fa-key" aria-hidden="true"></i>
                    <input className="subLogin__container-txtValue" name="password" value={account.password} type="password" onChange={handleChange} />
                </div>
                <button type="button" class="btn btn-primary subLogin__btn" onClick={() => handleLogin(account)}> Đăng Nhập </button>
                <div className="subLogin__control">
                    <span className="subLogin__control-OR"> or </span>
                    <div className="subLogin__control-link">
                        <Link to="/" className="subLogin__control-link-cover subLogin__control-link-cover--facebook">
                            <i class="fa fa-facebook subLogin__control-link-cover-icon " aria-hidden="true"></i>
                        </Link>
                        <Link to="/" className="subLogin__control-link-cover">
                            <i class="fa fa-google subLogin__control-link-cover-icon" aria-hidden="true"></i>
                        </Link>
                        <Link to="/" className="subLogin__control-link-cover">
                            <i class="fa fa-twitter subLogin__control-link-cover-icon   " aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="subLogin__control-signUp">
                        <span className="subLogin__control-signUp-title"> Bạn chưa có tài khoản ? </span>
                        <Link to="/" className="subLogin__control-signUp-btn" onClick={() => handleIsRegister(true)}>Đăng Kí</Link>
                    </div>
                    <Link to="/" className="subLogin__control-ForgotPass">Quên Mật Khẩu</Link>
                </div>
            </div>
            <div className={classnames('over', { 'over--active': isLogin })} onClick={() => handleIsLogin(false)}></div>
            {/* Register */}
            <div className={classnames('subLogin subRegister', { 'subRegister--active': isRegister })}>
                <h1 className="subLogin__title">Sign Up</h1>

                <div className="subLogin__container">
                    <label className="subLogin__container-title"> Họ Và Tên : </label>
                    <input className="subLogin__container-txtValue" name="fullname" type="text" value={accountRegister.fullname} onChange={handleChangeRegister} />
                    <label className="subLogin__container-title"> Tài Khoản : </label>
                    <input className="subLogin__container-txtValue" name="username" type="text" value={accountRegister.username} onChange={handleChangeRegister} />
                    <label className="subLogin__container-title"> Mật Khẩu : </label>
                    <input className="subLogin__container-txtValue" name="password" type="password" value={accountRegister.password} onChange={handleChangeRegister} />
                    <label className="subLogin__container-title"> Nhập Lại Mật Khẩu : </label>
                    <input className="subLogin__container-txtValue" name="repeatpassword" type="password" value={accountRegister.repeatpassword} onChange={handleChangeRegister} />
                </div>
                <Checkbox className="subRegister__checked" onChange={() => setCkbRule(!ckbRule)}> Đồng ý với <Link className="subRegister__checked-link"> Điều Khoản M-Book</Link></Checkbox>
                <button type="button" class="btn btn-primary subLogin__btn subRegister__btn" onClick={() => handleRegister(accountRegister)}> Đăng Ký </button>

            </div>
            <div className={classnames('over', { 'over--active': isRegister })} onClick={() => handleIsRegister(false)}></div>
            {/* Change Password */}
            <div className={classnames('subLogin subRegister', { 'subRegister--active': isChangePassword })}>
                <h1 className="subLogin__title">Setting</h1>

                <div className="subLogin__container">
                    <label className="subLogin__container-title"> Mật khẩu hiện tại :  </label>
                    <input className="subLogin__container-txtValue" name="passwordOld" type="text" value={changePassword.passwordOld} onChange={handleChangeEditPassword} />

                    <label className="subLogin__container-title"> Mật khẩu mới </label>
                    <input className="subLogin__container-txtValue" name="passwordNew" type="password" value={changePassword.passwordNew} onChange={handleChangeEditPassword} />

                    <label className="subLogin__container-title"> Nhập lại mật khẩu mới : </label>
                    <input className="subLogin__container-txtValue" name="repeatpasswordNew" type="password" value={changePassword.repeatpasswordNew} onChange={handleChangeEditPassword} />
                </div>
                <button type="button" class="btn btn-primary subLogin__btn subRegister__btn" onClick={() => handleChangePassword(changePassword)}> Xác Nhận </button>

            </div>
            <div className={classnames('over', { 'over--active': isChangePassword })} onClick={() => handleIsChangePassword(false)}></div>
            {/* Cart */}
            <div className='header__control-cart'>
                <i class=" fa fa-shopping-bag header__control-cart-icon" aria-hidden="true"></i>
                <div className='header__control-cart-quantity'>
                    <span>0</span>
                </div>
                <div className='header__control-cart-sub'>
                    <div className='header__control-cart-sub-content'>
                        <div className="shopping-cart">
                            <div className="shopping-cart-header">
                                <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">16</span>
                                <div className="shopping-cart-total">
                                    <i class="fa fa-money" aria-hidden="true"></i>
                                    <span className="main-color-text total"> 520.000đ</span>
                                </div>
                            </div>

                            <ul className="shopping-cart-items">
                                <li className="shopping-cart-items-item clearfix">
                                    <img src="https://www.qispackaging.com.au/getmetafile/fefe4afb-dd4d-495e-ad59-209f29b47052/XMREDTREE.aspx" alt="item1" />
                                    <span className="item-name">XMREDTREE</span>
                                    <span className="item-detail">Pack 100</span>
                                    <span className="item-price">$49.50</span>
                                </li>

                                <li className="clearfix">
                                    <img src="https://www.qispackaging.com.au/getmetafile/306f6d39-792f-4c8c-b101-9c6aef675758/XMWHREIN.aspx" alt="item1" />
                                    <span className="item-name">XMWHREIN</span>
                                    <span className="item-detail">Pack 100</span>
                                    <span className="item-price">$34.06</span>
                                </li>

                                <li className="clearfix">
                                    <img src="https://www.qispackaging.com.au/getmetafile/b2f41988-a7b4-432c-b9c2-25bcb9afbcc3/XMJBRR.aspx" alt="item1" />
                                    <span className="item-name">XMJBRR</span>
                                    <span className="item-detail">Pack 25</span>
                                    <span className="item-price">$14.21</span>
                                </li>
                            </ul>
                        </div>

                        <div className='header__control-cart-sub-detail'>
                            <div class="button-custom-1">
                                <Link to="/cart">
                                    <span class="mas">Thanh Toán</span>
                                    <button id='work' type="button" name="Hover">Đến Giỏ Hàng</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
