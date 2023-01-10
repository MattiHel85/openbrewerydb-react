import React from 'react'
import Button from './Button'
import "../App.scss"

function BreweryCard(props) {
  return (
    <div className="brewery" key={props.id}>
        <div>
          <h2>
            {props.name}
          </h2>    
          <p>
            {props.city}
          </p>
          <p>
            {props.state}
          </p>
        </div>
        
        
        <Button />       
      
    
    </div>
      
  )
}

export default BreweryCard