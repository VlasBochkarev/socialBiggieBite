import React from 'react'
import s from './ProfileInfo.module.css'



const Profileinfo = () => {
    return (
    <div>
        <div>
            <img className={s.intro_img} src='https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ></img>
        </div>

        <div className={s.descriptionBlock}>
            ava+descriptions
        </div>
        
    </div>
    )
}
export default Profileinfo

 
