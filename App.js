import React, {Component} from 'react';
import Header from './Components/Header';
import Contacto from './Pcontacto';
import Aboutus from './Components/Pages/Aboutus';
import Bienestar from './Components/Pages/Bienestar';
import Taboo from './Components/Pages/Expo-Taboo';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact />
          <Route path='/Aboutus' component={Aboutus} />
          <Route path='/Expo-Bienestar' component={Bienestar} />
          <Route path='/Contacto' component={Contacto} />
          <Route path='/Expo-Taboo' component={Taboo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
