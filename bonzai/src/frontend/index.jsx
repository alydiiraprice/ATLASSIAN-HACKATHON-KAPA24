import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Stack, Inline, Image, Heading, Tooltip } from '@forge/react';
import { Button } from "@forge/react";
import { ProgressBar } from '@forge/react';
import { UserGroup, User } from '@forge/react';


/**
 * TODO
 * - connect progress bar to 'goals' - and the text changes based on $ goal or hour goal
 * - connext to database to make the tree dynamic
 * - aesthetics
 * COMPLETE
 * - dynamic progress bar that updates with buttons
 * - insert dynamic tree
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

    // check if current progress reaches a certain point to change the image
    if (newTotal >= 100) { 
      // fully grown bonsai
      setImageUrl('https://i.imgur.com/3C5DECQ.png');
    } 
    else if (newTotal >= 50 && newTotal < 100) { 
      // small tree
      setImageUrl('https://i.imgur.com/jupfb1V.png');
    } else if (newTotal < 50 && newTotal >= 10) { // sapling
      setImageUrl('https://i.imgur.com/BwbjQTM.png');
    }
  }

  // state to hold the image url
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/zbJoeAY.png'); // seed

  // tooltip message
  const tooltipMessage = `$25 donated by Ally!`

  return (
    <>
       <Tooltip content={tooltipMessage} position="right">
              <Image src={imageUrl} alt="bonsai" size="small"/>
       </Tooltip>
      
      <Stack space="space.200" alignInline="center">
          <ProgressBar ariaLabel={`Done: ${current} of ${total}`} value={progress} />
          <Heading as="h2">Team 14's Bonzai Growth</Heading>

          <Inline space="space.200">
              <Button onClick={() => addInteger(10)}>$10</Button>
              <Button onClick={() => addInteger(25)}>$25</Button>
              <Button onClick={() => addInteger(50)}>$50</Button>
          </Inline>

          <UserGroup>
            <User accountId="712020:81e728ed-0d16-4b92-9d11-06a903ad1d0a"/>
            <User accountId="712020:fd9499cf-34cb-42f4-b260-acc884ef7042"/>
            <User accountId="637b30e79960988ef6bd510c"/>
          </UserGroup>

      </Stack>
   
    </>
    // 
    // 
  );
};



ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
