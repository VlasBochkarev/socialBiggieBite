import React from 'react'
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Profileinfo from './MyPosts/Profileinfo/Profileinfo'


const Profile = () => {
    return <div>
        <Profileinfo />
        <MyPosts />
    </div>
}
export default Profile