import React from 'react'
import './Header.module.css'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <b className={s.logo}>BiggieBit</b>
            </div>
        </header>
    )
}
export default Header