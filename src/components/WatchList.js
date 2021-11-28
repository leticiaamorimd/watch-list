import React, {useState} from 'react';
import Form from './Form';

function WatchList() {
    const [titles, setTitles] = useState([]);

    const addTitle = title => {
        if(!title.text || /^\s*$/.test(title.text)) {
            return;
        }
        const newTitles = [title, ...titles]

        setTitles(newTitles);
        console.log(...titles)
    }
    return (
        <div>
            <h1>WATCH LIST</h1>
            <Form onSubmit={addTitle}/>
        </div>
    )
}

export default WatchList
