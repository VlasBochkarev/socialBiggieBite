import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Music from './component/Music/Music';
import Nav from './component/Navbar/Nav';
import News from './component/News/News';
import ProfileContainer from './component/Profile/ProfileContainer';
import Settings from './component/Settings/Settings';
import UsersContainer from './component/Users/UsersContainer';





const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path='/users' render={() => <UsersContainer/>} />

          <Route path='/News' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />

        </div>

      </div>
    </BrowserRouter>
  );
}





export default App;
