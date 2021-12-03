import React from 'react'
import {BrowserRouter, Redirect, Route, withRouter} from 'react-router-dom';
import './App.css';

import HeaderContainer from './component/Header/HeaderContainer';
import LoginPage from './component/Login/Login';
import Music from './component/Music/Music';
import Nav from './component/Navbar/Nav';
import News from './component/News/News';
import ProfileContainer from './component/Profile/ProfileContainer';
import Settings from './component/Settings/Settings';
import UsersContainer from './component/Users/UsersContainer';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./component/common/preloader/Preloader";
import store from "./redux/redux-store";
import DialogsContainer from './component/Dialogs/DialogsContainer';



class App extends React.Component {
    catchAllUnhandledErrors = () => {
        console.log('error')
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp