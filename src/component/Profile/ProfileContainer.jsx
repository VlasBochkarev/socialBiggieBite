import React from 'react'
import {connect} from 'react-redux'
import Profile from './Profile'
import './Profile.module.css'
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     // saveProfile={this.props.saveProfile}
                     updateStatus={this.props.updateStatus}/>

        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, saveProfile, savePhoto, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)

