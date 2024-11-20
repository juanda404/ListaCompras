import { BsXOctagon } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";


import './TodoItem.css';

function TodoItem(props){
    return (
      <li className='TodoItem'>
        <BsCheck2Square  className={`Icon Icon__check ${props.completed && "Icon__check--active"}`}
         onClick={props.onComplete}/>
         <p className={`TodoItem__p  ${props.completed && "TodoItem__p--complete"}`}>
          {props.text}
          </p>
         <BsXOctagon  
         className='Icon Icon__delete'
         onClick={props.onDelete}
         />
      </li>
    );
  }

  export{  TodoItem };