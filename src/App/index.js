import React from 'react';
import { AppUI } from './AppUI';
import { ListProvider } from '../ListContext';

function App() {
  return (
  <ListProvider>
          <AppUI      />
  </ListProvider>
  );
}

export default App;
