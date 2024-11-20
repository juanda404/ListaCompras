import './TodoCounter.css';

function TodoCounter({total, completed}){
  return (
      <><h1 className='Title green'> Shopping List</h1>
            <h2 className='Title marron'>
                    {completed === total
                    ? 'Congratulation you have shop all' 
                    :   <>You have shopped for <span>{completed} </span>out of <span>{total}</span> groceries.
                    </>
                    }
            </h2>
      </>
  
    );
  }

  export { TodoCounter }; 