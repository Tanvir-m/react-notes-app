

import { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import UserInput from '../UserInput/UserInput';

const Notes = ()=>{

    const getItemsFromLocalStorage = ()=>{
        const list = localStorage.getItem('notes-app');

        if(list){
            return JSON.parse(localStorage.getItem('notes-app'))
        }else{
            return [];
        }
    }

    const [listItems, setListItems] = useState(getItemsFromLocalStorage());

    const addNoteHandler = (tit,tex)=>{
        const items = [...listItems];
        items.push({
            title:tit,
            text:tex,
            edit:true
        })

        setListItems(items);
    }

    const removeClickHandler = (listIndex)=>{
        if(window.confirm('Are you sure you want to remove it')){
            const items = [...listItems];
            items.splice(listIndex, 1);
            setListItems(items);
        }
        
    }

    const editClickHandler = (listIndex)=>{
        const items = [...listItems];
        items[listIndex].edit = false;
        setListItems(items);
    }

    const saveClickHandler = (tit,text,listIndex)=>{
        const items = [...listItems];
        items[listIndex].edit = true;
        items[listIndex].title = tit;
        items[listIndex].text = text;
        setListItems(items);
    }

    const deleteAllClickHandler = ()=>{
        if(window.confirm('Are you sure you want to delete all items from list')){
            setListItems([]);
        }
    }
    

    useEffect(()=>{
        localStorage.setItem('notes-app', JSON.stringify(listItems));
    },[listItems]);
    return (
        <>
            <UserInput addNoteHandler={addNoteHandler} />
            <ListItems
                listItems={listItems}
                removeClickHandler={removeClickHandler}
                editClickHandler={editClickHandler}
                saveClickHandler={saveClickHandler}
                deleteAllClickHandler={deleteAllClickHandler}
             />
        </>
    )
}

export default Notes;