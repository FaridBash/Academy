import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'
import logo from '../assets/newlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function Header(){


    return <div id='header-container'>
        <div id="header-items">
            <NavLink className='header-logo-link'>
                <img src={logo} alt="Logo" className='header-logo' />
            </NavLink>
        <div id='header-orange-container'>
        <ul id='header-menu'>
            <NavLink className='menu-item'>الرئيسية</NavLink>
            <NavLink className='menu-item'>دوراتنا</NavLink>
            <NavLink className='menu-item'>الطاقم الأكاديمي</NavLink>
            <NavLink className='menu-item'>اتصل بنا</NavLink>
        </ul>
        </div>       
    </div>
    
    <div id='login-container'>
            <NavLink id='login-link'>تسجيل دخول <FontAwesomeIcon icon={faUser} beat size='xs' /></NavLink>
            <NavLink id='login-link'>تسجيل دخول <FontAwesomeIcon icon={faUser} beat size='xs' /></NavLink>
    </div>
    <div id='outlet'>
    <Outlet/>
    </div>

    </div>
}