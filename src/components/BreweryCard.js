import React from 'react'

function BreweryCard(props) {
  return (
    <li className="brewery" key={props.id}>
      <h3>
        {props.name}
      </h3>
      <ul>
        <li>
          {props.city}
        </li>
        <li>
          {props.state}
        </li>
      </ul>
    </li>
      
  )
}

export default BreweryCard