import { TodoCounter } from '../TodoCounter';
import{TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { ListContext } from '../ListContext';
import React from 'react';
import { Modal } from '../Modal';

function AppUI(){
    const {
      loading,
      error,
      searchedFoods,
      buyedFood,
      deleteFood,
      openModal,
      setOpenModal, 
} = React.useContext(ListContext);

    return (
        <>
          <TodoCounter  />
          <TodoSearch   />
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

          {openModal && (
              <Modal>
                    la funcionalidad de agregar todos
              </Modal>
          )}
        </>
      );
}

export { AppUI};