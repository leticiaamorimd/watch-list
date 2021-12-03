import React, { useState } from 'react'
import Form from './Form'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiRadioCircleMarked } from 'react-icons/bi'
import Recommendation from './Recommendation'

function Title({ titles, watchedTitle, removeTitle, updateTitle}) {
const [edit, setEdit] = useState({
    id: null,
    value: '',
    watched: ''
});

const submitUpdate = value => {
    updateTitle(edit.id, value);
    setEdit({
      id: '',
      value: '',
      watched: ''
    });
  };

if(edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
}

return titles.map((title,  index) => (
  <div
  className={title.watched ? 'title-row watched' : 'title-row'}
  key={index}
>
    <div key={title.id} onClick={() => watchedTitle(title.id)}>
    {title.text}
      </div>
   
      <BiRadioCircleMarked  onClick={() => watchedTitle({ id: title.id })} />
      
      <AiFillEdit onClick={() => setEdit({ id: title.id, value: title.text })}
          className='edit-icon'
        />
      <MdDelete onClick={() => removeTitle(title.id)}
          className='delete-icon'/> 
      </div>        
 ));
};

export default Title;



/*
<div  className={title.watched ? 'title-row watched' : 'title-row'} 
key={index}>
  <div  key={title.id} 
      <h2 onClick={() => watchedTitle(title.id)}>        {title.text}</h2>
*/