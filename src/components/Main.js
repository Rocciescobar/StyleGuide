import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from './Typography';
import Colors from './Colors';

const Main = () => (
  <main>
    <Switch>      
      <Route path='/colors' component={Colors}/>
      <Route exact path='/' component={Typography}/>      
    </Switch>
  </main>
)

export default Main