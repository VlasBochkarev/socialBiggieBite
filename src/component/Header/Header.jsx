import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.css'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
             <div className={s.loginBlock}>
                 {props.isAuth ? props.login : 
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div>
                <b className={s.logo}>BiggieBit</b>
            </div>
            
           
        </header>
    )
}
export default Header