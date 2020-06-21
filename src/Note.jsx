import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
 const deleteNote = () => {
     props.deleItem(props.id);
 };


    return(
        <>   
        <div className='note'>
        <h1> {props.title }</h1>
        <p> {props.content} </p>
        <button className ='btn' onClick= {deleteNote}>
        <DeleteOutlineIcon className='deleteIcon'></DeleteOutlineIcon>
        </button>




        </div>





        </>
    );
};
 export default Note;