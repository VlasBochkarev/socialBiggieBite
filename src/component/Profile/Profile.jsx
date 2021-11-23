import React from 'react'
import './Profile.module.css'
import ProfileInfo from './MyPosts/Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}
export default Profile