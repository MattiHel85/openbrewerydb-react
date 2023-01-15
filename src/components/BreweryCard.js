import React from 'react'
import Button from './Button'
import "../App.scss"

export default function BreweryCard(props) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Clicked!');
  }
 
  return (
    
    <div className="brewery" key={props.id}>
        <div>
          <h2>
            {props.name}
            
          </h2>  
          <p>{props.key}</p>  
          <p>
            {props.city}
          </p>
          <p>
            {props.state}
          </p>
        </div>
        
        
        <Button onClick={handleClick}/>       
      
    
    </div>
      
  )
}

// export default BreweryCard