import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import LindsayNeuman from './pages/lindsay-neuman/lindsay-neuman.component';
import Blog from './pages/blog/blog.components';
import Podcast from './pages/podcast/podcast.component';
import Contact from './pages/contact/contact.component';
import Sider from './components/sider/sider.component';
import Backdrop from './components/backdrop/backdrop.component'


class App extends Component {
  state = {
    siderOpen: false
  };

  siderToggleClickHandler = () => {
    this.setState((prevState) => {
      return {siderOpen: !prevState.siderOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({siderOpen:false});
  }

  render() {
    let sider;
    let backdrop;

    if(this.state.siderOpen){
      sider = <Sider/>
      backdrop =  <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        {sider}
        {backdrop}
        <Header siderClickHandler={this.siderToggleClickHandler}/>
        <Switch>
         <Route exact path='/' component={ HomePage }/>
          <Route exact path='/lindsay-neuman' component={LindsayNeuman}/>
          <Route exact path='/blog' component={ Blog }/>
          <Route exact path='/podcast' component={ Podcast }/>
          <Route exact path='/contact' render={(props) => <Contact {...props} env={this.props.env}/>}/>
        </Switch>
       <Footer/>
    </div>
    )
  };
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
