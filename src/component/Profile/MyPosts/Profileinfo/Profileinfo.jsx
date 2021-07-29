import React from 'react'
import s from './ProfileInfo.module.css'



const Profileinfo = () => {
    return (
    <div>
        <div>
            <img className={s.intro_img} src='https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'></img>
        </div>

        <div className={s.descriptionBlock}>
            ava+descriptions
        </div>
        
    </div>
    )
}
export default Profileinfo