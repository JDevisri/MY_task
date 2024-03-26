

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);
  const [category, setCategory] = useState('');


  useEffect(() => {
    fetch('https://api.publicapis.org/categories', {
      method: "GET",
    })
      .then((resp) => {
        resp.json().then((response) => {
          setCategories(response.categories);
        });
      })
      .catch((err) => alert(err.message ?? "Something went wrong"));
  }, []);

  useEffect(() => {
    if (category) {
      fetch(`https://api.publicapis.org/entries?Category=${category}`, {
        method: "GET",
      })
        .then((resp) => {
          resp.json().then((response) => {
            setEntries(response.entries);
          });
        })
        .catch((err) => alert(err.message ?? "Something went wrong"));
    }
  }, [category]);

  return (
    <div className="container">
      <div className="cont">
        <nav>
          <ul>
            <h1 className="heading">Public APIs</h1>
          </ul>
        </nav>
        <div className="app">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="container1">
        {entries.length > 0 && entries.map((item, index) => (
          <div key={index} className="container2">
            <div className="api"><span>API:</span> {item.API}</div>
            <div className="description"><span>Description: </span>{item.Description}</div>
            <div className="auth"><span>Auth:</span> {item.Auth}</div>
            {/* <div className="https">HTTPS: {item.HTTPS}</div> */}
            <div className="cors"><span>Cors:</span> {item.Cors}</div>
            <div className="link">
              <a href={item.Link} target="_blank" rel="noopener noreferrer">
             <span>Link:</span>  {item.Link}
              </a>
            </div>
            <div className="category"><span>Category: </span>{item.Category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;