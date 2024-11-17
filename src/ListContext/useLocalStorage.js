import React from "react";

function useLocalStorage( itemName, initialValue){
    const  [item, setItem] =React.useState(initialValue);

    const  [loading, setLoading] =React.useState(true);
    const  [error, setError] =React.useState(false);

    React.useEffect(() =>{

      setTimeout(() =>{
        try {
          const  localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
    
            } else {
                      parsedItem = JSON.parse(localStorageItem);
                      setItem(parsedItem);
            }
            setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      },2000);
    },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
};

return {
  item, 
  saveItem,
  loading,
  error,
};
}

export { useLocalStorage }

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