import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import LindsayNeuman from './pages/lindsay-neuman/lindsay-neuman.component';
import Blog from './pages/blog/blog.components';
import Podcast from './pages/podcast/podcast.component';
import Contact from './pages/contact/contact.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/lindsay-neuman' component={LindsayNeuman}/>
        <Route exact path='/blog' component={ Blog }/>
        <Route exact path='/podcast' component={ Podcast }/>
        <Route exact path='/contact' component={ Contact }/>
      </Switch>
    </div>
  );
}

export default App;
