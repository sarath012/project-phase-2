import React from 'react'
import { Checkboxes } from '../Checkboxes/Checkboxes';
import './Aside.css';
import { Stock } from './Stock';


export default function Aside() {

  return (
    <div className='asidebar'>
      <div className='filtercontainer'>
            <Checkboxes filterbasis="category" />
            <Checkboxes filterbasis="brand" />
            <Stock/>
            {/* <Checkboxes filterbasis="stock" /> */}


      </div>
        
    </div>
  )
}
