import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Stack, Inline, Image } from '@forge/react';
// import { invoke } from '@forge/bridge';
import { Button } from "@forge/react";
import { ProgressBar } from '@forge/react';

/**
 * TODO
 * - connect progress bar to 'goals' - and the text changes based on $ goal or hour goal
 * - insert dynamic tree
 * - connext to database to make the tree dynamic
 * - aesthetics
 * COMPLETE
 * - dynamic progress bar that updates with buttons
 */

const App = () => {
  // progress tracker
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  // adds an integer to update the progress tracker
  const addInteger = (integer) => {
    setCurrent(current + integer);
    const newTotal = total + integer;
    setTotal(newTotal);
    setProgress(newTotal / 100);
  }

  return (
    <>
      
      <Image src='https://i.imgur.com/3C5DECQ.png' alt="Seedling" size="small"/>
      
      
      <Stack space="space.200" alignInline="center">
      <ProgressBar ariaLabel={`Done: ${current} of ${total}`} value={progress} />
          <Text>Progress Tracker</Text>
          <Inline space="space.200">
              <Button onClick={() => addInteger(10)}>$25</Button>
              <Button onClick={() => addInteger(20)}>$50</Button>
              <Button onClick={() => addInteger(20)}>$75</Button>
          </Inline>
      </Stack>
      
          
              
          
    
    </>
  );
};



ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
