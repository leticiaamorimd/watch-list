import { useState, useEffect } from "react";


function Recommendation(props) {
    const [titles, setTitles] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ");
            const data = await response.json();
            setSuggestion(data[0]);
            console.log(data);
          } catch {}
        }
        getData();
      }, []);
    
      function refreshPage(event) {
        window.location.reload();
        event.preventDefault()
      }
    
      useEffect(() => {
        localStorage.setItem("titles", JSON.stringify(titles));
      }, [titles]);


      function addSuggestion(event) {
        event.preventDefault()
        setTitles([...titles, { name: suggestion.name, watched: false }])
    }

    const handleSubmit = e => {
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //giving input an id - *10000 unlikely to repeat
            text: suggestion.name
        })
    }
   
    
    
    return (
          <div className="recommendation">
            <h3> Recommendations</h3>
            <h3>{suggestion.name}</h3>
            <button variant="outline-success"   onClick={handleSubmit}>
              Add to my list!
            </button>
            <button variant="outline-info" onClick={refreshPage}>
              Get new Recommendation
            </button>
            </div>
  );
}

export default Recommendation
