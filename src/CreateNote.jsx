import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const[expand, SetExpand] = useState(false);
const[note,SetNote] = useState({
    title:'', Content:''});

const InputEvent = (event) =>{
const {name,value}= event.target;
    SetNote((prevData) =>{
        return {...prevData,
    [name]: value,};});
        };

const addEvent = () =>{
    props.passNote(note);
    SetNote(
        {
            title: '', content :''
                
            });
        };
   
        
        const expandIt = () => {
            SetExpand(true);
        };
        const backtonop = () => {
            SetExpand(false);
        };
return (<>
<div className='main_note' onDoubleClick ={backtonop}>
<form>
{expand ?
<input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/> : null}

<textarea  rows=' ' coloumn=' ' name='content' value={note.content} onChange= {InputEvent} placeholder ='Write a Note...' onClick={expandIt} >  </textarea>
{ expand? (
<Button onClick={addEvent} >
<AddIcon className='plus_sign'/>
</Button>):null}


</form>

</div>


</>);
};


export default CreateNote;