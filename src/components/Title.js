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
    watched: null
});

const submitUpdate = value => {
    updateTitle(edit.id, value);
    setEdit({
      id: null,
      value: '',
      watched: null
    });
  };

if(edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
}

return titles.map((title,  index) => (
    <div  className={title.watched ? 'title-row watched' : 'title-row'} 
        key={index}>
              <h2 onClick={() => watchedTitle(title.id)}>        {title.text}</h2>
      <BiRadioCircleMarked />
      
      <AiFillEdit onClick={() => setEdit({ id: title.id, value: title.text })}
          className='edit-icon'
        />
      <MdDelete onClick={() => removeTitle(title.id)}
          className='delete-icon'/> 
      </div>        
 ));
};

export default Title;
