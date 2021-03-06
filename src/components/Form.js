import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
const [input, setInput] = useState('');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
})

const handleChange = e => {
    setInput(e.target.value);
  };


const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 10000), //giving input an id - *10000 unlikely to repeat
        text: input,
        watched: false
    })
}

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a title" 
                value={input} name="text" 
                className="form-input"
                onChange={handleChange}
                ref={inputRef}/>
                <button className="form-button"
                >Add</button>
            </form>
        </div>
    )
}

export default Form;
