// MyComponent.js

import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const { value, updateValue } = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => updateValue(newValue)}>Update Value</button>
    </div>
  );
}

export default MyComponent;
