import React from 'react'
import './Header.module.css'
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <div>
            <h1 className={s.logo}>BiggieBit</h1>
        </div>

    </header>
}
export default Header