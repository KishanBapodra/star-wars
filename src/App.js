import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { fetchPlanets, fetchSpecies } from './utils';
import { motion } from 'framer-motion';

const App = () => {
    
  //initial state before specific planets
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets().then(res => setPlanets(res[0]));
    fetchSpecies();
  },[]);
  
  return (
    <div className='bg-star-wars-1 bg-contain'>
      <nav className="text-center p-10 min-h-fit font-galaxy text-4xl">
        <h1 className='text-white'>STAR WARS</h1>
        <div className='mt-10'>
          {planets.map((planet,i) => {
            if(planet.films.length !== 0)
              return(
                <motion.li
                  initial={{y: -50, x: '-100vw'}}
                  animate={{y: 0, x: 0}}
                  transition={{delay: 1, duration: 0.5, stiffness: 50, type: 'spring'}}
                  key={i}
                  className='font-sans text-sm list-none my-5'
                >
                  <Card planet={planet}/>
                </motion.li>
              )
            else 
              return(<p key={i}></p>)
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
