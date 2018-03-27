import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from './Typography';
import Colors from './Colors';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Typography}/> 
      <Route path='/colors' component={Colors}/>
    </Switch>
  </main>
)

export default Main
