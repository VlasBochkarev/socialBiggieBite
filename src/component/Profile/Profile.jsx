import React from 'react'
import './Profile.module.css'
import Profileinfo from './MyPosts/Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'


const Profile = (props) => {
    return <div>
        <Profileinfo />
        <MyPostsContainer />
    </div>
}
export default Profile