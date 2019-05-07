import React from 'react';
import './App.css';
import Header1 from './component/Header1'
import Header2 from './component/Header2'
import Home from './component/Home';
import ProductServices from './component/ProductServices';
import Company from './component/Company';
import Contact from './component/Contact';
import Footer from './component/Footer';

import {Route} from 'react-router-dom'






class App extends React.Component{
  render(){
    return(
      <div>
        <Header1/>
        <Header2/>
        <Route path="/" component={Home} exact/>
        <Route path="/ourproduct" component={ProductServices} exact/>
        <Route path="/ourcompany" component={Company} exact/>
        <Route path="/contactus" component={Contact} exact/>
        <Footer/>
      </div>
    )
  }
}

export default App;
