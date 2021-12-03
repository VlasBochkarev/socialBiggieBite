import React from 'react'
import './Profile.module.css'
import ProfileInfo from './MyPosts/Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'


const Profile = (props) => {
    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}
export default Profile