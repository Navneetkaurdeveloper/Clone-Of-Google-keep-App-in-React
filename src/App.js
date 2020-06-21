import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App = () => {
        const[addItem, setAddItem] = useState([]);
    

const addNote = (note) => {
   
    setAddItem((prevData) =>{
        return[...prevData, note];
    });
};

const onDelete = (id) => {
    setAddItem((olddata) => 
    olddata.filter((currData,indx) => {
        return indx !==id;

    }))
};

return( <>
<Header/>

<CreateNote passNote={addNote}/>
{addItem.map((val, index ) => {
    return ( <Note
    key= {index}
    id= {index}
    title = {val.title}
    content = {val.content}
    deleItem = {onDelete}

    />
);
}) }
<Footer/>

</>);





};

export default App;
