import React, {useState} from 'react'
import Form from './Form'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiRadioCircleMarked } from 'react-icons/bi'



function Title({ titles, watchedTitle, removeTitle, updateTitle}) {
const [edit, setEdit] = useState({
    id: null,
    value: '',
    watched: null
})

console.log(titles)

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
              <div key={title.id} onClick={() => watchedTitle(title.id)}>
        {title.text}
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

export default Title;
