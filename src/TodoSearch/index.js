import React from 'react';
import './TodoSearch.css';
import { ListContext } from '../ListContext';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(ListContext);

    return (
        <input
        className='TodoSearch'
         placeholder="Write the food" 
         value={searchValue}
         onChange={(event)=>{
            setSearchValue(event.target.value);
         }}
         />
    );
  }

  export { TodoSearch }; 