import React from 'react'
import './Profile.module.css'
import ProfileInfo from './MyPosts/Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}
export default Profile