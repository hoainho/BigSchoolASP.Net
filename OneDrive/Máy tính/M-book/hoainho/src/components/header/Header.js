import React, { useState, useEffect } from 'react'
import { FaTimes, } from 'react-icons/fa';
import { social, links } from './data';
import logoDark from './logoDark.png'
import logoLight from './logoLight.png'
import avatar from './authorDNT.jpg'
import { Link } from 'react-router-dom'
import NavbarMobile from './NavbarMobile';
import HeaderSearch from './HeaderSearch';
import HeaderControl from './HeaderControl';
import ReactNotification from 'react-notifications-component'
import notificationCustom from '../../notification';
import requestAPI from '../../api';
// Alternate way to use classes without prefix like `animated fadeIn`
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

export default function Navbar(props) {
    const [theme, setTheme] = useState(getStorageTheme());
    const [darkMode, setDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [confirmLogin, setConfirmLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [dataAccount, setDataAccount] = useState()
    const [APIAccount, setAPIAccount] = useState()

    //Database cart 

    const handleCartSub = () => {
        console.log("cart");
    }
    //
    const handleSocial = (status) => {
        props.handleStatusSocial(status);
    }
    const toggleTheme = () => {

        if (theme === 'light-theme') {
            setTheme('dark-theme');
            setDarkMode(true)
        } else {
            setTheme('light-theme');
            setDarkMode(false)
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        if (theme === 'dark-theme') {
            setDarkMode(true)
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    useEffect(() => {
        if (localStorage.getItem('TOKEN')) {
            setConfirmLogin(true)
            setIsLogin(false)
        }
    });
    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const handleIsLogin = (status) => {
        setIsLogin(status)
    }
    const handleIsRegister = (status) => {
        setIsRegister(status)
        if (status === true) {
            setIsLogin(false);
        }
    }
    const handleLogin = (acc) => {
        if (!acc || !acc.username || !acc.password) {
            notificationCustom("Nhắc Nhở", "Vui lòng nhập đầy đủ các trường", "danger")
        } else if (acc) {
            requestAPI('/account/signin', 'POST', acc)
                .then(res => {
                    if (res.status == 403 || res.status == 500 || !res.data) { //403 : chưa đăng nhập || 500 sai method hoặc cấu trúc
                        notificationCustom("Nhắc Nhở", `Sai tài khoản hoặc mật khẩu`, "warning")
                        return;
                    }
                    notificationCustom("Thông Báo", `Xin Chào, ${res.data.fullname}`, "success")
                    setAPIAccount(res.data)
                    setConfirmLogin(true);
                    setIsLogin(false);
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('USERNAME', res.data.fullname)
                })
                .catch(err => {
                    notificationCustom("Nhắc Nhở", `Sai tài khoản hoặc mật khẩu`, "warning")
                })
        }
    }
    const handleRegister = (accountRegister) => {
        requestAPI('/account/signup', 'POST', accountRegister)
            .then(res => {
                if (res.status == 500 || res.status == 405 || res.status == 208) {
                    console.log(res);
                    notificationCustom("Nhắc Nhở", `Tài khoản đã tồn tại`, "warning")
                    return;
                }
                console.log(res);
                notificationCustom("Chúc mừng", `Chào mừng ${accountRegister.fullname} đến với M-book`, "success")
                setIsRegister(false);
                setIsLogin(true);
            }).catch(err => {
                notificationCustom("Nhắc Nhở", `Tài khoản đã tồn tại`, "warning")
                console.log(err);
                return;
            })
    }
    const handleCheckedBox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    const handleIsChangePassword = (status) => {
        setIsChangePassword(status)
    }
    const handleChangePassword = (password) => {
        if (password.passwordNew !== password.repeatpasswordNew) {
            notificationCustom("Nhắc Nhở", `Xác nhận mật khẩu chưa trùng khớp`, "warning")
            return;
        }
        requestAPI('/account/changepassword', 'POST', password, { Authorization: `Bearer-${localStorage.getItem('TOKEN')}` })
            .then(res => {
                console.log(res.status);
                notificationCustom("Thông Báo", `Đổi mật khẩu thành công`, "success")
                setAPIAccount(res.data)
                setIsChangePassword(false);
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 409) {
                        notificationCustom("Nhắc Nhở", `Mật khẩu mới không được trùng với mật khẩu cũ`, "warning")
                    } else if (err.response.status === 304) {
                        notificationCustom("Nhắc Nhở", `Mật khẩu cũ chưa đúng`, "warning")
                    }
                } else {
                    console.log(err);
                }
            })

    }
    const handleLogOut = (status) => {
        setConfirmLogin(!status)
        setAPIAccount('');
        setIsLogin(status)
        localStorage.removeItem('TOKEN')
        localStorage.removeItem('USERNAME')
        window.location.reload();
    }
    return (
        <div className='header-wrapper'>
            <ReactNotification />
            <div className='header'>
                {/* =================== MENU MOBIE ================== */}
                <NavbarMobile
                    openSidebar={openSidebar}
                    isSidebarOpen={isSidebarOpen}
                    darkMode={darkMode}
                    logoDark={logoDark}
                    logoLight={logoLight}
                    FaTimes={FaTimes}
                    links={links}
                    social={social}
                    toggleTheme={toggleTheme}
                />
                {/* =================== LOGO ================== */}
                <Link className='header__logo' to='/'>
                    {
                        darkMode ? <img src={logoDark} alt='logo' /> : <img src={logoLight} alt='logo' />
                    }
                </Link>


                {/* =================== SEARCH ================== */}

                <HeaderSearch
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    handleSocial={handleSocial}
                />

                {/* =================== CONTROL ================== */}

                <HeaderControl
                    handleIsLogin={handleIsLogin}
                    isLogin={isLogin}
                    handleLogin={handleLogin}
                    handleIsRegister={handleIsRegister}
                    isRegister={isRegister}
                    handleCheckedBox={handleCheckedBox}
                    handleRegister={handleRegister}
                    avatar={avatar}
                    confirmLogin={confirmLogin}
                    dataAccount={dataAccount}
                    isChangePassword={isChangePassword}
                    handleIsChangePassword={handleIsChangePassword}
                    handleChangePassword={handleChangePassword}
                    APIAccount={APIAccount}
                    handleLogOut={handleLogOut}
                ></HeaderControl>

            </div>
        </div >
    )
}