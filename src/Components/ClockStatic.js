//-------------------------------------------------- Draft --------------------------------------------------------------
// src/Components/ClockStatic.js

import React, { useEffect, useState } from 'react';
import Clock from 'react-Clock'; // Assuming 'react-Clock' is the correct package name

function ClockStatic() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}

export default ClockStatic;
