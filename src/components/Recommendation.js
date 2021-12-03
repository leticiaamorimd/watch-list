import { useState, useEffect } from "react";



function Recommendation(props) {
    const [suggestion, setSuggestion] = useState([]);


    function refreshPage() {
      window.location.reload();
    }

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
    
 
    
      useEffect(() => {
        localStorage.setItem("titles", JSON.stringify(suggestion));
      }, [suggestion]);




    const handleSubmit = e => {
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //giving input an id - *10000 unlikely to repeat
            text: suggestion.name
        })
    }
    
    return (
          <div className="recommendation">
            <h3> Recommended Movies</h3>
            <h2 className="recommendation-title">{suggestion.name}</h2>
            <button className="recommendation-button" variant="outline-success"   onClick={handleSubmit}>
              Add to my list
            </button>
            <button className="recommendation-button" variant="outline-info" onClick={refreshPage}>
              Get new recommendation
            </button>
            </div>
  );
}

export default Recommendation
