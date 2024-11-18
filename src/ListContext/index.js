import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ListContext = React.createContext();

function ListProvider({children}){
    const {
        item: shoppingList,
         saveItem: saveFoods,
        loading,
        error,
        } = useLocalStorage('FOOD_V1',[] );
const [searchValue, setSearchValue] = React.useState('');
const [openModal, setOpenModal] = React.useState(false);

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

const addList = (text) =>{
    const newList = [...shoppingList];
    newList.push({
        text,
        completed: false,
    });
    saveFoods(newList);
}

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
        <ListContext.Provider value={{
                loading,
                error,
                buyFood,
                allFood,
                searchValue,
                setSearchValue,
                searchedFoods,
                addList,
                buyedFood,
                deleteFood,
                openModal, 
                setOpenModal,
        }}>
            { children } 
        </ListContext.Provider>

    );
}
export  { ListContext, ListProvider};