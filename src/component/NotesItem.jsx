import React, { useContext } from 'react'
import NoteContext from '../NotesContext/Notes/noteContext';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

function NotesItem({notes,updateMyNote,showAlert}) {
 // console.log(credentials.name);
  const myContext = useContext(NoteContext);
  const {deleteNote} = myContext;

  const handleOnDelete =()=>{
  //console.log(notes._id);
   deleteNote(notes._id);
   showAlert("Item deleted Successfully", 'success')
  }


  return (
  

      
        <div className="card  my-3 " >
           <div className="card-body  ">
             <h4 className="card-title"><strong>{notes.title}</strong> </h4>
            
              <p className="card-text">{notes.description}</p>
              <a 
              onClick={()=>updateMyNote(notes)}
              href="#" className='btn btn-primary'>Edit Note <FaEdit /></a>
              <a
              onClick={handleOnDelete}
               href="#" className='btn btn-primary mx-2'>Delete Note <RiDeleteBinFill /></a>
           </div>
        </div>

  
  )
}

export default NotesItem;
