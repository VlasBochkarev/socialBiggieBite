import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Nav from './component/Navbar/Nav';
import News from './component/News/News';


import Profile from './component/Profile/Profile';
import Settings from './component/Settings/Settings';





const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/profile' render={() => <Profile/>} />

          <Route path='/News' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />

        </div>

      </div>
    </BrowserRouter>
  );
}





export default App;
