import React from 'react'
import { NavLink } from 'react-router-dom'
import s from'./Nav.module.css'

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.items}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/News' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
        </div>
    </nav>
}

export default Nav