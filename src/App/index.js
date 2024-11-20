import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


// localStorage.removeItem('FOOD_V1');
// const parsedFoods =[
//     {text: 'Apples', completed: true},
//     {text: 'Tomatoes', completed: false},
//     {text: 'Lettuce', completed: true},
//     {text: 'Potatoes', completed: false},
//     {text: 'Carrots', completed: false},
//     {text: 'Chicken', completed: false},
//     {text: 'Ground beef', completed: false},
//     {text: 'Fish (Tilapia - Tuna)', completed: false},
//     {text: 'MIlk - (six pack)', completed: false},
//     {text: 'Yogurt Greek', completed: false},
//     {text: 'Eggs', completed: false},
//     {text: 'Rice', completed: false},
//     {text: 'Pasta', completed: false},
//     {text: 'Whole-grain Bread', completed: false},
//     {text: 'Oats', completed: false},
//     {text: 'Olive oil', completed: false},
//     {text: 'Salt and pepper', completed: false},
//     {text: 'Sugar', completed: false},
//     {text: 'Coffee and tea', completed: false},
// ];
// localStorage.setItem('FOOD_V1', JSON.stringify(parsedFoods));




function App() {
  const {
              item: shoppingList,
               saveItem: saveFoods,
              loading,
              error,
              } = useLocalStorage('FOOD_V1',[] );
  const [searchValue, setSearchValue] = React.useState('');

const buyFood = shoppingList.filter(
  shop => !!shop.completed)
  .length;
const allFood = shoppingList.length;

const searchedFoods = shoppingList.filter(
  (shop) => {
    const shopText =shop.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return  shopText.includes(searchText);
  } 
);

  const buyedFood = (text) => {
            const newList = [...shoppingList];
            const newIndex =newList.findIndex(
              (shop) => shop.text === text
            );
            newList[newIndex].completed = true;
            saveFoods(newList);
};

const deleteFood = (text) => {
  const newList = [...shoppingList];
  const newIndex =newList.findIndex(
    (shop) => shop.text === text
  );
  newList.splice(newIndex, 1);
  saveFoods(newList);
};

  return (
    <AppUI  
          loading={loading}
          error={error}
          buyFood = {buyFood}
          allFood = {allFood}
          searchValue= {searchValue}
          setSearchValue = {setSearchValue}
          searchedFoods = {searchedFoods}
          buyedFood = {buyedFood}
          deleteFood = {deleteFood}
    />
  );
}

export default App;
