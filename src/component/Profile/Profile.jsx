import React from 'react'
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Profileinfo from './MyPosts/Profileinfo/Profileinfo'


const Profile = (props) => {

    

    return <div>
        <Profileinfo />
        <MyPosts 
        posts={props.profilePage.posts} 
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>
    </div>
}
export default Profile