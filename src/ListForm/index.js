import React from "react";
import './ListForm.css';
import { ListContext } from '../ListContext';

function ListForm(){
    const {
            setOpenModal,
            addList,

    } = React.useContext(ListContext);

    const [newListValue, setNewListValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addList(newListValue);
        setOpenModal (false);
}

const onCancel = () =>{
    setOpenModal (false);
}

const onChange = (event) =>{
    setNewListValue (event.target.value);
}


    return (
        <form onSubmit={onSubmit}>
            <label>Write your new food</label>
            <textarea 
                placeholder="Text to writer "
                value ={newListValue}
                onChange={onChange}
            />
            <div className="ListForm-buttonContainer">
                 <button className="ListForm-button ListForm-button--cancel" 
                 type="button"
                 onClick={onCancel}>
                    Cancel
                </button>
                <button className="ListForm-button ListForm-button--add" 
                type="submit"

                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { ListForm };