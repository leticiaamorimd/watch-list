import React, {useState} from 'react';
import Form from './Form';
import Title from './Title';


function WatchList() {
    const [titles, setTitles] = useState([]);

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
    

    const removeTitle = id => {
        const removeArr = [...titles].filter(title => title.id !== id);

        setTitles(removeArr);
      };

    const watchedTitle = id => {
        let updateTitles = titles.map(title => {
            if(titles.id === id) {
                title.isWatched = !title.isWatched
            } 
            return title;
        });
        setTitles(updateTitles);
    }

    const removeAll = id => {
        const removeArr = [titles];

        setTitles(removeArr);
      };
    return (
        <div className="container">
        <div className="watch-list-container">
            <h1>WATCH LIST</h1>
            <Form onSubmit={addTitle}/>
            <Title className="title-container" titles={titles}
            updateTitle={updateTitle}
            watchedTitle={watchedTitle}
            removeTitle={removeTitle} />
        </div>
       
        
        <button>Remove All Watched</button>
        <button onClick={removeAll}>Remove All</button>

        </div>
    )
}

export default WatchList
