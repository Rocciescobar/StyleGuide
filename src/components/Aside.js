import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => (
  <div>
    <div className="">      
      <span><Link to='/'></Link></span>
      <span><Link to='/colors'></Link></span>  
    </div>
  </div>
)
export default Aside