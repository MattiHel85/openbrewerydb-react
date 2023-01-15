import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import "../App.scss"

export default function BreweryCard(props) {
  // const navigate = useNavigate();

  // handleOnClick = () => {
  //   navigate("/1")
  // }
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
        
        
        <Button onClick={() => console.log('click')}/>       
      
    
    </div>
      
  )
}

// export default BreweryCard