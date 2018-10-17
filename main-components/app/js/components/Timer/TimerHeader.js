import React from 'react';

//render element only, so can export stateless function

export const TimerHeader = ((props) =>
  <h3>I've been running for {props.time} secs</h3>
)
 
