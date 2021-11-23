import React from 'react'
import Preloader from '../../../common/preloader/Preloader'
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>Full Name : {props.profile.fullName}</div>
                <div>About Me: {props.profile.aboutMe}</div>
                <div>Looking For A Job: {props.profile.lookingForAJob}</div>
                <div>Looking For A Job Description: {props.profile.lookingForAJobDescription}</div>
                <div className={s.userContacts}>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>website: {props.profile.contacts.website}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>youtube: {props.profile.contacts.youtube}</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div>mainLink: {props.profile.contacts.mainLink}</div>
                </div>

            </div>
        </div>
    )

}
export default ProfileInfo


