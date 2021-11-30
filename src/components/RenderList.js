import React, { useState, useEffect } from 'react'
import Form from './Form'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiRadioCircleMarked } from 'react-icons/bi'


function RenderList({ watchedTitle, removeTitle, updateTitle}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        watched: null
    })
    
    const [titles, setTitles] = useState( [] );

    useEffect(() => {
      fetch(`https://openlibrary.org/subjects/romance.json?limit=10`)
      .then(response => response.json())
    .then(json => setTitles(json.works));
    }, [])

    console.log(setTitles)

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
    
  
    return titles.map((title, index) => (
        <div  className={title.isWatched ? 'title-row watched' : 'title-row'} 
            key={index}>
                  <div key={title.id}>
            {title.title}
        </div>
        <div className="icons">
      <BiRadioCircleMarked onClick={() => watchedTitle({ id: title.id, value: title.text, watched: true })}/>
      <AiFillEdit onClick={() => setEdit({ id: title.id, value: title.text })}
          className='edit-icon'
        />
      <MdDelete onClick={() => removeTitle(title.id)}
          className='delete-icon'/> 
      </div>
            </div>
     ));
    };  

export default RenderList;