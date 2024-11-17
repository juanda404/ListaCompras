import React from 'react';
import './TodoCounter.css';
import { ListContext } from '../ListContext';

function TodoCounter(){ 
  const {
    buyFood,
    allFood,
  } = React.useContext(ListContext);

  return (
      <><h1 className='Title green'> Shopping List</h1>
            <h2 className='Title marron'>
                    {buyFood === allFood
                    ? 'Congratulation you have shop all' 
                    :   <>You have shopped for <span>{buyFood} </span>out of <span>{allFood}</span> groceries.
                    </>
                    }
            </h2>
      </>
  
    );
  }

  export { TodoCounter }; 