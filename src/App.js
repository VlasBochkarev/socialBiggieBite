import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Nav from './component/Navbar/Nav';
import News from './component/News/News';


import Profile from './component/Profile/Profile';
import Settings from './component/Settings/Settings';




const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/News' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        
      </div>
      
    </div>
    </BrowserRouter>
  );
}





export default App;
