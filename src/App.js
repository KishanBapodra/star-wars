import React, { useState, useEffect } from 'react';
import Card from './components/card';
import {fetchPlanets, fetchPlnts, fetchSpecies } from './utils';
import { motion } from 'framer-motion';

const App = () => {
    
  const [planets, setPlanets] = useState([]);
  const [reptileSpecies, setSpecies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    if(!toggle)
      fetchPlanets().then(res => setPlanets(res[0]));
    else
      fetchSpecies().then(res => setSpecies(res)).then(() => setLoading(false));
  },[toggle]);

  useEffect(() => {
    let url = [];
    if(!isLoading) {
      reptileSpecies.forEach(ele => {
          url.push(ele.homeworld);
      });
    }
    fetchPlnts(url).then(res => setPlanets(res));

  }, [isLoading, reptileSpecies, toggle]);
  
  if(planets !== null) {
    return (
      <div className='bg-star-wars-1 min-h-screen bg-auto'>
        <nav className="text-center p-10 min-h-fit font-galaxy text-4xl">
          <div className='flex justify-between items-center'>
            <h1 className='text-white'>STAR WARS</h1>
            <motion.button whileHover={{scale: [1,1.1,1,1.1,1]}} className='p-2 text-white text-sm bg-neutral-500 rounded-full' onClick={() => setToggle(!toggle)}>toggle</motion.button>
          </div>
          <div className='mt-10'>
            {planets.map((planet,i) => {
                return(
                  <motion.li
                    initial={{y: -50, x: '-100vw'}}
                    animate={{y: 0, x: 0}}
                    transition={{delay: 0.25, duration: 0.5, stiffness: 50, type: 'spring'}}
                    key={i}
                    className='font-sans text-sm list-none my-5'
                  >
                    <Card planet={planet} toggle={toggle}/>
                  </motion.li>
                )
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
