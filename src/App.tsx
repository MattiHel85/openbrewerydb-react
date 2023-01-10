import React, { useState, useEffect } from "react";
import BreweryCard from "./components/BreweryCard";
import './App.scss'

export type Brewery = {
  id: string
  name: string
  brewery_type: string
  street: string
  address_2: string
  address_3: string
  city: string
  state: string
  county_province: string
  postal_code: string
  longitude: string
  latitude: string
  phone: string
  website_url: string
  updated_at: string
  created_at: string
}


function App () {

  const [breweries, setBreweries ] = useState<Brewery[]>([]);

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/breweries')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  return (
    <div className="background">
      <h1>OPEN BREWERY DB SPA</h1>
        <div className="container">
          {breweries.map((brewery) => (
              <BreweryCard 
                key={brewery.id} 
                id={brewery.id} 
                name={brewery.name}
                city={brewery.city}
                state={brewery.state}
               />
          ))}
        </div>
    </div>
  );
}

export default App;
