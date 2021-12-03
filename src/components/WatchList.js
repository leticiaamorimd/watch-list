import React, {useState} from 'react';
import Form from './Form';
import Title from './Title';
import Recommendation from './Recommendation'

function WatchList() {
    const [titles, setTitles] = useState([])

    const addTitle = title => {
        if(!title.text || /^\s*$/.test(title.text)) {
            return;
        }
        const newTitles = [title, ...titles]

        setTitles(newTitles);
    };

    const updateTitle = (titleId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTitles(prev => prev.map(item => (item.id === titleId ? newValue : item))
        );
    };


    const watchedTitle = id => {
        let updatedTitles = titles.map(title => {
          if (title.id === id) {
            title.watched = !title.watched;
          }
          return title;
        });
        setTitles(updatedTitles);
      };
    
 
    const removeTitle = id => {
        const removeArr = [...titles].filter(title => title.id !== id);

        setTitles(removeArr);
      };

    const removeWatched = id => {
        const watched = titles.filter((title) => {
            if (title.watched === true) {
                return false
            }
            return true
        })
        setTitles(watched)
    }


    const removeAll = id => {
        const removeArr = [];

        setTitles(removeArr);
      };

    return (
        <div className="container">
        <div className="watch-list-container">
            <h1>WATCH LIST</h1>
           
            <Form onSubmit={addTitle}/>
            
            <Recommendation onSubmit={addTitle}/>
         
            <Title  className="title-container"
            titles={titles}
            updateTitle={updateTitle}
            watchedTitle={watchedTitle}
            removeTitle={removeTitle} />
        </div>
       
        <div className="remove-buttons">
        <button onClick={removeWatched}>Remove All Watched</button>
        <button onClick={removeAll}>Remove All</button>
        </div>
        </div>
    )
}

export default WatchList
