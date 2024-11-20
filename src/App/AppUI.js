import { TodoCounter } from '../TodoCounter';
import{TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    loading,
    error,
    buyFood,
    allFood,
    searchValue,
    setSearchValue,
    searchedFoods,
    buyedFood,
    deleteFood,
}){


    return (
        <>
          <TodoCounter 
            completed={buyFood} 
            total={allFood}
          />
          <TodoSearch 
                searchValue={searchValue}  
                setSearchValue={setSearchValue}
          />
    
          <TodoList>
              {loading && 
              <>
                <TodosLoading />
                <TodosLoading />
              </>}
              {error && <TodosError />}
              {(!loading &&  searchedFoods.length === 0) &&  <EmptyTodos />}
              {searchedFoods.map( shop => (
                <TodoItem 
                  key={shop.text} 
                  text={shop.text}
                  completed ={shop.completed}
                  onComplete ={() => buyedFood(shop.text)}
                  onDelete={()=> deleteFood(shop.text)}
                   />
              ))}
          </TodoList>
    
          <CreateTodoButton/>
    
        </>
      );
}

export { AppUI};