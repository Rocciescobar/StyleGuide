import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from './Start';
import Typography from './Typography';
import Colors from './Colors';
import Buttons from './Buttons';
import Links from './Links';
import Imagen from './Imagen';
import Formul from './Formul';
import Containers from './Containers';

const Main = () => (
  <main className = "col-6 col-md-9">
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route exact path='/typografia' component={Typography}/>
      <Route path='/colors' component={Colors}/>
      <Route path='/buttons' component={Buttons}/>
      <Route path='/links' component={Links}/>
      <Route path='/imagenes' component={Imagen}/>
      <Route path='/formuls' component={Formul}/>
      <Route path='/containers' component={Containers}/>
    </Switch>
  </main>
)

export default Main
