import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { fetchPlanets } from './utils';

const App = () => {
    
  //initial state before specific planets
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets().then(res => setPlanets(res[0]));
  },[]);
  
  return (
    <div className='bg-star-wars-1 bg-contain'>
      <nav className="text-center p-10 min-h-fit font-galaxy text-4xl">
        <h1 className='text-white'>STAR WARS</h1>
        <div className='mt-10'>
          {planets.map((planet,i) => {
            if(planet.films.length !== 0)
              return(<li key={i} className='font-sans text-sm list-none my-5'><Card planet={planet}/></li>)
            else 
              return(<p key={i}></p>)
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
